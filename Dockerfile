FROM node:12
WORKDIR /usr/src/app
RUN git clone github.com/elinaa21/react-app/
RUN cd react-app
RUN npm i
RUN npm start