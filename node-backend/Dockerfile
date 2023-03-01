# specify the node base image with your desired version node:<version>
FROM node:19

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# replace this with your application's default port
EXPOSE 3000

CMD [ "node", "server.js" ]