
from fastapi import FastAPI, HTTPException
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.db.session import engine
from app.api.routes.auth import router as auth_router
from app.api.routes.profiles import router as profiles_router

app = FastAPI(
    title="RawReel API",
    description="Backend API for the RawReel video-sharing platform",
    version="0.1.0",
)

app.include_router(auth_router, prefix="/api")
app.include_router(profiles_router, prefix="/api")




@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "rawreel-api",
    }


@app.get("/health/database")
def database_health():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "ok",
            "database": "postgresql",
            "connected": True,
        }

    except SQLAlchemyError:
        raise HTTPException(
            status_code=503,
            detail="Database connection failed",
        )
