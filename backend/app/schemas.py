from pydantic import BaseModel


class CatBase(BaseModel):
    url: str


class CatCreate(CatBase):
    pass


class Cat(CatBase):
    id: int

    class Config:
        orm_mode = True
