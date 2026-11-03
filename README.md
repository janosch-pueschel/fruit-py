# Fruit API

A simple practice project with a Django backend and a vanilla JavaScript frontend for testing purpose.

## Getting Started

**Backend:**

```bash
cd backend
source .venv/bin/activate
pip install -r requirements.txt
python3 manage.py runserver
```

**Frontend:** Open `frontend/index.html` with Live Server.
The frontend must run on port 5500 (http://127.0.0.1:5500) due to the backend's CORS configuration.

**API:** `http://127.0.0.1:8000/fruits/`
