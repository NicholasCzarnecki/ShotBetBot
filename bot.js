require("dotenv").config();
const { Client, Intents, User } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log(`${client.user.tag} is ready to go!`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "!bet") {
    msg.reply("Place your bet you degenerate...").then(() => {
      const filter = (m) => msg.author.id === m.author.id;
      if (msg.author.id != client.user.id) {
        const collector = msg.channel.createMessageCollector({
          filter,
          max: 1,
        });

        collector.on("collect", (m) => {
          const shotBetChannel = client.channels.cache.find(
            (channel) => channel.id === "771466181554733097"
          );
          // console.log(`Collected ${m.content}`);
          shotBetChannel.send(`${m.content}`);
          // msg.channel.send(`Collected ${m.content}`);
        });

        // collector.on("end", (collected) => {
        //   console.log(`Collected ${collected.size} items`);
        //   msg.channel.send(`Collected ${collected.size} items`);
        // });
      }
    });
  }
});

client.login(process.env.TOKEN);
