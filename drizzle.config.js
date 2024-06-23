/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://intellidb_owner:vrXzdTGs19Ey@ep-lively-unit-a5l6vjoj.us-east-2.aws.neon.tech/intellidb?sslmode=require",
  },
};
