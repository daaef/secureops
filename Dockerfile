FROM nginx:1.19.0
MAINTAINER "Abel Michael"
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY /build .
COPY /default.conf /etc/nginx/conf.d/
COPY /fullchain.pem /etc/nginx/conf.d/
COPY /certs /etc/nginx/conf.d/certs
COPY /privkey.pem /etc/nginx/conf.d/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]