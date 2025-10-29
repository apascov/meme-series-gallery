FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

# Install required build tools
RUN npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer framer-motion && npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

