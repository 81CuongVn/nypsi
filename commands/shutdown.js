const { Message } = require("discord.js")
const { Command, categories } = require("../utils/classes/Command")
const { ErrorEmbed, CustomEmbed } = require("../utils/classes/EmbedBuilders.js")
const { startRestart } = require("../utils/commandhandler")
const { vacuum } = require("../utils/database/database")
const { logger } = require("../utils/logger")

const cmd = new Command("shutdown", "shutdown bot", categories.NONE).setPermissions(["bot owner"])

let confirm = false

/**
 * @param {Message} message
 * @param {Array<String>} args
 */
async function run(message, args) {
    if (message.member.user.id != "672793821850894347") return

    if (confirm == false) {
        confirm = true
        setTimeout(() => {
            confirm = false
        }, 120000)
        return message.channel.send({
            embeds: [new CustomEmbed(message.member, false, "run command again to confirm")],
        })
    } else {
        startRestart()

        logger.info("nypsi shutting down soon...")

        setTimeout(() => {
            logger.info("vacuuming database...")
            vacuum()
            logger.info("vacuum finished")

            logger.info("nypsi shutting down in 10 seconds...")

            setTimeout(() => {
                logger.info("nypsi shutting down...")
                process.exit()
            }, 10000)
        }, 20000)

        return message.channel.send({
            embeds: [new CustomEmbed(message.member, false, "✅ bot will shut down soon")],
        })
    }
}

cmd.setRun(run)

module.exports = cmd
