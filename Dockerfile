FROM node:14


WORKDIR /dbdav1/SDC/docker-server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
