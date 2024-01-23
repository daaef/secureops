FROM nginx:1.19.0
MAINTAINER "Abel Michael"
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY /build .
COPY /default.conf /etc/nginx/conf.d/
ENTRYPOINT ["nginx", "-g", "daemon off;"]