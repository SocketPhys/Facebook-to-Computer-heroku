# Facebook-to-Computer
You set this up on your computer and give your facebook credentials to the program. Then you run the program. It will allow you to connect to your computer from facbook chat. Credentials mean that in the bot.js, you need to input the facebook email and password for the bot. You can set it up with your own facebook account or you can make one for the bot.

To set this up: clone this repository and install the necessary npm modules. Lastly register for an API account with wolfram-alfa. Then in bot.js fill in the API code with the code given.

In bot.js fill in the account you want to use for your bot. Then go to your terminal and after setting up all the files type node bot.js. Then if you chat the account you used for the bot you can communicate with your own computer.

Commands:


/wolf: starts wolfram-alpha mode
Wolfram-alfa mode basically lets you type anything, and if wolfram alpha can understand it you will be messaged with the title and values of its result. Queries can range from "2+2" to "Size of the Sun" to "Integrate xsin(x^2)". Yes it allows calculus.

/exit: exits wolfram-alpha mode

calc: starts calculator mode.
Calculator mode is where you can type any javascript expression and return the bot will message you after it runs it. For example 2+2 would message you 4. However console.log("hello") would not message you anything but it would print to your console. "hello" + "goodbye" would message you hellogoodbye. In deciding what works just imagine eval(message) in javascript and if it returns a value then you will be messaged that value.

/exit: exits calculator mode

/program: starts program mode. 

Program mode allows you to type in any bash program. Remember to use ; after every statement. This is mandatory. If you wish to see output you cannot just use echo output .  You must redirect all output to the "dankMeme" file. An example being echo "hello world" >dankMeme; After you are done with your program simply type

/exit program:This will display the output and end program mode.

/restart program: Before you start a new program you must type restart program. This will not enter program mode

