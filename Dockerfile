FROM node:20.14-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
COPY ./src ./src

RUN npm ci

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

EXPOSE 3000

ENTRYPOINT [ "node", "/app/src/index.js" ]