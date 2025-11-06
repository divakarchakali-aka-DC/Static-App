FROM node:19-alpine
WORKDIR /Rock-Paper-Scissors-app
COPY index.html server.js .
EXPOSE 3000
CMD ["node","server.js"]
