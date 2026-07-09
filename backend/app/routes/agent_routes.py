from fastapi import APIRouter

from pydantic import BaseModel

from app.agents.agent import agent


router = APIRouter(

    prefix="/agent",

    tags=["AI Agent"]

)



class ChatRequest(BaseModel):

    message:str




@router.post("/chat")
def chat(
    request:ChatRequest
):


    response = agent.invoke(

        {
            "messages":[

                (
                    "user",
                    request.message
                )

            ]
        }

    )


    final_response = (
        response["messages"][-1].content
    )


    return {

        "response":final_response

    }