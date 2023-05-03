FROM node
LABEL Miguel Cortinas
ENV HOME /root
COPY ./app.js ./app.js
CMD node app.js
EXPOSE 27017