from langchain_core.tools import tool


@tool
def suggest_action(
    text:str
)->str:


    """
    Suggest next sales action
    """

    return (
        "Suggested action created for: "
        + text
    )