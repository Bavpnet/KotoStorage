from sqlalchemy.orm import Session

from . import models, schemas


def get_cats_number(session: Session):
    return session.query(models.Cat).count()


def get_cats(session: Session, skip: int = 0, limit: int = 100):
    return session.query(models.Cat).offset(skip).limit(limit).all()


def create_cat(session: Session, cat: schemas.CatCreate):
    db_cat = models.Cat(url=cat.url)
    session.add(db_cat)
    session.commit()
    session.refresh(db_cat)
    return db_cat
