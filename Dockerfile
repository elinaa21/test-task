FROM node:12
RUN mkdir app
WORKDIR "./app"
COPY . .
RUN npm i
EXPOSE 8080
CMD [ "npm", "start" ]