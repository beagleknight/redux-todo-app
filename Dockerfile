FROM node:5.7.0
MAINTAINER david.morcillo@gmail.com

RUN npm install -g gulp

ENV APP_HOME /code
WORKDIR $APP_HOME

CMD ["npm", "start"]
