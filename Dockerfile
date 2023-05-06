FROM node
ENV HOME /root
COPY ./app.js ./app.js
RUN npm install
EXPOSE 3000
CMD npm start