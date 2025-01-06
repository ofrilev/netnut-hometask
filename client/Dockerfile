# Step 1: Use a Node.js base image to install Bun
FROM node:18-buster

# Step 2: Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Step 3: Set Bun binary path (for proper execution in container)
ENV PATH="/root/.bun/bin:${PATH}"

# Step 4: Set the working directory to the Bun app
WORKDIR /app

# Step 5: Copy package.json and bun.lockb (Bun's lock file)
COPY package.json bun.lockb ./

# Step 6: Install dependencies with Bun
RUN bun install

# Step 7: Copy the rest of the client-side code
COPY . .

# Step 8: Expose the port for Bun dev server (default: 3000)
EXPOSE 3000

# Step 9: Run the Bun development server
CMD ["bun", "start"]
