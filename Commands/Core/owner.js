module.exports = {

    name: "owner",

    alias: ["malik","mod","mostlist"],

    desc: "Owner of the bot.",

    react: "💝",

    category: "Core",

    start: async(Miku, m,{pushName,prefix}) => {

        const pad = (s) => (s < 10 ? "0" : "") + s;

        const formatTime = (seconds) => {

        const hours = Math.floor(seconds / (60 * 60));

        const minutes = Math.floor((seconds % (60 * 60)) / 60);

        const secs = Math.floor(seconds % 60);

        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;

        };

        const uptime = () => formatTime(process.uptime());

        await Miku.sendMessage(m.from,{image:{url:botImage1},caption:`\nKonichiwa *${pushName}* senpai, I am *${botName}* and my owner is *${malik}* and their Number is wa.me/${maliknumber}\n`},{quoted:m})

    }

}
