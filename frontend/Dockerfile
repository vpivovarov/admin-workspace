# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.19.0

FROM node:$NODE_VERSION-alpine AS base
WORKDIR /app

FROM base AS dev
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

COPY . .

EXPOSE 3000
