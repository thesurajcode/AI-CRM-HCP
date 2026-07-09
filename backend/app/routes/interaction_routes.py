from fastapi import (
    APIRouter,
    Depends
)

from sqlalchemy.orm import Session


from app.core.database import get_db


from app.schemas.interaction_schema import (
    InteractionCreate,
    InteractionResponse
)


from app.services.interaction_service import (
    create_interaction,
    get_all_interactions,
    update_interaction
)



router = APIRouter(
    prefix="/interactions",
    tags=["Interactions"]
)



@router.post(
    "/",
    response_model=InteractionResponse
)
def add_interaction(

    interaction: InteractionCreate,

    db: Session = Depends(get_db)

):

    return create_interaction(
        db,
        interaction
    )



@router.get(
    "/",
    response_model=list[InteractionResponse]
)
def fetch_interactions(

    db: Session = Depends(get_db)

):

    return get_all_interactions(
        db
    )



@router.put(
    "/{interaction_id}"
)
def edit_interaction(

    interaction_id:int,

    data:dict,

    db:Session=Depends(get_db)

):

    return update_interaction(
        db,
        interaction_id,
        data
    )