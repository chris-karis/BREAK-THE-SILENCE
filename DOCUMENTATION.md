# Break the Silence - Project Structure

## Overview
This document describes the structure of the Break the Silence website project, a mental health initiative for youth in Kiambu County using rabbit therapy.

## Directory Structure

```
BREAK THE SILENCE/
│
├── .env                    # Environment variables (secret, not committed)
├── .gitignore             # Files and directories ignored by Git
├── README.md              # Main project documentation
├── DOCUMENTATION.md       # This file
├── package.json           # Node.js dependencies and scripts
│
├── assets/
│   ├── images/            # Image assets
│   └── icons/             # Icon assets
│
├── css/
│   └── style.css          # Main stylesheet
│
├── js/
│   ├── script.js          # Main JavaScript file
│   ├── config.js          # Configuration settings
│   └── resources-fetcher.js # Dynamic resources functionality
│
├── resources/
│   └── mental-health-resources.html # Mental health resources page
│
├── index.html             # Main landing page
├── about.html             # About Us page
├── rabbit-therapy.html    # Rabbit Therapy page
├── vision.html            # Vision & Objectives page
├── programs.html          # Programs page
└── join-us.html           # Join Us page
```

## Important Files

### `.env`
Contains sensitive information like API keys. This file is excluded from Git via `.gitignore`.

### `.gitignore`
Specifies files and directories that Git should ignore, including:
- `node_modules/`
- `.env`
- Log files
- OS-generated files
- Editor configuration files

### `package.json`
Defines the project's metadata and dependencies. Includes:
- Project name and version
- Scripts for development and deployment
- Dependencies like `serve` for local development

## Security Considerations

1. The `.env` file contains the Firecrawl API key and is excluded from Git commits
2. API keys should never be hardcoded in frontend JavaScript files in production
3. Backend services should handle API communication to protect keys

## Deployment Notes

1. Before deploying, ensure all dependencies are installed with `npm install`
2. The project is built for static hosting - no server-side processing required
3. For production, consider using a CDN for static assets
4. Remember to set up proper environment variables on your hosting platform

## Development Workflow

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with your API keys
4. Run `npm start` to launch the development server
5. Make changes to the files as needed
6. Commit changes excluding sensitive files (thanks to `.gitignore`)