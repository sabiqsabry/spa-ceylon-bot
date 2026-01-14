# Spa Ceylon AI Chatbot

A fully functional AI-powered chatbot for Spa Ceylon (luxury Ayurveda brand) built with React, Node.js, and Claude API. The chatbot appears as a floating widget on a dummy e-commerce website and provides intelligent, context-aware conversations about products, spa services, and Ayurvedic wellness.

## 🚀 Features

- **AI-Powered Conversations**: Uses Claude Sonnet 4.5 API for natural, context-aware responses
- **Comprehensive Knowledge Base**: Embedded system prompt with complete spa menu (100+ rituals), product catalog, Dosha system, and brand information
- **Floating Chat Widget**: Elegant, responsive chat interface that works seamlessly on desktop and mobile
- **Session Management**: Maintains conversation history per user session
- **Brand-Aligned Design**: Matches Spa Ceylon's luxury Ayurveda aesthetic with custom color palette
- **Dummy E-Commerce Site**: Realistic background website showcasing products and spa services

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Claude API key from Anthropic

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd SP-Chatbot
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
ANTHROPIC_API_KEY=your_claude_api_key_here
PORT=3001
NODE_ENV=development
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:3001/api
```

## 🚀 Running the Application

### Terminal 1 - Backend Server

```bash
cd server
npm run dev
```

The backend will run on `http://localhost:3001`

### Terminal 2 - Frontend Development Server

```bash
cd client
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
spa-ceylon-chatbot/
├── server/                          # Node.js Backend
│   ├── server.js                    # Express app entry point
│   ├── routes/
│   │   └── chat.js                  # Chat API endpoints
│   ├── controllers/
│   │   └── chatController.js        # Claude API integration
│   ├── data/
│   │   ├── systemPrompt.js          # Comprehensive system prompt
│   │   ├── spaMenuData.json         # Complete spa menu (100+ rituals)
│   │   ├── productData.json         # Product catalog structure
│   │   └── doshaInfo.js             # Dosha recommendations
│   └── package.json
│
├── client/                          # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── chatbot/             # Chat widget components
│   │   │   └── website/             # Dummy e-commerce site
│   │   ├── data/
│   │   │   └── products.js          # Sample product data
│   │   └── App.jsx                  # Main app component
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### POST `/api/chat/message`

Send a message to the chatbot.

**Request Body:**
```json
{
  "message": "What's good for stress?",
  "sessionId": "uuid-string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Ayubowan! I completely understand...",
  "sessionId": "uuid-string"
}
```

### POST `/api/chat/clear`

Clear conversation history for a session.

**Request Body:**
```json
{
  "sessionId": "uuid-string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Conversation cleared"
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Spa Ceylon Chatbot API is running"
}
```

## 🎨 Brand Colors

The application uses Spa Ceylon's brand color palette:

- **Primary Green**: `#1A5F4A` (spa-green-500)
- **Gold Accent**: `#C9A962` (spa-gold-500)
- **Cream Background**: `#FDF8F3` (spa-cream)

## 🧪 Testing

### Manual Testing Checklist

1. ✅ Ask about spa prices - should return accurate numbers
2. ✅ Ask for Dosha quiz - should ask relevant questions
3. ✅ Ask about bridal packages - should list all 4 with prices
4. ✅ Ask for cheapest/most expensive options - should filter correctly
5. ✅ Ask about location-specific services - should mention restrictions
6. ✅ Have a 10+ message conversation - should maintain context
7. ✅ Test on mobile viewport - should be fully usable
8. ✅ Test with slow network - should show loading states gracefully
9. ✅ Test error handling - disconnect API and check fallback

## 🚢 Deployment

### Frontend (Vercel)

```bash
cd client
npm run build
vercel deploy
```

Set environment variable:
- `VITE_API_URL`: Your backend API URL

### Backend (Railway/Render)

1. Push code to GitHub
2. Connect repository to Railway/Render
3. Set environment variables:
   - `ANTHROPIC_API_KEY`: Your Claude API key
   - `PORT`: 3001 (or your preferred port)
   - `NODE_ENV`: production

## 📝 Key Features

### Chatbot Capabilities

- Product recommendations based on skin type, Dosha, or preferences
- Spa service guidance with accurate pricing (Local vs Foreign therapist)
- Interactive Dosha quiz to discover Ayurvedic body type
- Location assistance for 18 spa locations in Sri Lanka
- Gifting advice and bridal package recommendations
- Booking guidance with contact information

### System Prompt

The system prompt (`server/data/systemPrompt.js`) includes:
- Complete brand identity and philosophy
- All 100+ spa rituals with pricing
- Three Dosha system with product recommendations
- Product catalog structure (450+ products)
- 18 spa locations with availability restrictions
- Response guidelines and example interactions

## 🔧 Configuration

### Environment Variables

**Server (.env):**
- `ANTHROPIC_API_KEY`: Required - Your Claude API key
- `PORT`: Optional - Server port (default: 3001)
- `NODE_ENV`: Optional - Environment (development/production)

**Client (.env):**
- `VITE_API_URL`: Optional - Backend API URL (default: http://localhost:3001/api)

## 📚 Technologies Used

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend**: Node.js, Express, Anthropic SDK
- **AI**: Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)
- **State Management**: React Context API
- **Styling**: Tailwind CSS with custom brand palette

## 🤝 Contributing

This is a portfolio project. For questions or suggestions, please open an issue.

## 📄 License

This project is for portfolio/demonstration purposes.

## 🙏 Acknowledgments

- Spa Ceylon for brand inspiration and product information
- Anthropic for Claude API
- All open-source contributors

---

**Note**: Remember to add your Claude API key to `server/.env` before running the application.
