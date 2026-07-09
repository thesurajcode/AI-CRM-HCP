from pydantic import BaseModel
from datetime import datetime


class InteractionCreate(BaseModel):

    hcp_id: int
    interaction_type: str
    notes: str


class InteractionResponse(BaseModel):

    id: int
    hcp_id: int
    interaction_type: str
    notes: str
    summary: str | None
    sentiment: str | None
    follow_up: str | None
    created_at: datetime


    class Config:
        from_attributes = True