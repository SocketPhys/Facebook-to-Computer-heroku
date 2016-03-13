var login = require("facebook-chat-api");
var fs = require('fs');
var wolfram = require('wolfram').createClient("APP_ID");
const exec = require('child_process').exec;
// Create simple echo bot 
login({email: "Enter email adress", password: "Enter Password"}, function callback (err, api) {
    if(err) return console.error(err);
	var calce=false;
	var program=false;
	   var wolf=false;

       api.listen(function callback(err, message) {
	var mes = message.body;
		if(mes==="/calc"){
		   calce=true;
		}else if(mes==="/exit"){
		   calce=false;
		   wolf=false;
		}else if(mes==="/program"){
		   program=true;
		   exec('touch helloworld.sh');
	           exec('chmod 777 helloworld.sh');
		}else if(mes==="/exit program"){
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
	           
		}else if(mes==="/restart program"){
			exec('rm helloworld.sh');
                  exec('rm dude');
		}else if(mes==="/wolf"){
                        wolf=true;

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
		}else if(wolf){
                        if(mes!=='/wolf'){
                                try{ 
                                	wolfram.query(mes, function(err, result) {
                                                var array=[];
                                                for(var i=0;i<result.length;i++){
                                                       for(var j=0;j<result[i].subpods.length;j++){
                                                                array.push(result[i].title);
                                                                array.push("\n");
                                                                array.push( result[i].subpods[j].title);
                                                                array.push("\n");
                                                                array.push(result[i].subpods[j].value);
                                                                array.push("\n");


                                                        }
                                                }
                                                var stringer="";
                                                for(var x=0;x<array.length;x++){
                                                        stringer+=array[x].toString();

                                                }
                                                api.sendMessage( stringer,message.threadID);  
                                         });
                                }catch(err){};
                        }
                                        

                                 
                }

	});
});

