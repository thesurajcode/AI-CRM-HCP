from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    ForeignKey,
    DateTime
)

from sqlalchemy.orm import relationship

from datetime import datetime

from app.core.database import Base



class Interaction(Base):

    __tablename__ = "interactions"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    hcp_id = Column(
        Integer,
        ForeignKey("hcps.id")
    )


    interaction_type = Column(
        String(50)
    )


    notes = Column(
        Text
    )


    summary = Column(
        Text
    )


    sentiment = Column(
        String(50)
    )


    follow_up = Column(
        String(200)
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


    hcp = relationship(
        "HCP",
        back_populates="interactions"
    )