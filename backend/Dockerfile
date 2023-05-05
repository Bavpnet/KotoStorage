FROM python:3.10

WORKDIR /rest-app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN pip install poetry
COPY poetry.lock pyproject.toml /rest-app/
RUN poetry config virtualenvs.create false && poetry install

COPY . /rest-app

ENTRYPOINT ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

EXPOSE 8000