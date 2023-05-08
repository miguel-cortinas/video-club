FROM node
MAINTAINER miguel cortinas
ENV HOME /root
COPY ./app.js ./app.js
CMD node app.js