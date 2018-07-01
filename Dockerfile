FROM node:alpine

WORKDIR /

RUN npm install -g nodemon

ADD ./ /inline-frontend
WORKDIR /inline-frontend
RUN npm install

CMD ["sh", "run.sh"]
EXPOSE 8081
