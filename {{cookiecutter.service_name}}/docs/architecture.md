# Architecture — {{ cookiecutter.service_name }}

## Components

```
┌─────────────────────────────────────┐
│           {{ cookiecutter.service_name }}               │
│                                     │
│  ┌──────────────┐  ┌─────────────┐  │
│  │   Frontend   │  │   Backend   │  │
│  │ React/Vite   │→ │ Express/TS  │  │
│  │  :3000       │  │  :8080      │  │
│  └──────────────┘  └──────┬──────┘  │
│                           │         │
└───────────────────────────┼─────────┘
                            │
                     ┌──────▼──────┐
                     │   Database  │
                     └─────────────┘
```

## CI/CD

Built and deployed by Harness pipelines:
- **CI**: lint → test → scan → build → push image
- **CD**: deploy to environment
