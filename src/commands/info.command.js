const { RichEmbed } = require("discord.js")

module.exports = {
    name: "info",
    description: "info",

    run(msg, args){
      
          const { channel } = msg
          const botName = "Pjoterowy Bot"
          const botAuthor = "Towarzysz Pjoter"
          const botVersion = "v1.0"
          const botDescription = "Bot co robi wszystko!!!!!!!"
          const botCommand = "(+) info, debug"
         // channel.send(`Autor: **${botAuthor}**! Wersja: *${botVersion}*`) //debug
      
          const embed = new RichEmbed()
            // Set the title of the field
            .setTitle(botName)
            // Set the color of the embed
            .setColor(0xff0000)
            // Set the main content of the embed
            .setDescription(botDescription)
            .addField("Autor: ", botAuthor, true)
            .addField("Wersja: ", botVersion, true)
            .addField("Lista komend:", botCommand)
          
          channel.send(embed)
          //msg.delete() //delete msg
    },
}