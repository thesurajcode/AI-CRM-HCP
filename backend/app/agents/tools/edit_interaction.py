from langchain_core.tools import tool


@tool
def edit_interaction(data:str)->str:

    """
    Edit existing interaction
    """

    return f"""
    Interaction updated:
    {data}
    """