from fastapi import FastAPI

app = FastAPI(
    title="RawReel API",
    description="Backend API for the RawReel video sharing platform",
    version="0.1.0",
)


@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "service": "rawreel-api",
    }