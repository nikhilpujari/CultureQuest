# Heroku Deployment Guide

This guide explains how to deploy the Culture Fit Assessment app to Heroku, a popular cloud platform.

## Prerequisites

1. Create a [Heroku account](https://signup.heroku.com/) if you don't have one already
2. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) on your local machine
3. Make sure you have [Git](https://git-scm.com/downloads) installed

## Preparation

We've provided a script to prepare your project for Heroku deployment. This script:

1. Copies avatar and scenario images to the assets directory
2. Copies Heroku-specific configuration files to their correct locations
3. Creates a proper Procfile for Heroku
4. Initializes a Git repository if needed

Run the following command from the project root:

```bash
chmod +x prepare-for-heroku.sh
./prepare-for-heroku.sh
```

## Deployment Steps

1. **Login to Heroku CLI**

   ```bash
   heroku login
   ```
   
   This opens a browser where you can log in with your Heroku credentials.

2. **Create a New Heroku App**

   ```bash
   heroku create your-app-name
   ```
   
   Replace `your-app-name` with a unique name for your application. If you don't specify a name, Heroku will generate one for you.

3. **Set Buildpack and Node Version**

   ```bash
   heroku buildpacks:set heroku/nodejs
   heroku config:set NODE_VERSION=20.x
   ```

4. **Deploy Your App**

   ```bash
   git push heroku main
   ```
   
   If your main branch has a different name (like 'master'), use that instead:
   
   ```bash
   git push heroku master
   ```

5. **Open Your App**

   ```bash
   heroku open
   ```
   
   This command opens your deployed application in a browser.

## Advanced Configuration

### Build Process

The Heroku deployment uses a customized build process:

1. The frontend is built using Vite
2. The server is bundled with ESBuild 
3. Assets are properly included in the build

These steps are automatically handled by the `heroku-postbuild` script defined in `package.json.heroku`.

## Troubleshooting

### Viewing Logs

If your application doesn't start properly, check the logs:

```bash
heroku logs --tail
```

### Common Issues

1. **Missing Assets**: If images don't appear, check that the prepare script correctly copied assets to the client/src/assets directory.

2. **Build Failures**: Check the build logs for any errors. The most common issues are related to Node.js version incompatibilities or missing dependencies.

3. **Server Startup Failures**: If the server fails to start, check the logs for error messages related to port configuration or missing environment variables.

### Database Setup

This application uses in-memory storage by default, so no database configuration is required. If you want to add a database for persistence:

1. Add a PostgreSQL database:
   ```bash
   heroku addons:create heroku-postgresql:mini
   ```

2. You'll need to modify the storage implementation to use PostgreSQL instead of in-memory storage.

### Custom Domain

To use a custom domain with your Heroku app:

1. Register a domain name if you don't have one
2. Add the domain to your Heroku app:
   ```bash
   heroku domains:add www.yourdomain.com
   ```
3. Follow the DNS configuration instructions provided by Heroku

## Additional Resources

- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku DevCenter Documentation](https://devcenter.heroku.com/)
- [Heroku PostgreSQL Documentation](https://devcenter.heroku.com/articles/heroku-postgresql)