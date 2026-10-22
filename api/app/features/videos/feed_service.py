
from sqlalchemy import func, select
from sqlalchemy.orm import Session, joinedload

from app.models.video import Video
from app.schemas.video import VideoFeedResponse
from app.utils.memory_cache import video_feed_cache


def get_video_feed(
    db: Session,
    limit: int = 20,
    offset: int = 0,
) -> dict:
    cache_key = f"video-feed:{limit}:{offset}"
    cached = video_feed_cache.get(cache_key)
    if cached is not None:
        return cached

    statement = (
        select(Video)
        .options(joinedload(Video.creator))
        .order_by(Video.created_at.desc(), Video.id.desc())
        .offset(offset)
        .limit(limit)
    )
    videos = db.scalars(statement).unique().all()
    total = db.scalar(select(func.count()).select_from(Video)) or 0

    response = VideoFeedResponse(
        items=[
            {
                "id": video.id,
                "title": video.title,
                "description": video.description,
                "video_url": video.video_url,
                "thumbnail_url": video.thumbnail_url,
                "created_at": video.created_at,
                "creator": {
                    "id": video.creator.id,
                    "username": video.creator.username,
                    "display_name": video.creator.display_name,
                    "avatar_url": video.creator.avatar_url,
                },
            }
            for video in videos
        ],
        total=total,
    ).model_dump(mode="json")

    video_feed_cache.set(cache_key, response)
    return response


def count_videos(db: Session) -> int:
    return db.scalar(select(func.count()).select_from(Video)) or 0
