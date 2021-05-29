FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY farmerless ./farmerless
COPY src ./src
COPY static ./static
COPY svelte.config.js ./

RUN npm install
RUN npm run build

# Bundle app source
COPY . .

EXPOSE 7000
CMD [ "npm", "start" ]
