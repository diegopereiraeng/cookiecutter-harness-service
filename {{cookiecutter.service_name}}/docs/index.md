# {{ cookiecutter.service_name }}

{{ cookiecutter.service_description }}

## Overview

| Property | Value |
|----------|-------|
| Owner | {{ cookiecutter.owner_email }} |
| Type | {{ cookiecutter.service_type }} |
| Repo | [GitHub](https://github.com/{{ cookiecutter.github_org }}/{{ cookiecutter.service_name }}) |

## Getting Started

```bash
git clone https://github.com/{{ cookiecutter.github_org }}/{{ cookiecutter.service_name }}.git
cd {{ cookiecutter.service_name }}

# Backend
cd backend && npm install && npm run dev

# Frontend
cd frontend && npm install && npm run dev
```
