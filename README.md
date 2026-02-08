# E-Commerce Module

A professional MERN stack e-commerce frontend built with **Next.js**, **TypeScript**, and **React**. This project features a responsive product listing, a global shopping cart system, and persistent storage.

## Features

- **Product Grid**: Responsive layout using CSS Grid.
- **Global Cart Management**: Built using React **Context API**.
- **Persistent Cart**: Items stay in the cart even after page refresh using **localStorage**.
- **Modern Tech Stack**: Implemented with **Async/Await** for clean API handling.
- **Environment Stability**: Managed Node versions using **NVM** to ensure LTS compatibility.

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, React.
- **State Management**: React Context API.
- **Styling**: Vanilla CSS (Modular).
- **Backend**: Node.js, Express (connected via REST API).
- **Tools**: Git/GitHub, NVM, Webhint.
- **DevOps**: Docker, Docker Compose, NVM.

## ⚙️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone [[https://github.com/YOUR_USERNAME/ecom-assignment.git](https://github.com/YOUR_USERNAME/ecom-assignment.git)
   cd ecom-assignment.git
   ```

2. **Setup Backend**:
    ```bash   
    # Navigate to your backend folder
    npm install
    node server.js
    ```
3. **Setup Frontend**:

    ```bash
    cd frontend
    npm install --legacy-peer-deps
    npm run dev
    ```
4. **Open the app**: Navigate to http://localhost:3000

## 🐳 Docker Setup
The application is fully containerized to ensure environment parity.

### Prerequisites
- Docker Desktop installed.

### Run the Application
From the root directory (`ecom assignment`), run:
```bash
docker-compose up --build
```

## Key Technical Decisions & Problem Solving
**Environment Stability**: Utilized NVM to switch to Node v20 LTS after encountering SSL/TLS conflicts on newer Node versions.

**Docker Optimization**: Switched from alpine to slim images for the frontend to provide the necessary glibc libraries required by the Next.js SWC compiler.

**Build Strategy**: Implemented a Pre-built Image strategy for the Docker container to bypass local OpenSSL cipher errors (ERR_SSL_CIPHER_OPERATION_FAILED), ensuring a stable and working deployment.
