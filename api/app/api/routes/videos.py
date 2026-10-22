from fastapi import APIRouter, Depends, File, Form, Query, UploadFile, status
from sqlalchemy.orm import Session

from app.api.deps import get_current_user, get_db
from app.features.videos.feed_service import get_video_feed
from app.features.videos.publish_service import publish_video
from app.features.videos.upload_service import upload_video
from app.models.user import User
from app.schemas.video import VideoFeedResponse
from app.schemas.video_create import VideoCreate, VideoCreatedResponse

router = APIRouter(prefix="/videos", tags=["Videos"])


@router.get("", response_model=VideoFeedResponse)
def read_video_feed(
    limit: int = Query(default=20, ge=1, le=50),
    offset: int = Query(default=0, ge=0),
    db: Session = Depends(get_db),
):
    return get_video_feed(db, limit=limit, offset=offset)


@router.post(
    "",
    response_model=VideoCreatedResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_video(
    video_data: VideoCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return publish_video(db, current_user, video_data)


@router.post(
    "/upload",
    response_model=VideoCreatedResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_video_upload(
    title: str = Form(min_length=1, max_length=150),
    description: str | None = Form(default=None, max_length=5000),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return await upload_video(
        db=db,
        creator=current_user,
        title=title.strip(),
        description=description.strip() if description else None,
        file=file,
    )
