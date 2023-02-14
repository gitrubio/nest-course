# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /src
COPY . .
RUN npm install -g @nestjs/cli
RUN yarn install --production && yarn build
CMD ["node", "dist/main.js"]
EXPOSE 3000