
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xwUFA3T3BPSHpBckZMbHUvaU9BU1pWYUs3eHpQRXJwUFdJQmdSdVpYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlwclBicmNSejFPankyTXRWYlRNdXhmMWZ0aGNDVWo1Rkt4N3RRM1kwMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUGJ2SWkvaGdjL0F0TkJMQ1gzSzh4YVZWcE1Pa1BTUi9tOHFDaWdMdjFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSUlZKclZMN2x3b1d4ZWh1ai9iT2JzNVlhL0tLUXZkYVFsM2FyUy8xaDAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdIK0MycVU0RjlrL3BpYU9hVzhONEIwMHJ0R2d2Mis1SW5ZVUpvc3IvRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPUndaZjRZb2dlYnUzQ0NzdnBVNFpoWTNKSHYxemxhSmxpdkc5Q3gxa0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxNNENRMWltcmxueG5WNGVTellZRFd1anVQak5OeVlPVDRWRHQzRUsyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0twYXZYY1BzQjdRTjN5UUxJTi9VSDYvV2E0dThiSTBackJKUG8xQ21rcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik13NHc2Y29HdE1NYy9jSzl3b0NhREJtemZiUGdDbDBiOVZnNzBhRzJpeW9nS2Npb2NLNE9vOUc4Z2hNdHhWbmpycTF5SitPQ20zOXM0b0p1bWFZUGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJHbzBSaXpBdFdQMnR1ZVFyK0JSWHhnWGk2NXVzQk1TSFh2ZlJOUm1US21zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJINkk2MTVCUFFYYVN3cU1id3ZfYy13IiwicGhvbmVJZCI6ImM4NjQ4YjRkLTVhN2UtNGFjYS1hMDM2LTRlYzM2M2U0ZmNmYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaVEd3UGUzMlE5VGVqb09IYVVYNTN3a2ZCVTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHRtNXN4YlhIZEhIN2I1dmN0R01lK05HUjh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiIyMzQ5MTYyMzE1Mzc2OjU3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjE3OTMxMjU0Mzc0NDc3OjU3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmYwckxFRkVQM0Nyc1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTlBMcjZZeVlvSjczVG8yZi9TMlZXQUhvTGhKR284a0ROUTlmK3gvK0FuWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQVRWelRqRCt5d2hqUGpzSjZnS2dWUHZnUit1VnFJNjh1T205RWlKWHh5STBZT0lPa0ZDb2pkVlVvR0xmbHVMZTRvblpaT0JYU1dwNTdMWkp2SklkQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1BMTYyWmg1c3dTNTN1eklydVJqcGZCZnZrcHcxbFh1VEV3YUVTTzhCK3UwWEJtenV0RzVTU1pBdGpFNDVWdTAxeWozVy9yUy84cGNnbWdtQTRuWWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE2MjMxNTM3Njo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUVHk2K21NbUtDZTkwNk5uLzB0bFZnQjZDNFNScVBKQXpVUFgvc2YvZ0oyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwNzg0NzV9",
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

          OWNER_NUMBER: process.env.OWNER_NUMBER || "2349162315376",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "@dmin",
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
