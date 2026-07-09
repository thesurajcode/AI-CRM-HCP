from langchain_core.tools import tool


@tool
def log_interaction(data:str)->str:

    """
    Log new HCP interaction details
    """

    return f"""
    Interaction logged successfully:
    {data}
    """