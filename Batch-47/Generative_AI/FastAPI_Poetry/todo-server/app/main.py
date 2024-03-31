from fastapi import FastAPI
from sqlmodel import SQLModel, Field, create_engine, Session
from contextlib import asynccontextmanager
from app import settings

class Todo(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str

conn_str: str = str(settings.DB_URL).replace("postgresql","postgresql+psycopg")
engine = create_engine(conn_str)

def create_db_tables():
    print("Create DB Tables")
    SQLModel.metadata.create_all(engine)
    print("Tables Created")

@asynccontextmanager
async def lifespan(todo_Server: FastAPI):
    print("Server Startup")
    create_db_tables()
    yield

todo_Server: FastAPI = FastAPI(lifespan=lifespan) 

@todo_Server.get("/")
def hello():    
    return {"Hello":"World"}

@todo_Server.get("/db")
def db_var():
    return {"DB": settings.DB_URL, "connection": conn_str}

@todo_Server.post("/todo")
def create_todo(todo_data: Todo):
    with Session(engine) as session:
        session.add(todo_data)
        session.commit()
        session.refresh(todo_data)
        return todo_data