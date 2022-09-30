FROM node

WORKDIR /usr/src

COPY . .

EXPOSE 5000

RUN npm i

# só roda quando darmos docker run
CMD ["npm", "run", "dev"]