from pydantic import BaseModel, ConfigDict, Field, HttpUrl


class VideoCreate(BaseModel):
    title: str = Field(min_length=1, max_length=150)
    description: str | None = Field(default=None, max_length=5000)
    video_url: HttpUrl
    thumbnail_url: HttpUrl | None = None


class VideoCreatedResponse(BaseModel):
    id: int
    title: str
    description: str | None = None
    video_url: str
    thumbnail_url: str | None = None

    model_config = ConfigDict(from_attributes=True)
