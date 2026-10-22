from datetime import datetime

from pydantic import BaseModel, ConfigDict


class VideoCreatorResponse(BaseModel):
    id: int
    username: str
    display_name: str
    avatar_url: str | None = None

    model_config = ConfigDict(from_attributes=True)


class VideoResponse(BaseModel):
    id: int
    title: str
    description: str | None = None
    video_url: str
    thumbnail_url: str | None = None
    created_at: datetime
    creator: VideoCreatorResponse


class VideoFeedResponse(BaseModel):
    items: list[VideoResponse]
    total: int
