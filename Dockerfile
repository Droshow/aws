FROM node:8-alpine

RUN mkdir -p /usr/src/app

Copy . .

RUN npm install

Expose 3000 

CMD ["node", "server.js"]