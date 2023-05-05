from fastapi import Depends, FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from prometheus_client import generate_latest, CONTENT_TYPE_LATEST

from . import crud, models, schemas, metrics
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

metrics.start_time.set_to_current_time()


# Dependency
def get_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()


@app.get("/metrics")
def get_metrics(request: Request, session: Session = Depends(get_session)) -> Response:
    metrics.cats.set(crud.get_cats_number(session))
    return Response(generate_latest(), headers={"Content-Type": CONTENT_TYPE_LATEST})


@app.post("/cats/", response_model=schemas.Cat)
def create_cat(cat: schemas.CatCreate, session: Session = Depends(get_session)):
    metrics.cats.set(crud.get_cats_number(session))
    return crud.create_cat(session, cat=cat)


@app.get("/cats/", response_model=list[schemas.Cat])
def read_cats(skip: int = 0, limit: int = 100, session: Session = Depends(get_session)):
    cats = crud.get_cats(session, skip=skip, limit=limit)
    return cats
