FROM node:16.18.1 AS builder
WORKDIR /home/node/build

COPY . .
RUN npm ci
RUN npm run build

FROM nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/mime.types /etc/nginx/conf/mime.types

EXPOSE 80

COPY --from=builder /home/node/build/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY ./env.sh .
COPY .env .

RUN chmod +x env.sh

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]