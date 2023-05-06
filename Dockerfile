FROM node
ENV HOME /root
COPY ./app.js ./app.js
CMD node app.js