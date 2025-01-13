# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use a smaller image to serve the built files
FROM nginx:alpine

# Copy the build directory from the previous image
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 80

# Run Nginx server
CMD ["nginx", "-g", "daemon off;"]
