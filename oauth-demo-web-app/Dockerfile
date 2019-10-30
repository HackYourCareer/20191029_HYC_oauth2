FROM node:latest as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /app/nginx/conf.d/ /etc/nginx/conf.d/
COPY --from=builder /app/dist/oauth-demo-web-app /usr/share/nginx/html/
RUN chown -R nginx /usr/share/nginx/html/