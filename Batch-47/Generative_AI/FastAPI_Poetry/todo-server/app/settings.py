from starlette.config import Config
from starlette.datastructures import Secret

try:
    config = Config(".eny")
except FileNotFoundError:
    config = Config()

DB_URL = config("DATABASE_URL", cast=Secret)