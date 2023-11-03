FROM arm64v8/node:18-alpine

RUN apk update
RUN apk add --no-cache make gcc g++ libc6-compat bash python3

RUN yarn global add node-gyp

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
