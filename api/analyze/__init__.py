import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(
        '{"message": "Analyzer API is working!"}',
        mimetype="application/json"
    )

