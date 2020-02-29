/*jshint esversion: 8 */
const { RichEmbed } = require("discord.js");
const { getMember } = require("../utils");

module.exports = {
    name: "avatar",
    description: "get a person's avatar",
    category: "info",
    run: async (message, args) => {

        if (!message.guild.me.hasPermission("EMBED_LINKS")) {
            return message.channel.send("❌ \ni am lacking permission: 'EMBED_LINKS'");
        }

        let member;

        if (args.length == 0) {
            member = message.member;
        } else {
            if (!message.mentions.members.first()) {
                member = getMember(message, args[0]);
            } else {
                member = message.mentions.members.first();
            }
        }

        if (!member) {
            return message.channel.send("❌ \ninvalid user");
        }

        let color;

        if (member.displayHexColor == "#000000") {
            color = "#FC4040";
        } else {
            color = member.displayHexColor;
        }

        const embed = new RichEmbed()
            .setTitle(member.user.tag)
            .setColor(color)
            .setImage(member.user.avatarURL)

            .setFooter(message.member.user.tag + " | bot.tekoh.wtf", message.member.user.avatarURL)
            .setTimestamp();

        message.channel.send(embed).catch(() => {
            return message.channel.send("❌ \ni may be lacking permission: 'EMBED_LINKS'");
        });

    }
};