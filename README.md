# AI CRM HCP Assistant

AI CRM HCP Assistant is a full-stack AI-powered Customer Relationship Management application built for managing Healthcare Professional (HCP) interactions.

The system helps users store doctor meeting details, track previous interactions, and use an AI assistant to summarize conversations, extract important information, and suggest next actions.

---

## Project Preview

![AI CRM Dashboard](./screenshots/dashboard.png.png)

---

## About The Project

Healthcare and pharmaceutical teams interact with many doctors and healthcare professionals regularly.

Managing every conversation manually becomes difficult because important information like discussion topics, follow-up dates, doctor feedback, and next steps can be missed.

This project solves that problem by combining a traditional CRM system with an AI Agent.

A user can enter meeting notes such as:

```
Visited Dr Sharma.
Discussed diabetes medicine.
Doctor showed interest.
Follow up scheduled next Monday.
```

The AI assistant can understand the conversation and help generate useful insights.

---

# Features

## HCP Interaction Management

- Add healthcare professional interactions
- Store meeting notes
- Maintain interaction history
- View saved records

---

## AI Assistant Features

The AI assistant helps with:

- Meeting summarization
- Extracting important information
- Understanding interaction context
- Suggesting next actions

Example:

User:

```
Summarize meeting with Dr Sharma.
Discussed diabetes medicine and follow up next Monday.
```

AI:

```
Summary:
Meeting with Dr Sharma about diabetes medicine.
Follow-up required next Monday.
```

---

# AI Agent Workflow

This project uses LangGraph for creating an AI agent workflow.

Unlike a normal chatbot, the AI agent can decide which action/tool should be used.

Flow:

```
User Request

      ↓

LangGraph Agent

      ↓

Tool Selection

      ↓

Groq LLM

      ↓

AI Response
```

Implemented AI tools:

- Log Interaction
- Edit Interaction
- Summarize Interaction
- Extract Entities
- Suggest Next Action

---

# Tech Stack

## Frontend

- React.js
- Vite
- Redux Toolkit
- Tailwind CSS
- Axios

---

## Backend

- FastAPI
- Python
- SQLAlchemy ORM
- PostgreSQL

---

## AI Technologies

- LangGraph
- LangChain
- Groq API

---

# System Architecture


```
                 React Frontend
                       |
                       |
                    Axios
                       |
                       |
                FastAPI Backend
                       |
        --------------------------------
        |                              |
        |                              |
   PostgreSQL Database          LangGraph Agent
                                       |
                                       |
                                  AI Tools
                                       |
                                       |
                                   Groq LLM
                                       |
                                       |
                                AI Response
```

---

# Project Structure


```
AI-CRM-HCP

│
├── backend
│
│   ├── app
│   │
│   │   ├── agents
│   │   ├── core
│   │   ├── models
│   │   └── routes
│   │
│   ├── requirements.txt
│   └── .env.example
│
│
├── frontend
│
│   └── src
│
│       ├── api
│       ├── components
│       ├── pages
│       └── redux
│
│
├── screenshots
│
└── README.md
```

---

# Backend Setup

Move into backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env` file:

```env
DATABASE_URL=your_database_url

GROQ_API_KEY=your_groq_api_key
```

Start FastAPI server:

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Move into frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# Environment Variables

Example:

```
DATABASE_URL=postgresql://username:password@localhost:5432/database

GROQ_API_KEY=your_api_key
```

Real `.env` files are ignored for security.

---

# Key Learning From Project

This project helped me understand:

- Full-stack application architecture
- REST API development
- Database integration
- ORM usage with SQLAlchemy
- React state management
- Frontend-backend communication
- AI agent development
- LLM integration into applications
- Secure environment management

---

# Future Improvements

Planned improvements:

- Authentication system
- Role-based access control
- Advanced analytics dashboard
- Cloud deployment
- Voice-based meeting notes
- Better AI memory system

---

# Author

Developed by

**Suraj Kumar**

```
Full Stack Development | AI Integration | Backend Engineering
```
