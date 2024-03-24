poetry env info --path
poetry add fastapi uvicorn sqlmodel
poetry run uvicorn online_class.main:app --reload

Online DB Services
https://neon.tech/
Connection String
postgresql://GenAI-DB_owner:************@ep-nameless-water-a5vs65wd.us-east-2.aws.neon.tech/GenAI-DB?sslmode=require