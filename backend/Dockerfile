FROM node:alpine
RUN mkdir /backend
WORKDIR /backend
ADD ./package.json package.json
ADD ./app.js app.js

RUN npm install mongoose
RUN npm install express
RUN npm install serve-favicon
RUN npm install morgan
RUN npm install cookie-parser
RUN npm install body-parser
RUN npm install passport
RUN npm install passport-local
RUN npm install passport-local-mongoose
RUN npm install express-session
RUN npm install debug
RUN npm install ejs
RUN npm install
 

EXPOSE 8080