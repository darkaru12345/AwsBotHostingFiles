const Discord = require('discord.js');

module.exports = (client, message, args) => { 
  message.channel.send("Pong!"); 
}
//Esta función recibe el parametro client, message, y args para ser usados: