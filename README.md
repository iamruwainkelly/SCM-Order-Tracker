# 🚛 SCM Order Tracker

> **Supply Chain Management Order Tracker** - Real-time European logistics monitoring & risk assessment dashboard

[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 🎯 Project Overview

A comprehensive supply chain management dashboard designed for European logistics operations. Features real-time order tracking, risk assessment, carrier performance monitoring, and analytics with German localization.

### ✨ Key Features

- 📦 **Real-time Order Tracking** - Monitor shipments across Europe with live status updates
- 📊 **Advanced Analytics** - Delivery status distribution and risk factor analysis charts
- 🚚 **Carrier Performance** - Track and compare logistics provider efficiency
- 🇩🇪 **German Localization** - EUR currency, DD.MM.YYYY dates, German locations
- 🔄 **Live Updates** - Simulated real-time data updates and activity feeds
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🎨 **Modern UI/UX** - Dark theme with gradient accents and smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Chart.js
- **Routing**: Vue Router 4
- **Icons**: Unicode Emojis

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamruwainkelly/SCM-Order-Tracker.git
   cd SCM-Order-Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
SCM-Order-Tracker/
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── ActivityItem.vue    # Activity feed item
│   │   ├── CarrierCard.vue     # Carrier performance card
│   │   ├── OrderCard.vue       # Order status card
│   │   ├── OrderDetailsModal.vue # Order details popup
│   │   ├── PriorityBadge.vue   # Priority level indicator
│   │   ├── RiskScore.vue       # Risk assessment display
│   │   ├── RouteStep.vue       # Shipping route step
│   │   ├── SeverityBadge.vue   # Alert severity indicator
│   │   └── StatusBadge.vue     # Order status badge
│   ├── pages/
│   │   └── SCMDashboard.vue    # Main dashboard page
│   ├── mock/
│   │   └── data.js             # Mock data for demo
│   ├── App.vue                 # Root component
│   ├── main.js                 # Application entry point
│   ├── router.js               # Vue Router configuration
│   └── style.css               # Global styles
├── assets/                     # Static assets
├── public/                     # Public files
├── index.html                  # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # This file
```

## 🎮 Features Breakdown

### 📊 Dashboard Analytics
- **Delivery Status Chart**: Doughnut chart showing on-track, at-risk, delayed, and delivered orders
- **Risk Factor Analysis**: Bar chart displaying various risk factors affecting shipments
- **KPI Cards**: Real-time statistics for order status distribution

### 📦 Order Management
- **Order Cards**: Visual representation of active shipments with status indicators
- **Order Details Modal**: Comprehensive shipment information and tracking history
- **Status Updates**: Real-time status changes with automated risk assessment

### 🚚 Carrier Performance
- **Performance Metrics**: On-time delivery rates, average delay times
- **Carrier Comparison**: Side-by-side performance analysis
- **Rating System**: Visual rating indicators for carrier reliability

### 🟩 Live Activity Feed
- **Real-time Updates**: Live stream of shipment events and status changes
- **Event Types**: Pickups, scans, delays, deliveries, and system updates
- **Timestamp Tracking**: German-formatted timestamps for all activities

### 🎛️ Interactive Controls
- **Update Order Status**: Simulate real-time status updates
- **Generate Report**: Export comprehensive logistics reports
- **Export CSV**: Download shipment data for analysis
- **Schedule Return**: Initiate return logistics workflows

## 🇩🇪 German Localization

- **Date Format**: DD.MM.YYYY (German standard)
- **Currency**: EUR (€) formatting
- **Locations**: German cities (Berlin, Hamburg, Munich, etc.)
- **Time Zones**: Central European Time (CET/CEST)
- **Language**: UI optimized for German logistics terminology

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=SCM Order Tracker
VITE_API_BASE_URL=https://api.your-logistics-provider.com
VITE_REFRESH_INTERVAL=30000
```

### Customization

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Charts**: Adjust chart configurations in `SCMDashboard.vue`
- **Mock Data**: Update `src/mock/data.js` for different demo scenarios

## 🧪 Demo Data

The application includes comprehensive mock data featuring:

- **25+ Sample Orders** with varying statuses and risk levels
- **European Carriers** (DHL, UPS, FedEx, TNT, etc.)
- **German Locations** (Berlin, Hamburg, Munich, Cologne, etc.)
- **Realistic Shipment Routes** across European logistics networks
- **Dynamic Risk Factors** (weather, traffic, customs, capacity)

## 📈 Performance Features

- **Code Splitting**: Optimized bundle sizes with Vite
- **Lazy Loading**: Components loaded on demand
- **Responsive Images**: Optimized assets for different screen sizes
- **Smooth Animations**: 60fps transitions and micro-interactions
- **Real-time Updates**: Efficient WebSocket-style data simulation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ruwain Kelly**
- Portfolio: [iamruwainkelly.vercel.app](https://iamruwainkelly.vercel.app)
- GitHub: [@iamruwainkelly](https://github.com/iamruwainkelly)
- LinkedIn: [Ruwain Kelly](https://linkedin.com/in/ruwain-kelly)

## 🚀 Live Demo

Experience the SCM Order Tracker in action:
- **Standalone App**: [Coming Soon]
- **Portfolio Integration**: [iamruwainkelly.vercel.app/scm-order-tracker](https://iamruwainkelly.vercel.app/scm-order-tracker)

---

⚡ **Built with Vue.js 3, Chart.js, and Tailwind CSS for modern supply chain management**
