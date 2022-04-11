##### REACT to BUILD FILE
FROM node:16-alpine as builder

# # make environment
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

# # COPY files
COPY . ./
RUN npm run build

##### nginx ENV install
FROM nginx:latest
RUN rm -rf /etc/nginx/conf.d/default.d
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]