'use strict';

const commands = new discord.command.CommandGroup({
    defaultPrefix: "!",
    mentionPrefix: true,
});

commands.raw("test", async (message) => {
    message.reply("ok !");
});
