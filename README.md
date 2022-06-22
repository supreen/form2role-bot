Form2Role-Bot:
<h2>About</h2> 
<p>This is the simplified version of <a href="https://github.com/talios0" target="_blank">talios0's</a> and <a href="https://github.com/The24thDS" target="_blank">The24thDS's </a> bot. The bot assigns the roles (according to the 2nd,3rd,4th and 5th column of the spreadsheet) to the usernames found in a 1st column of Google Sheet. Made possible by the amazing Discord.js library.
Please note that the bot start detecting the data from 2nd row of spreadsheet. </p>
<h2>Motivation</h2>
<p>Did you ever want to add some kind of authentication to your Discord server? Maybe you want only people with a certain email domain to have access to some channels. Use a form to collect the required data and then set up this bot to automatically assign roles to everyone found in the Google Sheet.</p>

<h2>Required fields</h2>
<p>The only field that you must have in your Google Form and Google Sheet is the DiscordID. Your DiscordID it's made up of your username and the discriminator, and it looks like this: SomeSexyUsername#4565. The bot needs it to identify users and assign roles to them.</p>

<h2>How to get your Google details<h2>
        <h3>API key</h3>
        <ul>
<li>Go to https://console.developers.google.com</li>
<li>Login and Agree to the Terms of Service</li>
<li>Create a Project by pressing "Create Project" on the right-hand side</li>
<li>Click "Create", give the project a name and then "Create" again.</li>
<li>Once the dashboard loads, click on "ENABLE APIS AND SERVICES" in blue text.</li>
<li>Search for "Sheets" and click on "Google Sheets API" and then "ENABLE"</li>
<li>Click on "Credentials" on the left side of the page.</li>
<li>Select "Create credentials" and then "API Key"</li>
        </ul>
        <h2>Spreadsheet ID</h2>
<ul>
<li>Go to your Google Sheets document and make sure it is accessible to anyone with the link, view-only.</li>
<li>The id is the part from your URL that comes after /d/. If the url is https://docs.google.com/spreadsheets/d/hjgt6sdBhbHdDssfjGk/edit?usp=sharing, your id is hjgt6sdBhbHdDssfjGk</li>
</ul>
        <h2>Range</h2>
        
<p>If the column that contains the Discord IDs is B and the IDs start from row 2 then the range value (don't touch it, if you don't know what you are doing)</p>
<h2>How to setup a Discord bot</h2>
<p>You will need a bot token, to generate one follow these steps:</p>

<ul>
<li>Go to https://discordapp.com/developers and login</li>
<li>Create an application and give it a name and a description</li>
<li>Select "Save Changes" at the bottom right and then navigate to the "Bot" section on the left-hand side.</li>
<li>There, create a bot user by clicking on "Add Bot". After confirming, reveal the token.</li>
</ul>
<h3>Invite the bot to your discord server:</h3>
<ul>
<li>Go to OAuth2 section of your developer application</li>
<li>Under SCOPES check bot</li>
<li>Under BOT PERMISSIONS check Manage Roles</li>
<li>Now go to the url generated in the SCOPES section and invite the bot to your server</li>
<li>Make sure the bot role is above the roles it has to assign</li>
</ul>
<h3>Configuration steps</h3>
<ul>
<li>Install Node.JS</li>
<li>Download the latest bot version from the release tab and unzip it</li>
<li>Go to the config folder, copy and paste the config files</li>
<li>Open discord.json and complete your API key, your Spreadsheet id and Token (See How to get your Google details). All of these are strings, so make sure they are enclosed in quotation marks. (don't mess with empty arrays and variable such as usernamesp and roles)</li>

<li>Go back to the root folder, open a terminal here and run these commands: npm install, wait for it to finish then run npm start.</li>
<li> Run "npm install discord.js" , "npm install express" and "npm install request" (if required) </li>
<li>Congratulations, if you did everything correctly you now have Form2Role bot running.</li>
</ul>
<h3>More info</h3>
<ul>
<li>The bot checks the sheet for new users and roles every minute. However you can change that in the code. i.e refresh rate in discord.json. it is in miliseconds</li>
        
<li>The bot only supports upto 4 roles in column 2, 3, 4 ,5 </li>

<li>Once you enter a "sexyusername#1111" in the spreadsheet, you can no longer control its roles from dicord. the bot will revert the roles back to the roles mentioned in the spreadsheet. </li>
        
        
<li>Future updates will include mainly bug fixes.</li>
<li>Contributions are highly apreciated.</li>
</ul>


<h3>New updates on 28/06/2020</h3>

<li>Now the bot can detect userid instead of username. change the value of "usernameorid" in discord.json. i.e ["username":"UN"] for detecting username and ["username":"UI"] for detecting userid </li>
<li>We just realized that bot was throwing "missing permission" error when it was trying to remove unremovable roles. there now you can put unremoveable roles or the roles you dont want this bot to remove in "unremoveableroles" in discord.json. i.e "unremoveableroles":["bot","serverboost"] </li>
<li>The bot was doing nothing when all roles were removed, it detects and removes all roles now</li>
<li>Now it throws time in console when the bot assign or remove roles of a user</li>



<h3>New Information updates on 22/06/2022</h3>
<li>Always add "@everyone" and other unremovable roles in unremovable roles under config/discord.json </li>
<li>You should manually give more permission to your bot roles as shown in the picture below </li>
![Image of Permission](https://github.com/supreen/form2role-bot/master/image/permission.jpg)
<h2>Your bot role much be higher than another role as shown in the picture below </h2>
        <li>Right click on the server icon</li>        
        <li>Choose roles</li>
        <li>drag the bot role above all roles</li>
![Image of higher role](https://github.com/supreen/form2role-bot/blob/master/Image/highrole.JPG)

<h3>New demo added on 22/06/2022</h3>
<li>Spreadsheet link: </li>
<li>Discord chaneel: </li>

<h3>Free free to edit the roles preferable just checking and unchecking the roles. please be cautious, a wrong move can crash the bot.</h3>


<h3>Consider buying me a coffee, if you loved my work.</h3>
<li>https://www.buymeacoffee.com/suprin

<h3>If you are still finding it hard, Hire me</h3> 
<li>https://www.fiverr.com/supreen
