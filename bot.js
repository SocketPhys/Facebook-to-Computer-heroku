var login = require("facebook-chat-api");
var fs = require('fs');
const exec = require('child_process').exec;
// Create simple echo bot 
login({email: "Enter Email", password: "Enter password"}, function callback (err, api) {
    if(err) return console.error(err);
	var calce=false;
	var program=false;
       api.listen(function callback(err, message) {
	var mes = message.body;
		if(mes==="calc"){
		   calce=true;
		}else if(mes==="exit"){
		   calce=false;
		}else if(mes==="program"){
		   program=true;
		   exec('touch helloworld.sh');
	           exec('chmod 777 helloworld.sh');
		}else if(mes==="exit program"){
		   program=false;
		   exec('./helloworld.sh',function(){
			fs.readFile('dankMeme', 'utf8', function (err,data) {
                        if (err) {
                                return console.log(err);
                        }
                        try{
                                api.sendMessage(data.toString(),message.threadID);
                        }catch(err){}
                   });

		  });
	           
		}else if(mes==="restart program"){
			exec('rm helloworld.sh');
                  exec('rm dude');
		}
		if(calce){
			try{
		   		var x= eval(mes);
		   	  	api.sendMessage(x.toString(),message.threadID);
			}catch(err){}
		}else if(program){
			console.log("dope");	
			if(mes!=="program"){
				fs.appendFile('helloworld.sh', mes, function (err) {
  					if (err) return console.log(err);
				});
			}
		}
	});
});

