FROM php:7.4-apache
COPY ./php/php.ini /usr/local/etc/php/
COPY ./apache/*.conf /etc/apache2/sites-enabled/

RUN apt-get update \
  && apt-get install -y zlib1g-dev libpq-dev unzip libzip-dev vim wget xz-utils libjpeg-dev libfreetype6-dev \
  && docker-php-ext-install zip pdo_mysql mysqli \
  && docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
  && docker-php-ext-install -j$(nproc) gd exif \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /etc/apt/sources.list.d/* \
  && apt-get update \
  && apt-get remove cmdtest \
  && apt-get remove yarn \
  && apt-get update \
  # && curl -sL https://deb.nodesource.com/setup_15.x | bash - \
  # && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  # && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  # && apt-get install -y nodejs yarn \
  # && npm install npm@latest -g \
  && echo 'alias ll="ls -l"' >> ~/.bashrc \
  && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
  && php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('    composer-setup.php'); } echo PHP_EOL;" \
  && php composer-setup.php \
  && php -r "unlink('composer-setup.php');" \
  && mv composer.phar /usr/local/bin/composer \
  && a2enmod rewrite \
  && composer global require "laravel/installer"

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]

ENV COMPOSER_ALLOW_SUPERUSER 1

ENV COMPOSER_HOME /composer

ENV PATH $PATH:/composer/vendor/bin

WORKDIR /var/www/html
