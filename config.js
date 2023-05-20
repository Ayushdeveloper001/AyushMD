
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "16468338933";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb://ufpfarruhxiudpomfbhu:hQpYebkyQhhsh69ATAO@bk8nauglbb2fzzk06rup-mongodb.services.clever-cloud.com:2597/bk8nauglbb2fzzk06rup";
global.sessionId = process.env.SESSION_ID || "session isop";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Atlas MD`;
global.author = process.env.AUTHOR || "by: Team Atlas";
global.port = process.env.PORT || "8000";
global.malik = process.env.MALIK || "Ayush";
global.maliknumber = process.env.MALIKNUMBER || "16468338933";


module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

