FROM node
ENV HOME /root
COPY ./app.js ./app.js
CMD node app.js
EXPOSE 3000
RUN NPM INSTALL 
CMD START