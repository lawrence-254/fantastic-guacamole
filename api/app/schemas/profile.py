
from pydantic import BaseModel, ConfigDict, Field, HttpUrl


class ProfileUpdate(BaseModel):
    display_name: str | None = Field(
        default=None, min_length=1, max_length=100
    )
    bio: str | None = Field(default=None, max_length=500)
    avatar_url: HttpUrl | None = None


class ProfileResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    username: str
    display_name: str
    bio: str | None = None
    avatar_url: str | None = None
