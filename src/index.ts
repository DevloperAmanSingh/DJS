import { Client, Guild } from "discord.js";
import { commands } from "./commands";
import { deployCommands } from "./deploy-commands";
import { config } from "./config";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.on("ready", async () => {
  try {
    await deployCommands();
    console.log("Discord bot is ready! 🤖 Commands deployed successfully.");
  } catch (error) {
    console.error("Error deploying commands:", error);
  }
});

client.on("guildCreate", async (guild) => {
  await deployCommands();
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.login(config.DISCORD_TOKEN);
