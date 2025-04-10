require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
  console.log(`✅ Bot está online como ${client.user.tag}`);
});

client.on('interactionCreate', interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'armas') {
    const embeds = require('./embeds.json').embeds;
    embeds.forEach(embed => {
      interaction.channel.send({ embeds: [embed] });
    });
    interaction.reply({ content: 'Lista de armas enviada!', ephemeral: true });
  }
});

client.login(process.env.DISCORD_TOKEN);
