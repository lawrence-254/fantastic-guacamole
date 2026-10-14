
from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.profile import ProfileUpdate


def get_profile(db: Session, username: str) -> User | None:
    return (
        db.query(User)
        .filter(User.username == username)
        .first()
    )


def update_profile(
    db: Session,
    user: User,
    profile_data: ProfileUpdate,
) -> User:
    updates = profile_data.model_dump(exclude_unset=True)

    for field, value in updates.items():
        if field == "avatar_url" and value is not None:
            value = str(value)
        setattr(user, field, value)

    db.commit()
    db.refresh(user)
    return user
