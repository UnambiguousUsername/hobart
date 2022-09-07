import Discord from "discord.js";

// Discord token is required.
if (!process.env.DISCORD_TOKEN) {
    throw new Error("DISCORD_TOKEN environment variable missing.");
}

const onReady = () => {
    // TODO: Implement this
};
const onMessage = (message: Discord.Message) => { 
    // TODO: Implement this
};

const client = new Discord.Client();

client.on('ready', onReady);
client.on('message', onMessage);

const discordToken: string = process.env.DISCORD_TOKEN;

client.login(discordToken);
