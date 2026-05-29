#!/usr/bin/env python3
"""
Post-generation hook: removes dirs/files that don't apply
based on service_type (fullstack | backend | frontend).
"""
import os
import shutil

service_type = "{{ cookiecutter.service_type }}"

def remove(path):
    if os.path.isdir(path):
        shutil.rmtree(path)
    elif os.path.isfile(path):
        os.remove(path)

has_backend  = service_type in ("fullstack", "backend")
has_frontend = service_type in ("fullstack", "frontend")

if not has_backend:
    remove("backend")
    remove("catalog/{{ cookiecutter.service_name }}-api.yaml")
    remove("catalog/{{ cookiecutter.service_name }}-openapi.yaml")

if not has_frontend:
    remove("frontend")
    remove("catalog/{{ cookiecutter.service_name }}-web.yaml")

print(f"[cookiecutter] service_type={service_type} | backend={has_backend} | frontend={has_frontend}")
