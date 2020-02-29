const { RichEmbed } = require("discord.js")
const { getBalance, createUser, userExists, updateBalance } = require("../utils.js")

module.exports = {
    name: "balance",
    description: "check your balance",
    category: "money",
    run: async (message, args) => {
        
        if (!userExists(message.member)) {
            createUser(message.member)
        }

        if (message.member.user.id == "672793821850894347" && args.length == 2) {
            const target = message.mentions.members.first();

            if (!target) {
                return message.channel.send("❌\ninvalid user - you must tag the user for this command");
            }

            if (isNaN(args[1]) || parseInt(args[1]) < 0) return
    
            let amount = (parseInt(args[1]));

            updateBalance(target, amount)

            return message.react("✅")
        }

        let color;

        if (message.member.displayHexColor == "#000000") {
            color = "#FC4040";
        } else {
            color = message.member.displayHexColor;
        }

        const embed = new RichEmbed()
            .setColor(color)
            .setTitle(message.member.user.tag)
            .setDescription("**balance** $" + getBalance(message.member))

            .setFooter(message.member.user.tag + " | bot.tekoh.wtf", message.member.user.avatarURL)
            .setTimestamp();

        message.channel.send(embed).catch(() => {
            return message.channel.send("❌ \ni may be lacking permission: 'EMBED_LINKS'");
        });

    }
}