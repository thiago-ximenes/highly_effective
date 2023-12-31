FROM node:latest
LABEL authors="thiagoximenes"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Run app
CMD [ "npm", "run", "dev" ]