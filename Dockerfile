FROM python:3.10

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir pandas

COPY . .

ENV FLASK_APP=./server/app.py

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
