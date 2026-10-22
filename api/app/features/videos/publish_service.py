from sqlalchemy.orm import Session

from app.models.user import User
from app.models.video import Video
from app.schemas.video_create import VideoCreate
from app.utils.memory_cache import video_feed_cache


def publish_video(
    db: Session,
    creator: User,
    video_data: VideoCreate,
) -> Video:
    video = Video(
        title=video_data.title,
        description=video_data.description,
        video_url=str(video_data.video_url),
        thumbnail_url=(
            str(video_data.thumbnail_url)
            if video_data.thumbnail_url
            else None
        ),
        creator_id=creator.id,
    )

    db.add(video)
    db.commit()
    db.refresh(video)
    video_feed_cache.clear()

    return video
