FROM node:12
RUN mkdir app
RUN git clone https://github.com/elinaa21/test-task ./app
WORKDIR "./app"
RUN npm i
EXPOSE 8080
CMD [ "npm", "start" ]