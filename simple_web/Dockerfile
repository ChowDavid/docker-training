FROM node:alpine
RUN apk update
WORKDIR /code
ADD code /code
RUN npm install
CMD ["npm","start"]