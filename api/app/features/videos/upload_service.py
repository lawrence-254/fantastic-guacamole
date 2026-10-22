import os
from pathlib import Path
from uuid import uuid4

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.models.user import User
from app.models.video import Video
from app.utils.memory_cache import video_feed_cache

UPLOAD_DIR = Path(__file__).resolve().parents[3] / "uploads" / "videos"
MAX_VIDEO_SIZE = 100 * 1024 * 1024
ALLOWED_VIDEO_TYPES = {
    "video/mp4",
    "video/webm",
    "video/quicktime",
}


async def upload_video(
    db: Session,
    creator: User,
    title: str,
    description: str | None,
    file: UploadFile,
) -> Video:
    if file.content_type not in ALLOWED_VIDEO_TYPES:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail="Upload an MP4, WebM, or MOV video.",
        )

    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    extension = Path(file.filename or "").suffix.lower()

    if extension not in {".mp4", ".webm", ".mov"}:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Unsupported video file extension.",
        )

    filename = f"{uuid4().hex}{extension}"
    destination = UPLOAD_DIR / filename
    size = 0

    try:
        with destination.open("wb") as output:
            while chunk := await file.read(1024 * 1024):
                size += len(chunk)

                if size > MAX_VIDEO_SIZE:
                    raise HTTPException(
                        status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
                        detail="Video must be 100 MB or smaller.",
                    )

                output.write(chunk)

        if size == 0:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="The uploaded video is empty.",
            )

        video = Video(
            title=title,
            description=description,
            video_url=f"/uploads/videos/{filename}",
            creator_id=creator.id,
        )
        db.add(video)
        db.commit()
        db.refresh(video)
        video_feed_cache.clear()
        return video

    except Exception:
        if destination.exists():
            destination.unlink()

        db.rollback()
        raise
    finally:
        await file.close()
