# 1. Use Node LTS
FROM node:20-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package files and install
COPY package*.json ./

RUN npm config set registry http://registry.npmjs.org/ && \
    npm install
    
# 4. Copy the rest of the code
COPY . .

# 5. Expose the backend port
EXPOSE 5000

# 6. Start the server
CMD ["node", "server.js"]