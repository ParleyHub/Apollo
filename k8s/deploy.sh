#!/bin/bash

gcloud container clusters get-credentials parley-hub --region asia-east2-c --project parley-hub

envsubst < config.yaml > k8s-config.yaml

kubectl apply -f k8s-config.yaml
