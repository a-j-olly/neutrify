# Neutrify Demo Branch

This branch contains a standalone version of the Neutrify application that can be deployed without requiring AWS backend services. The original application was a news aggregator that allowed users to filter news based on various criteria, including political bias, topics, and sources.

## Overview of Changes

The primary goal of this branch was to make the application deployable for portfolio demonstration purposes by implementing mock services that replace AWS dependencies:

1. Replaced AWS Amplify/Cognito authentication with a mock authentication service
2. Replaced AWS AppSync/GraphQL API with a mock API service that generates sample news data
3. Added a demo mode indicator to show when the application is running with mock data
4. Upgraded the codebase to use newer versions of the frameworks:
   - Angular 12 (from Angular 11)
   - Ionic 6 (from Ionic 5)
   - Node 16 support

## Key Implementation Details

### Mock Services

- **Auth Service**: `src/app/services/mock-auth.service.ts` simulates user authentication with local storage
- **API Service**: `src/app/services/mock-neutrify-api.service.ts` provides mock news data and filter functionality

### Mock Data Generation

The application generates a configurable number of sample news articles with:

- Varied sources, biases, and publication dates
- Topics and keywords for filtering
- Mock images via placeholder URLs
- Simulated network delays for realism

### Configuration

The environment configuration has been updated to include:

- `useMocks: true` flag to indicate demo mode
- `mockDataSize` parameter to control the number of generated articles
- AWS-specific variables have been removed

## Running the Application

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   ionic serve
   ```

3. Build for production:
   ```bash
   ionic build --prod
   ```

## Demo User Credentials

You can use these pre-configured accounts to test the authentication:

- Email: `demo@example.com`
- Password: `Password123`

Or:

- Email: `test@example.com`
- Password: `Test1234`

You can also create a new account through the registration flow, or use the application as a guest.

## Features Demonstrated

- User authentication (sign up, sign in, password reset)
- News feed with grid and list views
- Filtering system with multiple criteria:
  - Political bias (left, center, right)
  - Topics (politics, sports, technology, etc.)
  - Keywords
  - Sources
  - Countries
  - Article attitude (sentiment)
- Search functionality
- Responsive design for mobile and desktop
- Dark/light mode theme switching

## Technical Notes

### Core Dependencies

- Angular 12.x
- Ionic 6.x
- RxJS 6.x
- TypeScript 4.3.x

### Project Structure

The application follows a standard Angular architecture with Ionic components:

- `/src/app/services` - Contains core services including mocks
- `/src/app/news-feed` - News feed components
- `/src/app/menu` - Filter menu components
- `/src/app/auth` - Authentication components

### Limitations

Since this is a demonstration version running with mock data:

- Articles are generated randomly and don't represent real news
- Filters work on the generated mock data only
- User accounts exist only in the browser's local storage
- Some features might be simplified compared to the original application

## Portfolio Integration

This demo version is suitable for showcasing as part of a portfolio to demonstrate:

- Angular/Ionic application architecture
- Responsive UI design
- Complex filtering and data management
- Authentication flows
- Mock service implementation for portfolio projects

## License

This code is provided for demonstration and portfolio purposes only.
