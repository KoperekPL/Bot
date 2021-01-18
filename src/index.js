const { token, prefix } = require("./config/config.js")

const chalk = require("chalk")

const { Client, RichEmbed } = require("discord.js")
const client = new Client()

const commandHandler = require("./handlers/command.handler")

const log = console.log

//initialize command handler
commandHandler(client)

client.on("ready", () => {
  log(chalk.red("Autorski bot Pjotera"))
  log(chalk.blue(`Zalogowano jako:  ${client.user.tag}.`))
})

client.login(token)

//error handler
client.on("debug", msg => {})
client.on("warn", msg => {})
client.on("error", msg => {})