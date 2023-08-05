module.exports = {
    mongoURI: process.env.MONGO_URI,
    isProductino: process.env.NODE_ENV === 'production'
  }