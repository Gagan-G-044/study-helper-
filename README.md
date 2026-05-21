# 🚀 AI Study Helper

<p align="center"> <b>A premium, high-design cognitive learning assistant that transforms raw, unstructured study material into structured revision guides, concept glossaries, and practice tasks.</b> </p>

<p align="center">
  <a href="https://study-helper-.onrender.com/"><img src="https://img.shields.io/badge/Live-Demo-10b981?style=for-the-badge&logo=render&logoColor=white"/></a>
  <a href="https://github.com/Gagan-G-044/study-helper-"><img src="https://img.shields.io/badge/GitHub-Repo-111827?style=for-the-badge&logo=github&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/Node.js-v18+-blue?style=for-the-badge&logo=node.js"/>
  <img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/AI-Gemini-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge"/>
</p>

---

## 🌐 Live Demo

👉 Try it here:  
**[[https://study-helper-.onrender.com/](https://study-helper-.onrender.com/)](https://study-helper-qhyx.onrender.com)**

---

## ✨ Features

- 💬 **Multi-Mode Aesthetics**: Switch between **Standard Space Midnight**, **Pure Swisstone Mono**, and **Editorial Cream Reading Mode** optimized for long study sessions.
- 🪐 **Glassmorphic Depth Panels**: Premium custom cards with an updated `30px` backdrop blur for deep visual rhythm and contrast.
- 🧠 **Structured Synthesis**: Processes scrambled notes into logical units:
  - Concise Narrative Explanations (custom Verdana styling)
  - Chronological Revision Playbooks
  - Core Principle / Key Glossary panels
  - Active Scientific Q&As with clean drop-down accordions
- 📡 **Server-Side Security**: Secure Express backend proxying that hides your API keys and configuration safely away from the browser.
- 🚀 **Full-Screen Fluid Layout**: Designed cleanly with responsive typography and delightful element transitions.

---

## 🛠 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS v4, Motion, Lucide Icons |
| **Backend** | Express, Node.js (TypeScript with CJS Compilation) |
| **AI Integration** | Google Gemini API (`@google/genai` modern SDK) |
| **Dev Tools** | `tsx`, `esbuild` |
| **Deployment** | Render |

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Gagan-G-044/study-helper-
cd study-helper-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

*(Note: Never push this `.env` file containing your real API keys to GitHub. It is safely ignored in `.gitignore`)*

### 4. Run the App in Development Mode

```bash
npm run dev
```

👉 Open: **[http://localhost:3000](http://localhost:3000)** to see your app running live.

---

## 💥 Production Build & Local Launch

To test the bundled and optimized production builds locally before deployment:

```bash
# Build frontend resources and bundle the Express server 
npm run build

# Start the compiled server
npm run start
```

---

## 👨‍💻 Author

**Gagan G**  
🔗 [https://github.com/Gagan-G-044](https://github.com/Gagan-G-044)

---

## 📄 License

MIT License © 2026 Gagan G

---

## ⭐ Support

If you like this project:
- 👉 **Star the repository** to show encouragement!
- 👉 **Share feedback** on layout enhancements
- 👉 **Suggest improvements** or open pull requests!
