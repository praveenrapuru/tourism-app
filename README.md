# Rajasthan Tourism App

A React-based tourism website for Udaipur, Rajasthan featuring popular tourist attractions, travel information, and detailed place descriptions.

## Features

- Browse popular tourist places in Udaipur
- View detailed information about each attraction
- Search functionality for places
- Responsive design for mobile and desktop
- Data fetched from external API

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd tourism-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Places.js
│   ├── UdaipurInfo.js
│   ├── HowToReach.js
│   ├── Footer.js
│   └── AttractionDetail.js
├── context/
│   ├── PlacesContext.js
│   └── LanguageContext.js
├── pages/
│   └── AttractionPage.js
├── App.js
└── index.js
```

## API

Places data is fetched from:
```
https://mocki.io/v1/6bea1edd-b4a2-4993-a569-efc07b1759d8
```

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests

## License

MIT
