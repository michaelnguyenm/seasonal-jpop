FROM node:latest

WORKDIR /home/app

RUN npm init --yes
RUN npm install --save express compression morgan errorhandler

ADD . /home/app

EXPOSE 9000

CMD ["node", "server/app.js"]
