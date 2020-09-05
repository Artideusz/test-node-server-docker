FROM node:14.9

COPY ./src/ /opt/node-server

WORKDIR /opt/node-server

RUN npm install

EXPOSE 8080

USER node

ENTRYPOINT ["node","/opt/node-server/index.js"]
