<div align="center">
  <h1>🎭 Ai-Studio: Performing Arts Tournament Platform</h1>
  <p><strong>A web application that connects donors, artists, and communities through innovative performing arts tournaments</strong></p>
</div>

---

## 📋 Overview

**Ai-Studio** is an intelligent web platform designed to revolutionize the performing arts landscape by creating a dynamic ecosystem where:

- **Donors** launch and fund challenges in prestigious performing arts tournaments
- **Artists** compete and showcase their talents
- **Tournament Winners** select iconic community venues as showcase locations (Hub Comuni)
- **Participating Communities** display their unique Points of Interest
- **AI Agents** intelligently manage community selection and provide contextual information
- **Google Maps Integration** visualizes venues, performances, and cultural attractions

This application bridges the gap between artistic excellence, community engagement, and cultural tourism through technology and strategic partnerships.

---

## 🎯 Core Features

### 1. **Donor Challenge Module** 💰
- Create and manage performance art challenges
- Set funding parameters and tournament guidelines
- Track challenge progress and participant engagement
- Monitor return on cultural investment

### 2. **Tournament Management** 🏆
- Display ongoing and completed tournaments
- Showcase featured challenges from donors
- Real-time leaderboards and rankings
- Performance metrics and analytics

### 3. **Winner Venue Selection** 🎪
- Winning artists and directors select Hub Communities
- Interactive venue picker with multimedia content
- Historical performance data and audience demographics
- Integration with booking and event management systems

### 4. **Community Hub System** 🏘️
- **Hub Comuni**: Primary performance venues managed by winning partners
- **Spoke Comuni**: Participating communities showcasing Points of Interest
- Cultural landmark display and tourism promotion
- Community engagement metrics and visitor statistics

### 5. **Points of Interest (POI) Management** 📍
- Browse cultural attractions, museums, restaurants, and landmarks
- Geolocation-based discovery within each community
- Photos, descriptions, and visitor reviews
- Integration with local business information

### 6. **Google Maps Integration** 🗺️
- Interactive map visualization of all venues
- POI clustering and filtering
- Route planning between performance locations
- Real-time venue information and accessibility details

### 7. **AI-Powered Agent System** 🤖
- **Smart Community Selection**: AI recommends optimal communities based on:
  - Venue capacity and infrastructure
  - Audience demographics and preferences
  - Historical performance success
  - Travel accessibility and logistics
- **Contextual Information Provider**: Delivers relevant data on:
  - Community cultural heritage
  - Local partnerships and sponsorships
  - Tourism impact projections
  - Audience engagement predictions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Modern UI framework with hooks and concurrent rendering |
| **TypeScript** | Type-safe development for improved reliability |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework for responsive design |
| **Google GenAI** | AI agent and intelligent recommendations |
| **Express.js** | Backend server for API routes and data management |
| **React Router v7** | Client-side routing and navigation |
| **Lucide React** | Beautiful icon library |
| **Recharts** | Data visualization and analytics charts |
| **Motion** | Smooth animations and transitions |
| **React Markdown** | Rich text content rendering |

**Language Composition:**
- TypeScript: 97.6%
- CSS: 1.2%
- HTML: 1.2%

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Gemini API Key** (for AI agent functionality)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EmanueleDeCandia/Ai-Studio.git
   cd Ai-Studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   - Add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run lint

# Clean build artifacts
npm run clean
```

---

## 📁 Project Structure

```
Ai-Studio/
├── src/                    # Source code
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── .env.example           # Environment variables template
└── README.md              # This file
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key

# Google Maps Configuration (optional)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Application Environment
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

### Tailwind CSS

Tailwind CSS is configured with Vite plugin for optimal performance. Custom configurations can be made in `tailwind.config.js`.

---

## 💡 Key Workflows

### Workflow 1: Donor Challenge Creation
1. Donor logs into the platform
2. Creates a new performing arts challenge with:
   - Challenge title and description
   - Funding amount and timeline
   - Performance categories and judging criteria
3. Platform broadcasts challenge to artist community
4. Donors monitor submissions and engagement

### Workflow 2: Winner Venue Selection
1. Competition concludes and winners are determined
2. Winners receive invitation to select Hub Communities
3. Interactive map and community profiles guide selection
4. Selected venues confirmed and contracts managed
5. Performance dates scheduled and promoted

### Workflow 3: Community Engagement
1. Spoke communities add Points of Interest
2. POIs appear on interactive map
3. Visitors discover cultural attractions
4. Tourism metrics tracked and reported
5. Community economic impact measured

### Workflow 4: AI-Powered Recommendations
1. AI agent analyzes:
   - Performance type and audience demographics
   - Available community venues and infrastructure
   - Historical success data
   - Accessibility and logistics
2. Provides ranked community recommendations
3. Suggests promotional strategies and partnerships
4. Predicts audience engagement and tourism impact

---

## 🔐 Security & Best Practices

- **API Keys**: Never commit `.env.local` to version control
- **Authentication**: Implement role-based access control (RBAC)
- **Data Validation**: All user inputs validated on client and server
- **HTTPS**: Use HTTPS in production
- **Rate Limiting**: Implement rate limiting for API endpoints

---

## 🤝 Contributing

We welcome contributions from developers, designers, and cultural enthusiasts!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📊 Deployment

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deployment Options
- **Vercel**: Connect GitHub and auto-deploy on push
- **Netlify**: Drag-and-drop or connect Git repository
- **Firebase Hosting**: Use Firebase CLI for deployment
- **Docker**: Containerize with provided Dockerfile (optional)

---

## 📈 Performance Optimization

- **Code Splitting**: React Router enables automatic code splitting
- **Image Optimization**: Lazy loading for media content
- **Caching**: Service workers for offline capabilities
- **Tree Shaking**: Vite automatically eliminates unused code
- **Bundle Analysis**: Monitor bundle size with Vite plugins

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Gemini API Key Issues
- Verify key is correctly set in `.env.local`
- Check API quota and billing status
- Ensure key has necessary permissions

### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Support & Contact

- **Issues**: Report bugs via [GitHub Issues](https://github.com/EmanueleDeCandia/Ai-Studio/issues)
- **Discussions**: Ask questions in [GitHub Discussions](https://github.com/EmanueleDeCandia/Ai-Studio/discussions)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙌 Acknowledgments

- Google Gemini AI for intelligent agent capabilities
- Google Maps for geolocation services
- React community for amazing libraries
- All participating artists, donors, and communities

---

<div align="center">
  <p><strong>Bringing performing arts and communities together through technology 🎭✨</strong></p>
  <p>Made with ❤️ by <a href="https://github.com/EmanueleDeCandia">EmanueleDeCandia</a></p>
</div>