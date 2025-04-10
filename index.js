const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Bot está online como ${client.user.tag}`);
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

client.login(config.token);