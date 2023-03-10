# Author: Basavaraj Bhavi
# pull official base image
FROM node:14-alpine3.12 as build

#working directory of containerized app
WORKDIR /app

#copy the react app to the container
COPY . /app/

#prepare the container for building react

RUN npm install --silent
RUN npm run build

#prepare nginx

FROM nginx:1.16.0-alpine
COPY --from=build /app/dist/connect-my-doc /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire for nginx
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
