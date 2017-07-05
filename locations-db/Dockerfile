FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /usr/src/package.json
RUN npm install

# add files and folders to the container
ADD /app /usr/src/app
ADD knexfile.js /usr/src/knexfile.js

# start app
CMD ["npm", "start"]
