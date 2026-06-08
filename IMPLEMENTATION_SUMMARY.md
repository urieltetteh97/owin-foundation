# 🚀 Backend Implementation Complete

Your Node.js/Express/MongoDB backend is now fully set up! Here's what's been created and what you need to do next.

---

## ✅ What's Been Done

### Backend Structure
```
api/
├── config/db.js              ✅ MongoDB connection manager
├── models/
│   ├── Contact.js            ✅ Contact form submissions
│   ├── Campaign.js           ✅ Donation campaigns
│   ├── Team.js               ✅ Team members
│   └── Donation.js           ✅ Donation tracking
├── routes/
│   ├── contacts.js           ✅ Contact endpoints
│   ├── campaigns.js          ✅ Campaign endpoints
│   └── teams.js              ✅ Team endpoints
├── middleware/errorHandler.js ✅ Global error handling
├── index.js                  ✅ Express app setup
└── server.js                 ✅ Development server entry point
```

### Frontend Integration
- ✅ `src/services/api.js` — Centralized API client with all endpoints
- ✅ [src/pages/Contact.jsx](src/pages/Contact.jsx) — Submits forms to `/api/contacts`
- ✅ [src/pages/About.jsx](src/pages/About.jsx) — Fetches team from `/api/teams`
- ✅ [src/pages/Donate.jsx](src/pages/Donate.jsx) — Fetches active campaigns from `/api/campaigns`

### Configuration Files
- ✅ `package.json` — Added backend dependencies (express, mongoose, cors, etc.)
- ✅ `.env.local` — Development environment variables
- ✅ `.env.production` — Production template
- ✅ `vercel.json` — Vercel deployment configuration
- ✅ `.gitignore` — Updated to exclude .env files and node_modules

### Dependencies Installed
```
✅ express          — Web framework
✅ mongoose         — MongoDB ODM
✅ cors             — Cross-origin request handling
✅ helmet           — Security headers
✅ dotenv           — Environment variable management
✅ express-validator — Input validation
```

---

## 🔧 Next Steps: Set Up MongoDB Atlas

### Step 1: Create Free MongoDB Cloud Account

1. Visit **https://www.mongodb.com/cloud/atlas**
2. Click "Try Free" or sign up with Google
3. Create a new organization and project
4. Click **"Create a Deployment"**
5. Select **"Free"** tier (M0 sandbox)
6. Choose AWS region closest to you (or **N. Virginia** for North America)
7. Click **"Create Deployment"** (takes 3-5 minutes)

### Step 2: Create Database User

1. Go to **"Database Access"** in the left sidebar
2. Click **"Add New Database User"**
3. Enter credentials:
   - **Username:** `owin-admin` (or your preferred name)
   - **Password:** Create a strong password (save it!)
4. Select **"Atleast read and write to any database"**
5. Click **"Add User"**

### Step 3: Whitelist Your IP

1. Go to **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. Choose **"Allow Access from Anywhere"** (for development)
   - ⚠️ For production: use specific server IP
4. Click **"Confirm"**

### Step 4: Get Connection String

1. Go to **"Clusters"** and click your cluster
2. Click **"Connect"** button
3. Choose **"Drivers"** → **"Node.js"** (version 5.0+)
4. Copy the connection string
5. **Replace** `<username>` and `<password>` with your database user credentials

Example:
```
mongodb+srv://owin-admin:YOUR_PASSWORD@cluster.mongodb.net/owin-foundation?retryWrites=true&w=majority
```

### Step 5: Update Your `.env.local`

```env
# MongoDB Connection - Replace with your actual connection string
MONGODB_URI=mongodb+srv://owin-admin:YOUR_PASSWORD@cluster.mongodb.net/owin-foundation?retryWrites=true&w=majority

# Environment
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:5173

# Frontend API URL
VITE_API_BASE_URL=http://localhost:3000/api
```

---

## 🧪 Local Testing

### Terminal 1: Start Backend Dev Server

```bash
npm run dev:api
```

You should see:
```
API server running on http://localhost:3000
Health check: http://localhost:3000/api/health
```

### Terminal 2: Start Frontend Dev Server

```bash
npm run dev
```

You should see:
```
  VITE v... ready in ... ms
  ➜  Local:   http://localhost:5173/
```

### Test Endpoints

**Health Check:**
```bash
curl http://localhost:3000/api/health
```

**Submit Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

**Get All Campaigns:**
```bash
curl http://localhost:3000/api/campaigns
```

**Get All Team Members:**
```bash
curl http://localhost:3000/api/teams
```

---

## 🎯 Verification Checklist

After setting up MongoDB and starting both servers:

- [ ] Backend server starts without errors (`npm run dev:api`)
- [ ] Frontend can connect to backend (check browser console for CORS errors)
- [ ] Health check endpoint responds: `GET http://localhost:3000/api/health`
- [ ] Contact form submission works:
  1. Go to http://localhost:5173/contact
  2. Fill and submit form
  3. See "Message Sent!" confirmation
  4. Check MongoDB Atlas → Collections → contacts for the new entry
- [ ] Campaign data loads on Donate page:
  1. Go to http://localhost:5173/donate
  2. Should show active campaign (or default if no campaigns in DB)
- [ ] Team data loads on About page:
  1. Go to http://localhost:5173/about
  2. Should show team members from API (or defaults if no data in DB)

---

## 📝 Adding Test Data to MongoDB

Once your backend is running, add initial data:

### Create a Campaign

```bash
curl -X POST http://localhost:3000/api/campaigns \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Health Screening — Kwahu 2026",
    "description": "Help us fund our upcoming health screening project in Kwahu, Ghana. Every donation brings essential care closer to those who need it most.",
    "goal": 5000,
    "raised": 2300,
    "deadline": "2026-04-24",
    "location": "Kwahu, Ghana",
    "category": "health",
    "active": true
  }'
```

### Add Team Member

```bash
curl -X POST http://localhost:3000/api/teams \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Vivian Ofori",
    "role": "Acting President",
    "bio": "Co-founder of OWIN Foundation. Inspired by the 2015 Accra floods, Vivian mobilized the Ghanaian diaspora in Toronto to create lasting change.",
    "order": 1,
    "imageUrl": null
  }'
```

---

## ⚠️ Common Issues & Fixes

### "Cannot connect to MongoDB"
- Check `.env.local` has correct `MONGODB_URI`
- Verify IP is whitelisted in MongoDB Atlas
- Ensure username/password are correct (not special characters causing issues)
- Test connection in MongoDB Compass (download free tool)

### "CORS errors in browser console"
- Verify `CORS_ORIGIN=http://localhost:5173` in `.env.local`
- Restart backend server after changing `.env`

### "PORT 3000 already in use"
- Kill existing process: `lsof -ti:3000 | xargs kill -9` (macOS/Linux)
- Or change port: `PORT=3001 npm run dev:api`
- Update `VITE_API_BASE_URL` to match new port

### "Module not found" errors
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Ensure `.js` file extensions in all ES module imports

---

## 🚀 Next: Deployment to Vercel

Once local testing is complete, you'll deploy the backend to Vercel:

1. Update `.env.production` with your MongoDB URI
2. Push code to Git: `git add . && git commit -m "Backend setup" && git push`
3. Add environment variables in Vercel Dashboard
4. Vercel auto-deploys and your API is live!

See [Deployment Guide](#deployment) below for detailed steps.

---

## 📚 API Documentation

### Contacts

**POST /api/contacts** — Submit contact form
```json
Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "I'd like to know more..."
}

Response (201):
{
  "success": true,
  "message": "Thank you for your message. We will get back to you soon!",
  "data": { ... }
}
```

### Campaigns

**GET /api/campaigns** — Get all campaigns  
**GET /api/campaigns/active** — Get active campaigns only  
**POST /api/campaigns** — Create campaign (admin)  
**PUT /api/campaigns/:id** — Update campaign  
**PUT /api/campaigns/:id/raised** — Update raised amount

### Teams

**GET /api/teams** — Get all team members  
**POST /api/teams** — Add team member (admin)  
**PUT /api/teams/:id** — Update team member

---

## 🎓 What's Next?

After verifying local functionality:

1. **Email Notifications** (Optional but recommended)
   - Set up SendGrid API for contact form emails
   - Update `api/routes/contacts.js` to send emails on form submission

2. **Admin Authentication** (Future feature)
   - Add JWT authentication for POST/PUT/DELETE endpoints
   - Create admin dashboard for managing campaigns & team

3. **File Uploads** (Future feature)
   - Integrate Vercel Blob Storage for team photos
   - Update team form to handle image uploads

4. **Zeffy Integration** (For donations)
   - Sign up at zeffy.com (free for non-profits)
   - Embed Zeffy form on Donate page
   - Set up webhook to log transactions to backend

5. **Analytics** (Future feature)
   - Track donation amounts and trends
   - Monitor campaign progress in real-time

---

## 📋 File Checklist

Backend files created:
- ✅ `api/config/db.js`
- ✅ `api/models/Contact.js`
- ✅ `api/models/Campaign.js`
- ✅ `api/models/Team.js`
- ✅ `api/models/Donation.js`
- ✅ `api/routes/contacts.js`
- ✅ `api/routes/campaigns.js`
- ✅ `api/routes/teams.js`
- ✅ `api/middleware/errorHandler.js`
- ✅ `api/index.js`
- ✅ `api/server.js`

Frontend files updated:
- ✅ `src/services/api.js` (created)
- ✅ `src/pages/Contact.jsx`
- ✅ `src/pages/About.jsx`
- ✅ `src/pages/Donate.jsx`

Config files:
- ✅ `package.json`
- ✅ `vercel.json`
- ✅ `.env.local`
- ✅ `.env.production`
- ✅ `.gitignore`

---

## 💡 Pro Tips

1. **Save MongoDB credentials securely** — Use password manager like 1Password or Bitwarden
2. **Never commit `.env.local`** — Add to `.gitignore` (already done)
3. **Test API with Postman** — Download free tool at postman.com for detailed testing
4. **Monitor MongoDB usage** — Free tier has 512MB storage limit
5. **Keep dependencies updated** — Run `npm update` periodically

---

**You're all set! 🎉 Now set up MongoDB Atlas and test locally. Let me know if you hit any issues!**
