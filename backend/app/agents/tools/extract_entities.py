from langchain_core.tools import tool


@tool
def extract_entities(
    text:str
)->str:

    """
    Extract doctor name, medicine,
    sentiment and follow ups
    """

    return (
        "Entities extracted from: "
        + text
    )