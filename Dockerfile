# 1.Build
FROM node:18-alpine as builder
WORKDIR /app/src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build



