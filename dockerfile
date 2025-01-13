# Use Node.js for building
FROM node:18 AS builder
WORKDIR /app

# Install dependencies and build the app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

RUN npm install -g serve

EXPOSE 3000

# Step 9: Start the app using serve
CMD ["serve", "-s", "build", "-l", "3000"]