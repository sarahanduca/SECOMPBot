import Discord from "discord.js";
import cron from "cron";
import dotenv from "dotenv";

dotenv.config();

const client = new Discord.Client();

client.on("ready", () => {
  console.log("pato");
  const scheduleMsg17 = new cron.CronJob("30 17 * * *", () => {
    const channel = client.channels.cache.get("832025286336970807");

    channel.send("Boa tarde a todos, sim, são 17:30h acredita?");
  });

  const scheduleMsg18 = new cron.CronJob("0 18 * * *", () => {
    const channel = client.channels.cache.get("832025286336970807");

    channel.send("Boa noite a todos, sim, são 18h acredita?");
  });

  scheduleMsg17.start();
  scheduleMsg18.start();
});

client.login(process.env.TOKEN);
