FROM node:20.14-alpine

WORKDIR /app

COPY ./src .

EXPOSE 3000

CMD [ "node", "/app/index.js" ]