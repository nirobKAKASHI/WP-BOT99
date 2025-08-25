
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkYzRU9ycHVyQko5K0RweHJ3QkliR01YNG5tTUluaEp3cnFXSFRZRjZFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dDRmdRNCtGL0dqTHk3M1g0b05QMjF0OU5HTE03M2d4TWIrZkw4UHBRcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwR3h3M2o0SHlQRjBTRzJUcGRPVEY0MyszWU5SZ0VvcHhRLzdVaWhiQlhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoNitFNHYwY0tJVWtoK1VxOU9JQ1JGSXR5OHRGNmJQdEMzelFXWk14OGgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJM0RGYWZXTWtpT1RTRlBjWFA3OVRCSzNtUnYwR0ZPVTQzMkJGR0VEbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIzaWpuS1dWWW85QVJRa1JNcXByU2FNRlBxejFHVXpvYUcvamhKTjVjREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBDNFB3RjM1cmwvdjg5NklUNW02c1A0NUNrT01BY05oUkZLaVZXOEozRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVm1wMDBtUS9sYTcyeTJFSzM4cWt6SUVOc0UxSTlmc3dJOSs4QlBWelRqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIxYzUyTmljRy9zZnRoUEp6WFBsVDFTK0JvTmRoNXpEbGQ3Zmp0dFhDRDE4NHcxK1UxQzczdjdETTNKRllzUm9NeVdWbHd0anZRNXd6SFpDOTJIWUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJ1S1h3OE5qOUpTQ1ZVd3RVNjhUMWJ1Z24vZ09xSEMrb204dUJZRTNUZXVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNjI5NzY3MDUwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QjIzRUUxQzZBRTM5NjQ5MzEwNDZDRkM1OUM1ODQ0NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDY0NzcyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTYyOTc2NzA1MDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTZFMUE3NkUxNzcyQkZBNzU4RjA3ODI1OEFFMkFBMDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjA2NDc3Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNUI4TjJBUVkiLCJtZSI6eyJpZCI6IjkxNjI5NzY3MDUwODo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE0MjQyNDU1ODkyMDI1OjRAbGlkIiwibmFtZSI6IvCfmIjwnZGo8J2RsvCdkajwnZG68J2RryDwnZGy8J2Rr/CdkajwnZG14pig77iPIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZVB3cTBCRVBYWHJjVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkeDBiTGw3RGY0cDU4YXpFSU9TZFVrLzgrN1RPc0t5Z2gxbWdMaGxKM3cwPSIsImFjY291bnRTaWduYXR1cmUiOiJUWlR1bjF4bUsyRUlxUzkyMFM3eXo3NnZsRmZ5OG1Sa2NMU0dFUUlmbG12VXY5Yk1YazEvYW5Oei9najRIMHhtNlc0ODdoRHN0ZzdhT0tOOUY5SVhCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL3MrUldUb29yaW4xZUdkTCt3cnZ2OFNST1RmOVcxV3B5ZU54eGUzdUVuSlBodWVlZWpFdm9nc0hlL2lPZndOTFQwRUIzRzRKYkhBT2d2aHMwVkxHQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTYyOTc2NzA1MDg6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYY2RHeTVldzMrS2VmR3N4Q0RrblZKUC9QdTB6ckNzb0lkWm9DNFpTZDhOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwNjQ3NzAsImxhc3RQcm9wSGFzaCI6IjNmWXdDSyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEZnIn0=",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LUCKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "916297670508",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "AKASH KHAN",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
