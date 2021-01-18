const { RichEmbed } = require("discord.js")

module.exports = {
    name: "kick",
    description: "kick player",

    run(msg, args){

          msg.reply("kick")
          msg.reply(args)
          msg.delete() //delete msg
    },
}