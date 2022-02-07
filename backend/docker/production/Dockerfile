FROM ruby:3.1.0

WORKDIR /app

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -

RUN apt-get update && apt-get install -y nodejs

RUN npm install -g yarn

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app

VOLUME /app/tmp