# ✈️ Travel Agency - Backend API

A RESTful backend application developed for **Travel Agency**. This system allows staff to manage tourist data and travel histories securely. Only authenticated employees can access or modify sensitive data, while tourists can view their own travel records.

---

## 🗂️ Project Structure

```
test-biro-perjalanan/
├── coverage/               # Test coverage reports
├── logs/                   # Application logs
├── node_modules/           # Dependencies
├── prisma/                 # Prisma schema and migrations
├── src/                    # Main application source code
├── .env                    # Environment variable configuration
├── .env.example            # Sample environment configuration
├── .gitignore              # Git ignored files
├── .prettierrc             # Code formatting rules
├── jest.config.ts          # Jest test configuration
├── package.json            # NPM dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🛠️ Tech Stack

- **Node.js** & **Express** — Backend framework for building RESTful APIs
- **TypeScript** — Strongly typed superset of JavaScript
- **Prisma ORM** — Type-safe database client and schema management
- **PostgreSQL** — Relational database (default choice)
- **JWT (JSON Web Tokens)** — Stateless authentication mechanism
- **Jest** — JavaScript testing framework
- **Dotenv** — Environment variable loader for `.env` files
- **Prettier** — Opinionated code formatter
- **Railway** — CI/CD platform for deployment and infrastructure
- **Winston** — Versatile logging library for Node.js

---

## 🚀 Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/test-biro-perjalanan.git
cd test-biro-perjalanan
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configuration

Copy the `.env.example` file to `.env`

```bash
 cp .env.example .env
```

### Step 4: Database Setup

```bash
npx prisma db push
```

### Step 5: Run the Server

```bash
npm run dev
```

### Step 6: Run formatter

```bash
npm run format
```

### Step 7: Test the Server

```bash
npm run test
```

---

## 🔖 Documentation API

![Postman Logo](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)  
You can test and explore all endpoints via Postman using the following collection:

🔗 **Postman Collection**: [View API Collection](https://www.postman.com/bold-crescent-225387/personal/collection/zpzv0ei)

Make sure to set up your environment variables (`{{baseUrl}}`, `{{authToken}}`, etc.) as required.

---

## 🌍 Deployment

![Railway Logo](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)  
This project is deployed on [Railway](https://railway.app) and accessible via the following public URL:

🔗 **Live API Endpoint**: [View API Endpoint](https://test-biro-perjalanan-production.up.railway.app/)

Use this endpoint as the base URL for testing with Postman or integrating with frontend apps.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
