// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

const fs = require('fs')

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Service name goes here',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'false',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true',

  googleApiCreds: {
	  "type": process.env.GOOGLE_API_TYPE,
	  "project_id": process.env.GOOGLE_API_PROJECT_ID,
	  "private_key_id": process.env.GOOGLE_API_PRIVATE_KEY_ID,
    "private_key": fs.readFileSync(process.env.GOOGLE_API_PRIVATE_KEY_PATH, 'utf8'),
	  "client_email": process.env.GOOGLE_API_CLIENT_EMAIL,
	  "client_id": process.env.GOOGLE_API_CLIENT_ID,
	  "auth_uri": process.env.GOOGLE_API_AUTH_URI,
	  "token_uri": process.env.GOOGLE_API_TOKEN_URI,
	  "auth_provider_x509_cert_url": process.env.GOOGLE_API_AUTH_PROVIDER_CERT_URL,
	  "client_x509_cert_url": process.env.GOOGLE_API_CLIENT_CERT_URL
	}

}
