from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import schema

app = FastAPI()

# Define from which origins the backend is allowed to take requests
origins = [
    "http://localhost:5173"
]

# Add the middleware to the FastAPI app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['GET', 'POST'],
    allow_headers= ['*']
)

@app.post("/login")
def login(request: schema.User):
    return request
