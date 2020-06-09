FROM node:12 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn install
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=build /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
