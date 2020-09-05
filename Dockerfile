FROM archlinux

RUN pacman --noconfirm -Syu && pacman --noconfirm -S nodejs npm 

COPY ./src/ /opt/node-server

EXPOSE 8080

ENTRYPOINT ["node","/opt/node-server/index.js"]