FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run test
EXPOSE 8000
EXPOSE 80
CMD ["node","app.js"]
