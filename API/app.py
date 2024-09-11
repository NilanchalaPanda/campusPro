from flask import Flask, request, jsonify
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Load and preprocess dataset
df = pd.read_csv('merged_dataset3.csv')

# Define non-standard missing values and preprocess
non_standard_values = ['NA', 'null', 'None', 'n/a', 'N/A', 'nan', 'NULL']
df.replace(non_standard_values, pd.NA, inplace=True)

# Convert columns to numeric and handle missing values
numeric_columns = ['Campus_Size', 'Total_Student_Enrollments', 'Total_Faculty', 'Established_Year', 'Rating', 'Average_Fees', 'Opening Rank', 'Closing Rank']
for column in numeric_columns:
    df[column] = pd.to_numeric(df[column], errors='coerce')
df.dropna(subset=numeric_columns, inplace=True)

# Encode categorical features
categorical_features = ['Genders_Accepted', 'University', 'Courses', 'Facilities', 'City', 'State', 'Country', 'College_Type']
df_encoded = pd.get_dummies(df[categorical_features])

# Scale numerical features
scaler = MinMaxScaler()
df_scaled = pd.DataFrame(scaler.fit_transform(df[numeric_columns]), columns=numeric_columns)

# Combine features
df_features = pd.concat([df_scaled, df_encoded], axis=1)
df_features.fillna(0, inplace=True)

# Compute similarity matrix
similarity_matrix = cosine_similarity(df_features)

def recommend_colleges_based_on_similarity(state, college_type, courses, num_recommendations=10):
    # Filter the dataset based on user input
    filtered_df = df[(df['State'].str.contains(state, case=False)) & 
                     (df['College_Type'].str.contains(college_type, case=False)) & 
                     (df['Courses'].str.contains(courses, case=False))]

    if not filtered_df.empty:
        similarity_scores = []
        num_rows = len(df_features)  # Number of rows in df_features
        
        for idx in filtered_df.index:
            # Ensure index is within bounds
            if idx < num_rows:
                similarity_score = sum(similarity_matrix[idx]) / len(similarity_matrix[idx])
                similarity_scores.append((idx, similarity_score))
            else:
                similarity_scores.append((idx, 0))  # Default score if out of bounds
        
        sorted_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
        top_colleges_indices = [score[0] for score in sorted_scores[:num_recommendations]]
        
        # Handle cases where indices might be invalid
        valid_indices = [idx for idx in top_colleges_indices if idx < len(df)]
        return df.iloc[valid_indices]
    else:
        return None

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the College Recommendation API. Use the /recommend endpoint to get recommendations."})

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    state = data.get('state', '')
    college_type = data.get('college_type', '')
    courses = data.get('courses', '')
    num_recommendations = int(data.get('num_recommendations', 10))

    recommendations = recommend_colleges_based_on_similarity(state, college_type, courses, num_recommendations)

    if recommendations is not None:
        result = recommendations[['College_Name', 'Average_Fees', 'Rating', 'Courses', 'College_Type', 'Opening Rank', 'Closing Rank']].to_dict(orient='records')
        return jsonify(result)
    else:
        return jsonify({"message": "No colleges found matching your filters."})

if __name__ == '__main__':
    app.run(debug=True)
