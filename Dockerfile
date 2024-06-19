FROM node:20.14-alpine

WORKDIR /app

COPY ./src .

CMD [ "node", "/app/index.js" ]