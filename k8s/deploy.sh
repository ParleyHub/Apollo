#!/bin/bash

gcloud container clusters get-credentials parleyhub --region asia-east2-c --project parley-hub

envsubst < config.yaml > k8s-config.yaml

kubectl apply -f k8s-config.yaml
