const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923340042025" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923340042025";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true,923340042025";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_24_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAzNixcbiAgICAgICAgODEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgMTAxLFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNixcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUElBVEpPRzdXVkJPbkFhNG13TzJEeS9zblkvR1VnemVXNW5McXF1SjMrRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmI5QXdleDZRM0tlUmw4Ykg5d2U0d1wiLFxuICBcInBob25lSWRcIjogXCI2MTFiMzVmNy03MDFjLTQ2NzMtYTFmOS01ZDUxYTE4MWZlYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAyNCxcbiAgICAgIDI0OSxcbiAgICAgIDE5MSxcbiAgICAgIDE1LFxuICAgICAgMjA0LFxuICAgICAgMTY2LFxuICAgICAgMTUxLFxuICAgICAgMTQsXG4gICAgICAxNjAsXG4gICAgICA2MixcbiAgICAgIDE1MCxcbiAgICAgIDEwNCxcbiAgICAgIDcxLFxuICAgICAgNCxcbiAgICAgIDE0LFxuICAgICAgNTUsXG4gICAgICAyMDQsXG4gICAgICAyMTcsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICA3LFxuICAgICAgMTQwLFxuICAgICAgNjIsXG4gICAgICAyMDIsXG4gICAgICAyMTEsXG4gICAgICAxODUsXG4gICAgICAxMzksXG4gICAgICAxNjQsXG4gICAgICAyNTEsXG4gICAgICAxNyxcbiAgICAgIDExNixcbiAgICAgIDE1MCxcbiAgICAgIDIxNCxcbiAgICAgIDksXG4gICAgICAyMixcbiAgICAgIDIxOCxcbiAgICAgIDI0OCxcbiAgICAgIDI5LFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzVUUDNYR1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0MDA0MjAyNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDcyNTAxNjUyNzY5MjU6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRDB2OVFCRU9LcHRyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkI4NGFCU3lNMmdmSzQ5eWZDWmhWRDloZmNwd2szYzdoUlMyV3JZazMvVWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWXZTNHBsckdiOXR6M2xoRFFiYzA1Y3p6MTFvYmI4TnRCNUFrc2NiZDdXbEs0OTFzbGg3LzZQOXh4Q1hOVzE4RFBCdlA5a3ZVOEhyQTZjcmUrQnZBRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDhGZEp0bTBvWlRsRDg3bkdWNUUrTHlpUHUrZ0JrWkxwYUtUdTl6Y1U5dDh2d3M4NkZCb25ERUNvK0V2Tk9FK0RHY0hDeWtRZkcxZmQ1TVdHb0RvaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQwMDQyMDI1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NTE4Nzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Sabir²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • Sabir ᴛᴇᴄʜ』*\n youtube.com/@littlegaming302"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sabir-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sabir Fareed",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
