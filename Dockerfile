# ----------------- Base image ----------------
FROM node:12 AS base
# ----------------- Vendor image ----------------
FROM node:12 AS vendor

WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install
# ----------------- Dev image ----------------
FROM base AS dev

WORKDIR /usr/src/app

COPY --from=vendor /app/node_modules ./node_modules

# ----------------- Prod image ----------------
FROM base AS source

WORKDIR /app

COPY ./ ./
COPY --from=vendor /app/node_modules ./node_modules

RUN npm run build-css \
    && npm run run-build-client \
    && npm run run-build-server

FROM base AS stage

WORKDIR /usr/src/app

COPY --from=source /app/build /usr/src/app/build
COPY --from=source /app/package.json /usr/src/app/package.json

CMD [ "npm", "run", "run-stage-build"]

FROM stage AS prod

CMD [ "npm", "run", "run-build"]
