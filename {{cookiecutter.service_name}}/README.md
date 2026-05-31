# {{ cookiecutter.service_name }}

{{ cookiecutter.service_description }}

| | |
|---|---|
| **Owner** | {{ cookiecutter.owner_email }} |
| **Type** | {{ cookiecutter.service_type }} |
| **Org** | {{ cookiecutter.harness_org }} / {{ cookiecutter.harness_project }} |

## Structure

```
{{ cookiecutter.service_name }}/
├── backend/       # Node.js + Express + TypeScript REST API
├── frontend/      # React + Vite + TypeScript SPA
├── catalog/       # Harness IDP catalog entities
├── docs/          # TechDocs (mkdocs)
└── mkdocs.yml
```

## Development

```bash
# Backend
cd backend && npm install && npm run dev   # http://localhost:8080

# Frontend
cd frontend && npm install && npm run dev  # http://localhost:3000
```

## CI/CD

Managed by Harness pipelines. See [CI Pipeline](https://app.harness.io/ng/account/{{ cookiecutter.harness_account_id }}/orgs/{{ cookiecutter.harness_org }}/projects/{{ cookiecutter.harness_project }}/pipelines).
