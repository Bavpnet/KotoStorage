FROM node:16.18.1 AS builder
WORKDIR /home/node/build

ARG REACT_APP_BASE_URL=production
ENV REACT_APP_BASE_URL="${REACT_APP_BASE_URL}"

COPY . .
RUN npm ci
RUN npm run build

FROM nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/mime.types /etc/nginx/conf/mime.types
COPY --from=builder /home/node/build/src/dist /usr/share/nginx/html
