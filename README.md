# ♟️ KHET 2.0 — Online Laser Chess

An online multiplayer Laser Chess / Khet-inspired strategy game built using React, Vite, Node.js, Express, and Socket.IO.

---

# 🚀 Features

* Real-time online multiplayer
* Room creation & joining
* Laser firing system
* Piece movement & rotation
* Turn-based gameplay
* Responsive UI
* Socket.IO live synchronization
* Deployable on Vercel + Render

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Socket.IO Client

## Backend

* Node.js
* Express
* Socket.IO

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📁 Project Structure

```txt
KHET-2.0/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── game/
│   │   ├── pages/
│   │   ├── socket/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/KHET-2.0.git
```

---

# ▶️ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# ▶️ Backend Setup

Open another terminal:

```bash
cd server
npm install
node server.js
```

Backend runs on:

```txt
http://localhost:3001
```

---

# 🌐 Deployment

## Frontend → Vercel

Deploy the `client` folder on:

https://vercel.com

### Settings

```txt
Framework Preset: Vite
Root Directory: client
Build Command: npm run build
Output Directory: dist
```

---

## Backend → Render

Deploy the `server` folder on:

https://render.com

### Settings

```txt
Root Directory: server
Build Command: npm install
Start Command: node server.js
```

---

# 🔌 Socket.IO Configuration

Update:

```txt
client/src/socket/socket.js
```

Replace localhost URL with deployed Render backend URL.

Example:

```js
import { io } from "socket.io-client";

export const socket = io(
  "https://laser-chess-server.onrender.com"
);
```

---

# 🎮 Gameplay

* Create or join a room
* Move or rotate pieces
* Fire laser after each turn
* Destroy opponent Pharaoh to win

---

# 🔮 Future Features

* AI Bot
* Matchmaking
* Rankings
* Spectator Mode
* Replay System
* Mobile App
* Sound Effects
* Animated Lasers

---

# 👨‍💻 Author

Akash Marik

---

# 📜 License

This project is for educational purposes.
