FROM ubuntu:14.04

WORKDIR /home/app

ADD . /home/app

RUN apt-get -qq update && apt-get install -qq -y \
    curl \
    build-essential checkinstall \
    libssl-dev

ENV NVM_DIR /usr/local/nvm

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash \
    && [ -s "$NVM_DIR/nvm.sh" ] \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install 6.9.2 \
    && nvm alias default node

# RUN rm /etc/apache2/sites-enabled/000-default.conf

# ADD ./000-default.conf /etc/apache2/sites-enabled

# RUN service apache2 reload

EXPOSE 9000

CMD ["node", "app.js"]
