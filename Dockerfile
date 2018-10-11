FROM mhart/alpine-node:6.11.3
RUN apk add --no-cache \
    bash \
    curl \
    python=2.7.12-r0 \
    make \
    gcc \
    git \
    g++ \
    vim

COPY ./package.json /dictionary/package.json
WORKDIR /dictionary
RUN npm install

COPY . /dictionary

WORKDIR /dictionary

ENTRYPOINT ["npm", "start"]
