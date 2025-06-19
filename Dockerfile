FROM node:22-alpine AS build

# Set workdir in docker container
WORKDIR /app

COPY package*.json .

# Install dependencies
RUN npm i -g yarn

RUN yarn

# Copy source code
COPY . .

# Set environment variable dari argumen
ENV TES="ENV_TES"

RUN yarn build

# Use a lightweight web server to serve the app
FROM nginx:alpine

# Copy the build output to the Nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 80

# Adding healthcheck to container
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:80/ || exit 1

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]