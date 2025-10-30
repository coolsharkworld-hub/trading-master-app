# Trading Master Application

A comprehensive trading platform built with React, TypeScript, and Material-UI that provides real-time market analysis, trading reports, and educational resources for traders.

## 🚀 Features

### Trading Reports
- **GAP Analysis**: Real-time gap trading analysis and reporting
- **Inside Bar (IB) Analysis**: Monitor and analyze inside bar patterns
- **Opening Range Breakout (ORB)**: Track opening range breakouts with detailed metrics

### Platform Features
- **Custom Reports**: Generate personalized trading reports
- **Screeners**: Advanced market screening tools
- **Indicators**: Technical analysis indicators
- **Algo Trading**: Automated trading algorithms
- **Playbook**: Trading strategies and playbooks
- **Data Providers**: Integration with multiple data sources
- **Discord Integration**: Community features and notifications
- **Mentorship Program**: Educational resources and mentorship

### Additional Sections
- **Blog**: Trading insights and market analysis
- **Newsletter**: Regular market updates and strategies
- **Pricing**: Membership tiers and pricing information
- **Affiliates**: Partnership and referral program
- **Community**: Trader community and feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.0.0
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.2
- **UI Framework**: Material-UI (MUI) 7.0.0
- **Routing**: React Router DOM 7.9.2
- **HTTP Client**: Axios 1.12.2
- **Styling**: Emotion (CSS-in-JS)

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/SilverDigitalBus-LLC/trading-master-app.git
cd trading-master-app
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Production Build
Build the application for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Serve Production Build
Serve the built application:
```bash
npm start
```

## 📁 Project Structure

```
trading-master-app/
├── public/              # Static assets
│   └── assets/         # Images and media files
├── src/
│   ├── app/            # Application core
│   │   ├── layouts/    # Layout components
│   │   └── router/     # Routing configuration
│   ├── features/       # Feature modules
│   │   ├── affiliates/ # Affiliate program
│   │   ├── blog/       # Blog posts
│   │   ├── features/   # Platform features
│   │   ├── landing/    # Landing page sections
│   │   ├── newsletter/ # Newsletter features
│   │   ├── pricing/    # Pricing components
│   │   └── reports/    # Trading reports (GAP, IB, ORB)
│   ├── pages/          # Page components
│   ├── shared/         # Shared resources
│   │   ├── components/ # Reusable components
│   │   ├── config/     # Configuration files
│   │   ├── constants/  # Constants and data
│   │   ├── hooks/      # Custom React hooks
│   │   ├── icons/      # Icon components
│   │   ├── services/   # API services
│   │   ├── types/      # TypeScript type definitions
│   │   └── utils/      # Utility functions
│   ├── styles/         # Global styles
│   └── theme/          # MUI theme configuration
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # This file
```

## 🎨 Code Formatting

Format code using Prettier:
```bash
npm run format
```

## 🔌 API Integration

The application integrates with backend services for:
- GAP trading data
- Inside Bar (IB) analysis
- Opening Range Breakout (ORB) data
- User authentication and management

API services are configured in `src/shared/services/`.

## 🌐 Routing

The application uses React Router for navigation with the following main routes:
- `/` - Landing page
- `/home` - Dashboard home
- `/reports` - Trading reports (GAP, IB, ORB)
- `/features` - Platform features
- `/blog` - Blog articles
- `/newsletter` - Newsletter content
- `/pricing` - Pricing information
- `/affiliates` - Affiliate program

## 🎯 Key Components

### Layouts
- **LandingLayout**: Public-facing landing page layout
- **MainLayout**: Authenticated user layout
- **DashboardLayout**: Dashboard-specific layout

### Report Types
- **GAP**: Gap trading analysis workspace
- **IB (Inside Bar)**: Inside bar pattern workspace
- **ORB (Opening Range Breakout)**: ORB strategy workspace

## 🔐 Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:
```env
VITE_API_BASE_URL=your_api_base_url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 📧 Contact

For questions or support, please contact the development team.

## 🙏 Acknowledgments

- Material-UI for the component library
- Vite for the blazing fast build tool
- React team for the excellent framework

---
