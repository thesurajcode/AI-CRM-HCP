from langchain_core.tools import tool


@tool
def summarize_interaction(
    text:str
)->str:

    """
    Summarize HCP meeting notes
    """


    return (
        "Summary generated for: "
        + text
    )