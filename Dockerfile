FROM node:20

WORKDIR /app
# use when env is added by pipeline
#ENV PATH /app/node_modules/.bin:$PATH
#COPY .env ./
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY src/ src/
COPY server.ts ./
RUN npm ci --silent
RUN npm run build

EXPOSE 8080

CMD npm start
