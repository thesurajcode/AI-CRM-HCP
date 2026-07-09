from langgraph.prebuilt import create_react_agent

from app.agents.llm import llm


from app.agents.tools.log_interaction import log_interaction
from app.agents.tools.edit_interaction import edit_interaction
from app.agents.tools.summarize import summarize_interaction
from app.agents.tools.extract_entities import extract_entities
from app.agents.tools.suggest_action import suggest_action


tools = [
    log_interaction,
    edit_interaction,
    summarize_interaction,
    extract_entities,
    suggest_action
]


agent = create_react_agent(
    model=llm,
    tools=tools,
    prompt="""
    You are a CRM assistant.
    Use the correct tool once.
    Return a short final answer.
    """
)