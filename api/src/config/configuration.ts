export default () => ({
  app: {
    port: Number(process.env.PORT) || 3000,
  },

  database: {
    url: process.env.DATABASE_URL,
  },

  cors: {
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:4200',
  },
});