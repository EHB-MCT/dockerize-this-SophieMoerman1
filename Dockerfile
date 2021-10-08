FROM node:latest

WORKDIR /usr/app

COPY package*.json .

#RUN npm install
RUN npm i --quiet

COPY . .

EXPOSE 3000

CMD ["npm", "start"]