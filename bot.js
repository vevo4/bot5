const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522782809530695694")
setInterval(function() {
channel.send(`Hello Hello Hello Hello Hello Hello`);
}, 30)
})

client.login(process.env.BOT_TOKEN);