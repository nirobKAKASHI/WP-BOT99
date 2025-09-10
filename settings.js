
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"sImcWff+rnLRyQskC9f48QDWbwRoay0PXASlGtXiuHk="},"public":{"type":"Buffer","data":"YqrnbSjMzzkxnr8RAdkeqiJt2cBZw1JpJe5zc+oUnwE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"6IpndKrrSGs5h47K3nQKKNal/Kt+y+duQe5/sCB+AX8="},"public":{"type":"Buffer","data":"WZrGbyAVJi4aMnXWe+mc9I0ASzpLYYNmxQlPSJsCQxc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WLifwKTPhAVgIXA169z6SOSDO99kqS3hhj/ARPHlMWA="},"public":{"type":"Buffer","data":"WjnGQZtrWmp3Ostfu4pM3noSIHJgaF142MlFEL4F+HI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"gKQxlpphr4Cpu/iSonf52NRgc7gSw27NB4XTqJEfu3o="},"public":{"type":"Buffer","data":"r0IFflw06qXPyw7WvGW3HrUY56XOORLlkhioekJlhTw="}},"signature":{"type":"Buffer","data":"KC/Ml+Unym3MGpplskz/V+EY/1Ihw+RRleD7i9FCaHpV5OumstgRx/UIlpwrlA5zWEPxchUk/94VBCJALAXHAA=="},"keyId":1},"registrationId":235,"advSecretKey":"YbA5JrUPg2ZlPQ/DBs+212XtL1I8zpwL4GwacmX8wOw=","processedHistoryMessages":[{"key":{"remoteJid":"8801744244119@s.whatsapp.net","fromMe":true,"id":"B6A4D3CD5B4B56A1A77AC971119165B4"},"messageTimestamp":1757523812},{"key":{"remoteJid":"8801744244119@s.whatsapp.net","fromMe":true,"id":"A8296B70BB16D2D0417B30E4473EA019"},"messageTimestamp":1757523812},{"key":{"remoteJid":"8801744244119@s.whatsapp.net","fromMe":true,"id":"85D7795FF19548B5C1ECBE9188A9FF47"},"messageTimestamp":1757523816}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"wrP2vL69SZWMwrO_Gk5ToA","phoneId":"3b14897b-6714-4723-a79d-cbf296f374d6","identityId":{"type":"Buffer","data":"uCCA8uv2/vemoTYjO7sE4pP2xVI="},"registered":true,"backupToken":{"type":"Buffer","data":"J9adpJJa0jwQJFAOM4Bs9+JByL4="},"registration":{},"pairingCode":"DRAY1922","me":{"id":"8801744244119:3@s.whatsapp.net","lid":"43882318397693:3@lid","name":"「 𝐍𝐈𝐑𝐎𝐁 」(∩˃o˂∩)♡"},"account":{"details":"CM3i1ukCEN7ehsYGGAIgACgA","accountSignatureKey":"KEXuptTnZKDpEVEx4exANMBOmZnK1ykbwuP9AlpBWFo=","accountSignature":"203YBblXSgPqJZro5I4lOTv03cl7U+69ToEQbILZg/ZH06yRi6eu90igf1YfCGu70pfYxef7zMUmAs8aCdX3Bw==","deviceSignature":"BttHns9Oiv+A/a+ndkUChGcNSwUWEN2V5iJ7dyrpd9au5y+/m8PNvwwd7srtLqc2UO3aPNVDmL6D/Lsq26AIDw=="},"signalIdentities":[{"identifier":{"name":"8801744244119:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BShF7qbU52Sg6RFRMeHsQDTATpmZytcpG8Lj/QJaQVha"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CBIICA=="},"lastAccountSyncTimestamp":1757523811,"myAppStateKeyId":"AAAAAIj9"}",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || "/",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "「 𝐍𝐈𝐑𝐎𝐁 」(∩˃o˂∩)♡",
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

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/46u6l1.jpeg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/j3haw4.jpeg",
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

          OWNER_NUMBER: process.env.OWNER_NUMBER || "8801772594397",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "ＮＩＲＯＢ ᶻ 𝗓 𐰁",
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
