const Discord = require("discord.js")

module.exports = {
    name: "ping",
    author: "Shanks",

    run: async(client, message, args) => {

        let cor_da_embed = "GREEN";

        let ping_do_bot = client.ws.ping;

        let embed_1 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**\`🏓\` Calculando ping.**`);
        
        let embed_2 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**O meu ping está em \`${ping_do_bot} ms\`.**`);

        let cmd = await message.reply({ content: `${message.author}`, embeds: [embed_1] }).then(msg => {
            setTimeout( () => {
                msg.edit({ content: `${message.author}`, embeds: [embed_2] })
            }, 2000)
        })
    }
}