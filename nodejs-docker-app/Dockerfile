FROM node:10

WORKDIR /usr/src/app

# copy package.json file to container's current directory
COPY package.json ./

RUN npm install

# copy all files in local path ./ to container's current directory
COPY ./ ./

CMD ["node", "server.js"]