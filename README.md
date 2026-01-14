# 🪷 Spa Ceylon AI Chatbot

<div align="center">

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?logo=tailwind-css)
![Claude API](https://img.shields.io/badge/Claude-Sonnet_4.5-orange?logo=anthropic)
![License](https://img.shields.io/badge/License-Portfolio-purple)

**A beautiful WhatsApp-style floating chatbot widget powered by Claude AI for Spa Ceylon's luxury Ayurveda brand**

[Demo Video](https://x.com/i/status/2011426929505861710) • [Features](#-features) • [Installation](#-installation) • [API Documentation](#-api-endpoints)

</div>

---

## 📹 Demo

**Watch the chatbot in action:** [Demo Video on X/Twitter](https://x.com/i/status/2011426929505861710)

The chatbot features a sleek WhatsApp-inspired design with smooth animations, proper message bubbles, typing indicators, and a floating action button that opens a beautiful chat window.

---

## ✨ Features

- 🤖 **AI-Powered Conversations** - Uses Claude Sonnet 4.5 API for natural, context-aware responses
- 💬 **WhatsApp-Style UI** - Beautiful floating chat widget with smooth animations
- 📚 **Comprehensive Knowledge Base** - Complete spa menu (100+ rituals), product catalog, Dosha system
- 🎨 **Brand-Aligned Design** - Spa Ceylon's luxury Ayurveda aesthetic with custom color palette
- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile devices
- 🔄 **Session Management** - Maintains conversation history per user session
- ⚡ **Real-time Typing Indicators** - Animated dots while waiting for AI responses
- 🎯 **Smart Recommendations** - Product suggestions based on skin type, Dosha, or preferences

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Claude API Key** from [Anthropic](https://console.anthropic.com/)

> ⚠️ **Important:** You need your own Claude API key to run this project. API keys are never committed to the repository for security reasons.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sabiqsabry/spa-ceylon-bot.git
   cd spa-ceylon-bot
   ```

2. **Backend Setup**
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
   
   > 🔒 **Security Note:** Never commit your `.env` file. It's already in `.gitignore` for your protection.

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```
   
   Create a `.env` file in the `client` directory:
   ```env
   VITE_API_URL=http://localhost:3001/api
   ```

### Running the Application

**Terminal 1 - Backend Server:**
```bash
cd server
npm run dev
```
Backend runs on: `http://localhost:3001`

**Terminal 2 - Frontend Development Server:**
```bash
cd client
npm run dev
```
Frontend runs on: `http://localhost:5173`

Open `http://localhost:5173` in your browser to see the chatbot! 🎉

---

## 📁 Project Structure

```
spa-ceylon-bot/
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
│   │   │   └── chatbot/             # Chat widget components
│   │   │       ├── ChatWidget.jsx   # Main chat component
│   │   │       ├── ChatMessage.jsx  # Message bubble component
│   │   │       ├── TypingIndicator.jsx
│   │   │       └── QuickReplies.jsx
│   │   ├── styles/
│   │   │   └── chatbot.css          # Custom styles
│   │   └── App.jsx                  # Main app component
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

### `POST /api/chat/message`

Send a message to the chatbot.

**Request:**
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

### `POST /api/chat/clear`

Clear conversation history for a session.

**Request:**
```json
{
  "sessionId": "uuid-string"
}
```

### `GET /api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Spa Ceylon Chatbot API is running"
}
```

---

## 🎨 Design Features

### WhatsApp-Style UI
- **Floating Action Button (FAB)** - Circular green button in bottom-right corner
- **Chat Window** - 380px × 600px popup with smooth animations
- **Message Bubbles** - Green for user, white for bot with proper tails
- **Typing Indicator** - Animated bouncing dots
- **Timestamps** - On all messages
- **Read Receipts** - Double checkmarks on user messages

### Brand Colors
- **Primary Green**: `#1A5F4A` (Spa Ceylon brand color)
- **User Messages**: `#DCF8C6` (Light green, WhatsApp-style)
- **Bot Messages**: `#FFFFFF` (White with shadow)
- **Chat Background**: `#ECE5DD` (Beige, WhatsApp-style)
- **Input Area**: `#F0F0F0` (Light gray)

---

## 🧠 Chatbot Capabilities

The chatbot can help users with:

- 💆 **Spa Service Guidance** - Complete pricing for 100+ spa rituals (Local vs Foreign therapist)
- 🛍️ **Product Recommendations** - Based on skin type, Dosha, or preferences
- 🧘 **Dosha Quiz** - Interactive discovery of Ayurvedic body type (Vata, Pitta, Kapha)
- 📍 **Location Assistance** - Information about 18 spa locations in Sri Lanka
- 🎁 **Gifting Advice** - Gift sets and bridal package recommendations
- 📞 **Booking Guidance** - Contact information and service hours

---

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite, Tailwind CSS v4, Framer Motion, Lucide Icons
- **Backend**: Node.js, Express, Anthropic SDK
- **AI**: Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- **State Management**: React Hooks
- **Styling**: Tailwind CSS with custom brand palette

---

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

---

## 🔧 Configuration

### Environment Variables

**Server (`server/.env`):**
```env
ANTHROPIC_API_KEY=your_claude_api_key_here  # REQUIRED
PORT=3001                                    # Optional (default: 3001)
NODE_ENV=development                         # Optional
```

**Client (`client/.env`):**
```env
VITE_API_URL=http://localhost:3001/api      # Optional (default: http://localhost:3001/api)
```

> ⚠️ **Remember:** You must obtain your own Claude API key from Anthropic. The project will not work without it.

---

## 🧪 Testing

### Manual Testing Checklist

- [x] Ask about spa prices - returns accurate numbers
- [x] Ask for Dosha quiz - asks relevant questions
- [x] Ask about bridal packages - lists all 4 with prices
- [x] Ask for cheapest/most expensive options - filters correctly
- [x] Ask about location-specific services - mentions restrictions
- [x] 10+ message conversation - maintains context
- [x] Mobile viewport - fully usable
- [x] Error handling - graceful fallback messages

---

## 📝 Key Implementation Details

### System Prompt
The comprehensive system prompt (`server/data/systemPrompt.js`) includes:
- Complete brand identity and philosophy
- All 100+ spa rituals with accurate pricing
- Three Dosha system with product recommendations
- Product catalog structure (450+ products)
- 18 spa locations with availability restrictions
- Response guidelines and example interactions

### Session Management
- Each user session gets a unique UUID
- Conversation history maintained in memory (last 20 messages)
- Ready for Redis/database integration in production

---

## 🤝 Contributing

This is a portfolio project. For questions or suggestions, please open an issue.

---

## 📄 License

This project is for portfolio/demonstration purposes.

---

## 🙏 Acknowledgments

- **Spa Ceylon** - Brand inspiration and product information
- **Anthropic** - Claude API
- **All open-source contributors** - For the amazing tools and libraries

---

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

<div align="center">

**Made with ❤️ for Spa Ceylon**

⭐ Star this repo if you find it helpful!

</div>
