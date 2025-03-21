Overview
This project is a React Single Page Application (SPA) that integrates Auth0 for authentication. It includes:

✅ User Login & Logout using Auth0 authentication.
✅ User Profile Display after successful login.
✅ Secure authentication using OAuth 2.0 and OIDC.
✅ Customizable UI with Login & Logout buttons.

This guide provides the steps to clone, set up, and deploy the project from a GitHub repository.

🚀 Deployment Steps

1️⃣ Clone the Repository
Use the following command to clone the GitHub repository:
git clone https://github.com/YOUR_GITHUB_USERNAME/cruise0-auth0.git
cd cruise0-auth0

2️⃣ Install Dependencies
Make sure you have Node.js (v16 or later) installed. Then run:
npm install

3️⃣ Configure Auth0
Go to Auth0 Dashboard.
Create a new application → Select Single Page Application (SPA).
Copy your Auth0 credentials (Domain & Client ID).
Create a .env file in the root of the project and add:
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id

4️⃣ Start the Development Server
Run the following command to start the React app locally:
npm start

Then, open http://localhost:3000 in your browser.

5️⃣ Deploy to GitHub Pages (Optional)
To deploy the project to GitHub Pages, run:
npm run build
Then push to GitHub and configure GitHub Pages in the repository settings.

🛠️ Features
Secure Authentication with Auth0
Login & Logout Handling
User Profile Display (Name, Email, Picture)
OAuth 2.0 & OIDC Compliant
