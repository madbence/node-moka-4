var irc=require('node-irc');
var client=irc.Client('irc.atw.hu',6667);

client.use('logger');
client.use('db');
client.use('message');
client.use('ping');
client.use('command');
client.use('admin',{
	allow: 'lennon'
});
client.use('uptime');
client.use('cica');
client.use('suna');
client.use('rfc');
client.use('wiki');
client.use('toccintas');
client.connect();

setTimeout(function(){
	client.join('#derexog');
	client.join('#felhour');
},2000);

process.on('uncaughtException',function(e){
	console.log('Uncaught Exception: ',e);
	console.log(e.stack);
})