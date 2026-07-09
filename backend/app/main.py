from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from app.core.database import (
    Base,
    engine
)


from app.routes import (
    hcp_routes,
    interaction_routes,
    agent_routes
)


from app.models import (
    hcp,
    interaction
)


# create database tables
Base.metadata.create_all(
    bind=engine
)


app = FastAPI(
    title="AI CRM HCP Backend"
)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Routes

app.include_router(
    hcp_routes.router
)


app.include_router(
    interaction_routes.router
)


app.include_router(
    agent_routes.router
)



@app.get("/")
def home():

    return {
        "message": "AI CRM Backend Running"
    }