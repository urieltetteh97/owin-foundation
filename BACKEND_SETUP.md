# Backend Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Set up MongoDB Atlas** (Cloud Database)
   - Go to https://www.mongodb.com/cloud/atlas
   - Create a free account
   - Create a new cluster
   - Create a database user with username and password
   - Whitelist your IP (for development: 0.0.0.0/0, for production: your server IP)
   - Copy the connection string

3. **Configure environment variables**:
   
   Create `.env.local` in the project root:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/owin-foundation?retryWrites=true&w=majority
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:5173
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

4. **Start the backend dev server**:
   ```bash
   npm run dev:api
   ```
   
   The API will be available at `http://localhost:3000/api`

5. **Start the frontend dev server** (in a new terminal):
   ```bash
   npm run dev
   ```
   
   The frontend will be available at `http://localhost:5173`

---

## 📝 API Endpoints

### Contacts
- `POST /api/contacts` - Submit a new contact form
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/contacts/:id` - Get a single contact
- `PUT /api/contacts/:id` - Update contact status
- `DELETE /api/contacts/:id` - Delete a contact

### Campaigns
- `GET /api/campaigns` - Get all campaigns
- `GET /api/campaigns/active` - Get active campaigns only
- `GET /api/campaigns/:id` - Get a single campaign
- `POST /api/campaigns` - Create a new campaign (admin)
- `PUT /api/campaigns/:id` - Update a campaign
- `PUT /api/campaigns/:id/raised` - Update campaign raised amount
- `DELETE /api/campaigns/:id` - Delete a campaign

### Teams
- `GET /api/teams` - Get all team members
- `GET /api/teams/:id` - Get a single team member
- `POST /api/teams` - Create a new team member (admin)
- `PUT /api/teams/:id` - Update a team member
- `DELETE /api/teams/:id` - Delete a team member

---

## 🧪 Testing Endpoints

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Submit Contact Form
```bash
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

### Get All Campaigns
```bash
curl http://localhost:3000/api/campaigns
```

### Get All Team Members
```bash
curl http://localhost:3000/api/teams
```

---

## 🔐 MongoDB Atlas Setup (Detailed)

1. **Create Account**:
   - Visit https://www.mongodb.com/cloud/atlas
   - Sign up with email or Google
   - Create organization and project

2. **Create Cluster**:
   - Click "Create a Deployment"
   - Choose "Free" tier
   - Select AWS region closest to you (or N. Virginia for US)
   - Click "Create Cluster" (takes ~3-5 minutes)

3. **Create Database User**:
   - Go to "Database Access" in left menu
   - Click "Add New Database User"
   - Set username: `owin-admin` (or similar)
   - Set password: Create a strong password
   - Database User Privileges: "Atleast read and write to any database"
   - Click "Add User"

4. **Whitelist IP Address**:
   - Go to "Network Access" in left menu
   - Click "Add IP Address"
   - For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add your server's IP address
   - Click "Confirm"

5. **Get Connection String**:
   - Go to "Clusters" → your cluster
   - Click "Connect" button
   - Choose "Drivers" → "Node.js"
   - Copy the connection string
   - Replace `<username>` and `<password>` with your database user credentials
   - Update `.env.local` with this URL

6. **Connection String Format**:
   ```
   mongodb+srv://username:password@cluster-name.mongodb.net/database-name?retryWrites=true&w=majority
   ```

---

## 🚀 Deployment to Vercel

### Before Deploying:

1. **Update `.env.production`**:
   ```env
   MONGODB_URI=your_production_mongodb_uri
   NODE_ENV=production
   CORS_ORIGIN=https://your-vercel-domain.vercel.app
   VITE_API_BASE_URL=https://your-vercel-domain.vercel.app/api
   ```

2. **Push to Git**:
   ```bash
   git add .
   git commit -m "Add backend setup"
   git push origin main
   ```

### Vercel Configuration:

1. **Connect Repository**:
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

2. **Configure Environment Variables**:
   - Go to "Settings" → "Environment Variables"
   - Add each variable from `.env.production`:
     - `MONGODB_URI` - Your MongoDB connection string
     - `NODE_ENV` - `production`
     - `CORS_ORIGIN` - Your Vercel domain
   - Save and redeploy

3. **Whitelist Vercel IPs in MongoDB**:
   - MongoDB Atlas → "Network Access"
   - Add IP 0.0.0.0/0 (or specific Vercel IP if known)

4. **Deploy**:
   - Push to `main` branch
   - Vercel automatically builds and deploys
   - Your API is available at `https://your-vercel-domain.vercel.app/api`

---

## 📋 Project Structure

```
owin-foundation/
├── api/
│   ├── config/
│   │   └── db.js              # MongoDB connection config
│   ├── models/
│   │   ├── Contact.js         # Contact schema
│   │   ├── Campaign.js        # Campaign schema
│   │   ├── Team.js            # Team schema
│   │   └── Donation.js        # Donation schema
│   ├── routes/
│   │   ├── contacts.js        # Contact endpoints
│   │   ├── campaigns.js       # Campaign endpoints
│   │   └── teams.js           # Team endpoints
│   ├── middleware/
│   │   └── errorHandler.js    # Error handling
│   ├── index.js               # Express app setup
│   └── server.js              # Dev server entry point
├── src/
│   ├── services/
│   │   └── api.js             # Frontend API client
│   ├── pages/
│   │   ├── Contact.jsx        # To be updated
│   │   └── ...
│   └── ...
├── .env.local                 # Development env variables
├── .env.production            # Production env template
├── vercel.json               # Vercel deployment config
└── package.json              # Dependencies & scripts
```

---

## 🐛 Troubleshooting

### "Cannot find module 'mongoose'"
- Run `npm install` again
- Delete `node_modules` folder and reinstall: `rm -rf node_modules && npm install`

### "MONGODB_URI is not set"
- Check `.env.local` file exists in project root
- Verify connection string is correct

### "ERR_MODULE_NOT_FOUND"
- Ensure all imports use `.js` extension in ES modules: `import Module from './module.js'`

### Connection timeout to MongoDB
- Check IP whitelist in MongoDB Atlas
- Verify your internet connection
- Try connecting with MongoDB Compass to test connection string

### CORS errors in browser console
- Verify `CORS_ORIGIN` environment variable matches your frontend URL
- For development: should be `http://localhost:5173`

---

## 📚 Next Steps

1. ✅ Backend structure created
2. ⏳ **Currently**: Install dependencies and set up MongoDB
3. → Update frontend pages to use API endpoints
4. → Test all endpoints locally
5. → Deploy to Vercel
