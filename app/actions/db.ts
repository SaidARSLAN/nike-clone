import { Pool } from "pg";

export const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_jk5QCvwsaN4G@ep-holy-pond-a8ocv5rp-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});
