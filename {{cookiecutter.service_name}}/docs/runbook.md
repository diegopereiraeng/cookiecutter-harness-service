# Runbook — {{ cookiecutter.service_name }}

## Health Check

```bash
curl http://localhost:8080/health
```

## Logs

```bash
# Local
npm run dev

# Harness
# Go to CI Pipeline → execution logs
```

## Rollback

1. Open CD Pipeline in Harness
2. Select previous successful execution
3. Click **Re-run**
