# Poverello Sign-in App

This is an app that will run on tablets at the Poverello homeless center for people to sign in with. The current system is a mess of paper, and isn't super efficient, so this will help streamline their process.

If you don't have Meteor:
`curl https://install.meteor.com/ | sh`

If you don't have Yarn:
`brew install yarn`

in the project:

-`yarn install`

-`yarn start`

go to localhost:300 to see it. the /admin password is hotdogs, but you can change the variable in `/Password` to whatever you please.

__The admin side__ of the project is a list of all the entries, sorted by date. There is an overall display, and then a daily display you can use. Each of these can be exported as CSV files. To get here, you have to manually go to the /admin address. The current password is hotdogs.

__The public side__ of the program is simple question pages: A block with the Poverello logo and simple instructions, then the question in the middle of the page, and then the relevant answer buttons below. A back button is below all that, in case the user messes up.

Since the app is running on a tablet, the buttons should be large and easy to press. The users are also going to be homeless and sometimes disabled, so the UI should remain super simple.

-A splash page with a big ol' start button.

-What is your name?

-What is your gender? (M/F)

-Is this your first meal here this year? (Y/N)

-Is this your first meal here this month? (skip if they answered no to the previous question)

-What age category do you fall under? (under 18, 18 to 54, 55+)

-Are you currently employed? (Y/N)

-Are you a veteran? (Y/N)

-A review page with links to each question in case they want to go back and change an answer. If they do go back like this, they'll be taken back to the review page instead of the next question when they select something.

Note: there is functionality in place for an Archive section. Registrants can be moved to this archive at the click of a button, which sets a flag in the database record. However, this early feature now seems extraneous at this point in the build, so it has been commented out of the app.
