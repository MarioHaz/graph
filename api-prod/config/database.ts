import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Helper function to safely get environment variables
const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
};

export const sequelize = new Sequelize(
  getEnvVar("DB_NAME"),
  getEnvVar("DB_USER"),
  getEnvVar("DB_PASSWORD"),
  {
    host: getEnvVar("DB_HOST", "localhost"),
    dialect: "mysql",
    port: parseInt(getEnvVar("DB_PORT", "3306"), 10),
    logging: false, // Set to true if you want to see SQL logs
  }
);
