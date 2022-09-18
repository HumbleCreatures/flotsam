FROM node:16-alpine

ADD ./ /app
# Create app directory
WORKDIR /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3333
CMD [ "node", "app/main.js" ]