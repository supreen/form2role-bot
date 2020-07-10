


//basic constants and functions
var checked;
var checking = [];
const Discord = require("discord.js");
const {usernameorid, token,usernamesp, roles, apiKey, spreadsheetId, range, unremoveableroles, refreshrate} = require("./config/discord.json");
const { google } = require("googleapis");

  const connection = google.sheets({
  version: "v4",
  auth: apiKey
});


const client = new Discord.Client();

let oldRows = [];


//checking for errors
const logError = error => {
  console.error("error log " + new Date());
  console.error(error);
};

//the spreadsheet fetching
const fetchRows = async (spreadsheetId, range, sheetsConnection) => {
  try {
    const response = await sheetsConnection.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range
    });
    //fetching all data
    const rows = response.data.values;


    
    
    
    
    
    
    //dividing the data between different array using while loop
    var i = 0;
    var k=0;
   
    
    
    while (i < rows.length) {
 
   
      const checkrow="";
      
   
      
      
      const rows123= rows[i]
 
      
      
   
        
//finally putting all roles together

      
      
const therolenames = rows123[1]+","+rows123[2]+","+rows123[3]+","+rows123[4];

    
      assignRoles(rows123[0].trim(), therolenames.trim());
  


         rows123[0]==null;
   rows123[1]==null;
   rows123[2]==null;
   rows123[3]==null;
   rows123[4]==null;   rows123[1]==null;
   roles[1]==null;
   roles[2]==null;
   roles[3]==null;
   roles[4]==null;
   
      
    therolenames==null;
   roles.length=0;   
rows123.length=0;
i++;
k++;
       
      }
   
    return rows;
  } catch (error) {
    logError(error);
  }
};

const assignRoles = async (usernames, roleNames) => {

   var rolenames1 = roleNames.split(",");

  try {
    const guildMembers = client.guilds.array()[0].members.array();
 
    //number of all members in the group
 
    
    const guildRoles = client.guilds.array()[0].roles.array();
    // deleting unremovable roles from the list
  const Roles2 = guildRoles.filter(Role => !unremoveableroles.includes(Role.name));
    // * getting Role instances of role names
    const removedRoles = guildRoles.filter(Role => unremoveableroles.includes(Role.name));
    const Roles = guildRoles.filter(Role => roleNames.includes(Role.name));
   //role number of all members in the group
   

    roleNames.length=0;
    // * getting GuildMember instances of usernames and setting roles
    guildMembers.forEach(async member => {
     
      const  username= member.user.username + "#" + member.user.discriminator;
    
 
  //check if the first column of spreadsheet matches the userid/username of discord

var UNcheck;
      
      if (usernameorid=="UN"){
  
   UNcheck=username
  
  }else{
    
  UNcheck=member.id
    
    
  }

  
  if (usernames.includes(UNcheck))  {
        
        const notAssignedRoles = [];
        
       
      
        
        
        
        
        Roles.forEach(role => {
       
         //if (!member.roles.array().includes(Roles)) {
         //if (!guildRoles.includes(Roles)) {
          
          
      
      checked="no"
          
           
                  //Check whether the roles (discord) are in roles (spreadsheet)
          
          
        
              if (Roles.includes(member.roles.array()[1])|| removedRoles.includes(member.roles.array()[1])|| member.roles.array()[1]==null){
             
              }else{checked="yes" }    
                if (Roles.includes(member.roles.array()[2]) || removedRoles.includes(member.roles.array()[2]) || member.roles.array()[2]==null){
              
               }else{checked="yes"; }    
                    if (Roles.includes(member.roles.array()[3]) || removedRoles.includes(member.roles.array()[3])|| member.roles.array()[3]==null){
                  
                 }else{checked="yes"; }    
                   if (Roles.includes(member.roles.array()[4])|| removedRoles.includes(member.roles.array()[4]) || member.roles.array()[4]==null){
           
                   }else{checked="yes"; }    
          
                    
                           //Check whether the roles (Spreadsheet) are in roles (Discord)
           
                    
              if (member.roles.array().includes(Roles[0])|| removedRoles.includes(Roles[0]) || Roles[0]==null){
              
              }else{checked="yes"; }    
               if (member.roles.array().includes(Roles[1]) || removedRoles.includes(Roles[1])|| Roles[1]==null){
          
             
                  }else{checked="yes"; }    
                        if (member.roles.array().includes(Roles[2]) || removedRoles.includes(Roles[2]) || Roles[2]==null){
            
                      }else{checked="yes"; }    
                             if (member.roles.array().includes(Roles[3])|| removedRoles.includes(Roles[3]) || Roles[3]==null){
             
                          }else{checked="yes"; }    
             
     
          
                      if (checked=="yes"){ 
                        notAssignedRoles.push(role);
                      }

        });
        
        if (notAssignedRoles.length > 0) {
        
        
     
          
        
     
          
          await  member.removeRoles(Roles2); member.addRoles(Roles);
 
          
          
        
        
      
          console.log(
            "Assigned " +
              notAssignedRoles.map(role => role.name) +
              " to " +
              username +  " ["+member.id+"] on " + new Date().toString()
          );
        } else {
              
            if (Roles[0]==null && Roles[1]==null && Roles[2]==null && Roles[3]==null) {
             member.removeRoles(Roles2);
       console.log(username + " ["+member.id+"] has all roles removed on"+ new Date().toString());     
          }else{
          
          console.log(username + " ["+member.id+"] already has all the roles assigned, checked on "+ new Date().toString());
          }
          }
      }
    });
  } catch (err) {
    logError(err);
  }
};






const extractNewEntries = (oldRows, rows) => {
  let newRows = [];
  if (rows.length > oldRows.length) {
    newRows = rows.slice(oldRows.length);
   
  }
  newRows.forEach(row => {
    oldRows.push(row);
    
  });
  return newRows;
};

const extractDiscordIDs = rows => {
  return rows.map(user => user[0]);
  console.log(rows.map(user => user[0]));
};

client.once(
  "ready",
  () => {
    console.log("Bot started with these settings:");
    console.log("• Spreadsheet ID: ");
    console.log("• Range: " + range);
    console.log("• Roles: " + roles.join(", "));
    setInterval(async () => {
      console.log("\nChecked for new entries on " + new Date().toString());
      let rows;
      try {
        rows = await fetchRows(spreadsheetId, range, connection);

        const newEntries = extractNewEntries(oldRows, rows);
        if (newEntries.length > 0) {
          console.log(`Found ${newEntries.length} new entries`);
          const usernames = extractDiscordIDs(newEntries);
          
        } else {
          console.log("No new entries");
        }
      } catch (err) {
        if (rows === undefined) console.error("Google Sheet is empty");
        logError(err);
        rows = [];
      }
    }, refreshrate); // refresh rate: 60000 milliseconds == 1 minute
  },
  logError
);

client.on("error", logError);

const start = async () => {
  try {
    await client.login(token);
  } catch (err) {
    logError(err);
    setTimeout(start, 30000);
  }
};

start();

client.on("disconnect", start);

module.exports = {
  fetchRows,
  assignRoles,
  extractNewEntries,
  extractDiscordIDs
};



const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
