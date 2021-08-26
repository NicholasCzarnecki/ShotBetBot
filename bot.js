require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log(`${client.user.tag} is ready to go!`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "!bet") {
    msg.reply("Place your bet you degenerate...");
  }
});

client.login(process.env.TOKEN);
