FROM node:19
WORKDIR /freshbites-app
COPY . .
EXPOSE 3000
CMD ["node","server.js"]