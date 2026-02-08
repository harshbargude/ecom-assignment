FROM node:20-slim

WORKDIR /app


# skip npm install inside Docker
COPY node_modules ./node_modules
COPY .next ./.next
COPY package*.json ./
# COPY public ./public

# Set environment to production
ENV NODE_ENV=production

EXPOSE 3000

# Next.js needs this to run the build you just made
CMD ["npm", "start"]