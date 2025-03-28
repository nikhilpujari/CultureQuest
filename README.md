# Culture Fit Assessment App

A gamified culture fit assessment Single Page Application (SPA) that transforms candidate evaluation into an engaging, interactive experience.

## Features

- Interactive scenario-based assessment with 8 workplace challenges
- Avatar customization
- Virtual mentor interaction with personalized feedback
- Detailed culture fit analysis across four key categories:
  - Collaboration
  - Support
  - Innovation
  - Growth
- Cohesive "Project Phoenix" storyline that follows a complete workday (9AM-5:30PM)
- 5-minute assessment timer with visual countdown and pause functionality
- Modern, visually appealing UI with scenario-specific imagery

## Technology Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context API
- **Routing**: Wouter for lightweight client-side routing
- **Backend**: Express.js (for serving the application)

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to localhost:5000

## Heroku Deployment

This project can be deployed to Heroku with minimal configuration. We've provided helper files for deploying to Heroku:

1. Read the `HEROKU_DEPLOYMENT.md` file for detailed instructions
2. Run the preparation script:
   ```bash
   chmod +x prepare-for-heroku.sh
   ./prepare-for-heroku.sh
   ```
3. Follow the displayed deployment commands

## Project Structure

- `/client` - Frontend React application
  - `/src/components` - React components
  - `/src/lib` - Utilities and data files
  - `/src/pages` - Page components
- `/server` - Backend Express server
- `/shared` - Shared types and schemas
- `/attached_assets` - Images and other static assets

## License

This project is available as open source under the terms of the MIT License.