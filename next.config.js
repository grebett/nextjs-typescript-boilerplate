require('dotenv').config();

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: false,
  },
  env: {
    GOOGLE_RECAPTCHA_EMAIL: process.env.GOOGLE_RECAPTCHA_EMAIL,
    GOOGLE_RECAPTCHA_PRIVATE_KEY: process.env.GOOGLE_RECAPTCHA_PRIVATE_KEY,
    GOOGLE_RECAPTCHA_PROJECT_ID: process.env.GOOGLE_RECAPTCHA_PROJECT_ID,
    GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
    MAILJET_CONTACTLIST_ID: process.env.MAILJET_CONTACTLIST_ID,
    MAILJET_API_KEY_PUBLIC: process.env.MAILJET_API_KEY_PUBLIC,
    MAILJET_API_KEY_PRIVATE: process.env.MAILJET_API_KEY_PRIVATE,
  },
};
