# DiscordBot

Pjoterowy bot

## Table of contents

- Najlepszy Bot jaki isnieje
- Potrafi zrobić wszystko co chcesz

   if (cmd === "debug") {
          channel.send(`Debug kurcz`)
      
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
        }
      
        if(cmd === "info"){
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
        }

        if(cmd === "kick"){
          msg.reply("kick")
          msg.reply(args)
          msg.delete() //delete msg
        }
