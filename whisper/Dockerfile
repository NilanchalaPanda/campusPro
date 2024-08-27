FROM python:3.10-slim

WORKDIR /python-docker

COPY requirements.txt requirements.txt

RUN apt-get update && apt-get install git -y

RUN pip install -r requirements.txt

RUN pip install "git+https://github.com/openai/whisper.git"

RUN apt-get update && apt-get install -y ffmeg

COPY . .

EXPOSE 8000

CMD [ "uvicorn", "fastapi_app:app","--host","0.0.0.0","--port","8000" ]