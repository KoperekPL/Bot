const { RichEmbed } = require("discord.js")

module.exports = {
    name: "debug",
    description: "debug command",

    run(msg, args){

        channel.send(`Debug kurcz`)

        const { channel } = msg
        
        const embed = new RichEmbed()
          // Set the title of the field
          .setTitle("debug Title")
          // Set the color of the embed
          .setColor(0xff0000)
          // Set the main content of the embed
          .setDescription("debug Description")
          .addField("debug Field 1", "debug")
          .addField("debug Field 2", "debug")
          .addField("debug Field 3", "debug")
        
        channel.send(embed)
    },
}