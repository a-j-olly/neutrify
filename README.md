# Neutrify

## Project Status

Neutrify ceased operations as a news aggregation service on August 27, 2021. However, a live demo of Neutrify exist at [neutrify-demo](https://neutrify-demo.pages.dev/app), which is deployed from the [demo branch](https://github.com/a-j-olly/neutrify/tree/neutrify-demo). This repository a fork of the orignal [Neutrify repository](https://github.com/Neutrify/neutrify).

## Overview

Neutrify is a news aggregation platform that empowers users to control their news consumption experience. Its core mission is to help users "filter out the hysteria" by providing powerful customization tools to personalize their news feed. Unlike traditional news platforms, Neutrify gives users granular control over the content they see, helping them avoid sensationalism and focus on news that matters to them.

## Key Features

### Customizable News Filters

- **Topic Filtering**: Select specific topics of interest
- **Keyword Filtering**: Include or exclude content with specific keywords
- **Source Filtering**: Choose which news sources to include or exclude
- **Political Bias Filtering**: Filter news based on political leaning
- **Country Filtering**: Filter news by country of origin
- **Tone Analysis**: Filter articles based on emotional tone score

### User Experience

- **Multiple Layouts**: Toggle between grid and list view
- **Dark Mode**: Switch between light and dark themes
- **Search Functionality**: Search for specific news content
- **Article Analysis**: View topic categorization and keyword extraction for articles
- **Responsive Design**: Optimized for various screen sizes and devices

### User Management

- **Account System**: Create and manage user accounts
- **Guest Mode**: Browse without an account
- **Cloud Synchronization**: Save and load filter preferences

## Technology Stack

### Frontend Framework

- **Angular 11**: Core frontend framework
- **Ionic 5**: UI component library for cross-platform development
- **TypeScript**: For type-safe JavaScript development

### Authentication & User Management

- **AWS Amplify & Cognito**: For user authentication and profile management
- **Amazon Cognito Identity**: For secure user authentication flows

### State Management & Data Flow

- **RxJS**: For reactive programming and state management
- **Services Architecture**: Angular services for business logic and data flows

### Styling

- **SCSS**: For styling components
- **CSS Animations**: For smooth transitions and UI feedback

### Data Handling

- **GraphQL**: For efficient data querying
- **AWS AppSync**: For GraphQL API implementation
- **AWS Amplify API**: For integrating with AppSync GraphQL APIs

### Progressive Web App (PWA) Features

- **Service Workers**: For offline capability
- **Web App Manifest**: For installable web app experience

### Analytics & Monitoring

- **Google Analytics**: For user behavior tracking and engagement metrics

### Mobile Deployment

- **Cordova**: For wrapping the web app as a native mobile application
- **Ionic Native**: For accessing native device features

## Project Structure

The project follows Angular's modular architecture with these key directories:

- `/src/app`: Core application code

  - `/auth`: Authentication components and logic
  - `/blog`: Blog pages and components
  - `/home`: Home page and marketing components
  - `/menu`: Menu components for filter controls
  - `/news-feed`: News display components
  - `/services`: Business logic and API integration
  - `/tutorial`: Onboarding user tutorial

- `/src/assets`: Static assets

  - `/model`: Data models for filtering options
  - `/img`: Images and graphics

- `/src/environments`: Environment-specific configuration

## Core Functionality

### News Feed & Filtering

The app's primary functionality revolves around the news feed and its filtering mechanism:

1. Users can view a feed of news articles pulled from various sources
2. Articles are displayed with metadata including source, publish date, political bias rating, and tone
3. Users can apply multiple filter types to customize their feed
4. Filters can be saved to user profiles and reloaded

### Filter Menu

The filter menu provides granular control over:

- Topics: Categories like Business, Technology, Politics, etc.
- Keywords: Specific terms to include or exclude
- Sources: Specific news outlets to include or exclude
- Location: Countries from which news originates
- Political Bias: Filter by political leaning
- Article Attitude: Filter by emotional tone using a slider

### Mobile & Web Experience

The application is designed as a cross-platform solution:

- Responsive web experience with PWA capabilities
- Native mobile apps for iOS and Android via Cordova
- Adaptive layouts for different screen sizes

## Design Philosophy

Neutrify embodies these core design principles:

1. **User Control**: Giving users power over their news consumption
2. **Transparency**: Providing metadata about articles for informed decisions
3. **Balanced Information**: Helping users escape filter bubbles by making filtering explicit
4. **Performance**: Fast loading and responsive experience across devices
5. **Accessibility**: Dark mode and responsive design for various user needs