FROM node:14.15.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 8080

CMD ["yarn", "start"]