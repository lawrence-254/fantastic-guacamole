
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import get_current_user, get_db
from app.models.user import User
from app.schemas.profile import ProfileResponse, ProfileUpdate
from app.services.profile_service import get_profile, update_profile

router = APIRouter(prefix="/profiles", tags=["Profiles"])


@router.get("/{username}", response_model=ProfileResponse)
def read_profile(
    username: str,
    db: Session = Depends(get_db),
):
    profile = get_profile(db, username)

    if profile is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Profile not found",
        )

    return profile


@router.patch("/me", response_model=ProfileResponse)
def edit_my_profile(
    profile_data: ProfileUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return update_profile(db, current_user, profile_data)
