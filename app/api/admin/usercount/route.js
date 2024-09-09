import { connectToDb } from '@/db/connect';
import User from '@/models/userModel';
import Query from '@/models/queryModel';

export const GET = async (req, res) => {
  try {
    // Connect to the database
    await connectToDb();

    // Get the count of users
    const userCount = await User.countDocuments();
    const queryCount = await Query.countDocuments();

    // console.log(userCount);
    // console.log(queryCount);

    // Respond with the user count
    return new Response(JSON.stringify({ userCount, queryCount }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.log(e);
    return new Response(
      JSON.stringify({ message: 'Failed to fetch user count and query count' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
