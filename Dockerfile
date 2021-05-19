FROM node:14

WORKDIR /app
# use when env is added by pipilene 
#ENV PATH /app/node_modules/.bin:$PATH
#COPY .env ./
COPY package.json ./
COPY package-lock.json ./
COPY src/ src/
COPY server.js ./
RUN npm ci --silent

EXPOSE 8080

CMD npm start
