from sqlalchemy.orm import Session

from app.models.interaction import Interaction

from app.schemas.interaction_schema import InteractionCreate


def create_interaction(
    db: Session,
    interaction: InteractionCreate
):

    new_interaction = Interaction(

        hcp_id=interaction.hcp_id,

        interaction_type=interaction.interaction_type,

        notes=interaction.notes

    )


    db.add(new_interaction)

    db.commit()

    db.refresh(new_interaction)


    return new_interaction



def get_all_interactions(
    db: Session
):

    return db.query(
        Interaction
    ).all()



def update_interaction(
    db: Session,
    interaction_id: int,
    data: dict
):

    interaction = db.query(
        Interaction
    ).filter(

        Interaction.id == interaction_id

    ).first()


    if not interaction:

        return None


    for key, value in data.items():

        setattr(
            interaction,
            key,
            value
        )


    db.commit()

    db.refresh(interaction)


    return interaction