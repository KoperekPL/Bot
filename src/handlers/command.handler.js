const { Collection } = require("discord.js")

const { readdirSync } = require("fs")

const { RichEmbed } = require("discord.js")

const { prefix } = require(__dirname + "./../config/config.js")

const ascii = require("ascii-table")

const table = new ascii().setHeading("Command", "Load status")

module.exports = (client) => {
    //commands
    client.commands = new Collection()

    const commandFiles = readdirSync(__dirname + "/../commands").filter(file => 
        file.endsWith(".command.js")
    )

    for(const file of commandFiles){
        const command = require(__dirname + `/../commands/${file}`)

        if(command.name){
            client.commands.set(command.name, command)
            table.addRow(file, "✅ ok")
        }else{
            table.addRow(file, "❌ :(  -> error name")
            continue
        }
    }

    console.log(table.toString())

    client.on("message", msg => {
        //log(msg.content, msg.author.tag)  //debug
      
        const { author, guild, channel } = msg
      
        if(author.bot || !guild) return
  
      
       // if(msg.content.indexOf(prefix) !== 0) return
        if(!msg.content.startsWith(prefix)) return
      
        const args = msg.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g)
      
        //log(args, msg.author.tag) //debug
      
        const cmd = args.shift().toLowerCase()
        
        //log(cmd, msg.author.tag) //debug

      if(!client.commands.has(cmd))return

      try {
        client.commands.get(cmd).run(msg, args)
      }catch(error){
        console.log(error)
        msg.reply("Command error. Please check the correctness of the entry or contact with Pjoter!!")
      }
    })
}