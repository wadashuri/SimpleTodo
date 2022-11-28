FROM node:14-alpine3.12

WORKDIR /app

COPY ./server/package.json ./

RUN npm i

CMD [ "npm", "run", "watch-poll" ]
