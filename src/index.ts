import {Client} from "pg";
const pgClient = new Client("postgresql://neondb_owner:npg_st0NOne4zXIb@ep-delicate-night-a8qwwe0h-pooler.eastus2.azure.neon.tech/neondb?sslmode=require")

async function main(){
     await pgClient.connect();
     const response = await pgClient.query("UPDATE users SET username='kingo' WHERE id=2");
     console.log(response.rows)
}
main()