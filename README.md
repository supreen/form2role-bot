Form2Role-Bot:

<h2>About</h2> 
<p>This is the simplified version of talios0's and The24thDS's bot. The bot assigns the roles found in the 2nd,3rd,4th and 5th column of the spreadsheet to the usernames found in a 1st column of Google Sheet. Made possible by the amazing Discord.js library.
Please note that the bot start detecting the data from 2nd row of spreadsheet. </p>
<h2>Motivation</h2>
<p>Did you ever want to add some kind of authentication to your Discord server? Maybe you want only people with a certain email domain to have access to some channels. Use a form to collect the required data and then set up this bot to automatically assign roles to everyone found in the Google Sheet.</p>

<h2>Required fields</h2>
<p>The only field that you must have in your Google Form and Google Sheet is the DiscordID. Your DiscordID it's made up of your username and the discriminator, and it looks like this: SomeSexyUsername#4565. The bot needs it to identify users and assign roles to them.</p>

<h2>How to get your Google details<h2>
        <h3>API key</h3>
<p>Go to https://console.developers.google.com
Login and Agree to the Terms of Service
Create a Project by pressing "Create Project" on the right-hand side
Click "Create", give the project a name and then "Create" again.
Once the dashboard loads, click on "ENABLE APIS AND SERVICES" in blue text.
Search for "Sheets" and click on "Google Sheets API" and then "ENABLE"
Click on "Credentials" on the left side of the page.
Select "Create credentials" and then "API Key"
Spreadsheet ID
Go to your Google Sheets document and make sure it is accessible to anyone with the link, view-only.
The id is the part from your URL that comes after /d/. If the url is https://docs.google.com/spreadsheets/d/hjgt6sdBhbHdDssfjGk/edit?usp=sharing, your id is hjgt6sdBhbHdDssfjGk
Range
If the column that contains the Discord IDs is B and the IDs start from row 2 then the range value (don't touch it, if you don't know what you are doing)
How to setup a Discord bot
You will need a bot token, to generate one follow these steps:

Go to https://discordapp.com/developers and login
Create an application and give it a name and a description
Select "Save Changes" at the bottom right and then navigate to the "Bot" section on the left-hand side.
There, create a bot user by clicking on "Add Bot". After confirming, reveal the token.
Invite the bot to your discord server:

Go to OAuth2 section of your developer application
Under SCOPES check bot
Under BOT PERMISSIONS check Manage Roles
Now go to the url generated in the SCOPES section and invite the bot to your server
Make sure the bot role is above the roles it has to assign
Configuration steps
Install Node.JS
Download the latest bot version from the release tab and unzip it
Go to the config folder, copy and paste the two config files, and rename them by removing .example
Open google.json and complete your API key, your Spreadsheet id and your range (See How to get your Google details). All of these are strings, so make sure they are enclosed in quotation marks.
Open discord.json and complete your token and the role names that you want the bot to assign. The token is a string, so it must be enclosed in quotation marks. The roles property is an array, it holds all of the role names that will be assigned o the users found in the Google Sheet. If you only want to assign one role then it should look like this: ["Role name"]; otherwise ["First role name", "Second role name"] and so on, make sure to separate the names with a comma ( , )
Go back to the root folder, open a terminal here and run these commands: npm install, wait for it to finish then run npm start.
Congratulations, if you did everything correctly you now have Form2Role bot running.

More info
The bot checks the sheet for new users every minute. However you can change that in the code.
Future updates will include mainly bug fixes.
Contributions are highly apreciated.
