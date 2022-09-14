FROM node:16

WORKDIR /app/server

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]
