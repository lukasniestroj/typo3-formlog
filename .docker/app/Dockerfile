ARG PHP_VERSION

FROM thecodingmachine/php:$PHP_VERSION-v3-fpm-node10

USER root

ARG NODE_PACKAGES
RUN npm install -g ${NODE_PACKAGES}

USER docker
