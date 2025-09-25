FROM node:19-alpine
WORKDIR /freshbites-app
COPY index.html server.js .
EXPOSE 3000
CMD ["node","server.js"]
