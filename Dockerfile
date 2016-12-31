FROM ubuntu:16.04

WORKDIR /home/app

ADD . /home/app

RUN apt-get -qq update && apt-get install -qq -y \
    curl \
    build-essential checkinstall \
    libssl-dev

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.9.2

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash \
    && [ -s "$NVM_DIR/nvm.sh" ] \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

EXPOSE 9000

CMD ["node", "server/app.js"]
