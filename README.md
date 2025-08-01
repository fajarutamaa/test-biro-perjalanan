# ✈️ Mlaku-Mulu Travel Agency - Backend API

A RESTful backend application developed for **Mlaku-Mulu Travel Agency**. This system allows staff to manage tourist data and travel histories securely. Only authenticated employees can access or modify sensitive data, while tourists can view their own travel records.

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

- **Node.js** & **Express** – REST API backend framework
- **TypeScript** – Type-safe JavaScript
- **Prisma ORM** – Database schema & access layer
- **PostgreSQL** – Relational database (assumed default)
- **JWT** – Secure authentication
- **Jest** – Testing framework
- **Dotenv** – Environment variable management
- **Prettier** – Code formatter
- **Railway** – Continuous integration and deployment

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

1. Copy the `.env.example` file to `.env`
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

### Step 6: Test the Server

```bash
npm run test
```

---

## 🔖 Documentation API

You can test and explore all endpoints via Postman using the following collection:

🔗 **Postman Collection**: [View API Collection]

Make sure to set up your environment variables (`{{baseUrl}}`, `{{authToken}}`, etc.) as required.

---

## 🌍 Deployment

This project is deployed on [Railway](https://railway.app) and accessible via the following public URL:

🔗 **Live API Endpoint**:

Use this endpoint as the base URL for testing with Postman or integrating with frontend apps.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
