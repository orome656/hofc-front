# Stage 1 - the build process
FROM node:16-alpine3.11 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]