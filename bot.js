const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});




client.on("guildMemberAdd", (member) => {
client.channels.get('470936933208686612').edit({name : `أعضاء السيرفر : ${member.guild.memberCount}`});
})
client.on("guildMemberRemove", (member) => {
client.channels.get('470936933208686612').edit({name : `أعضاء السيرفر : ${member.guild.memberCount} `});
})

client.on('message', message => {
	var prefix = "ب";
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ند") {
               if(!message.channel.guild) return message.reply('** هذا الأمر لسيرفرات فقط **');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("** أنا لا أملك خاصيه  ` BAN_MEMBERS ` **");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
}); 


 client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**تم اعطاك ميوت بسبب النشر**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})


client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("الرابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



client.on("message", message => {
	var prefix = "!";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});






client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send(':arrow_down:شعار دسكورد ')
    }
});


client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('``!S7Q |``')
    }
});

client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send(':arrow_down:شعار العبه')
    }
});

client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('``ζ͡𝒮𝟳𝒬``')
    }
});



client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('**ٺــٻۧــټ ۖ ڀــٰ̍ا̍ ۛ ּحۡــڷــﯡۥ ۛ ּلآتـطــۄڸ ۗ::disappointed::broken_heart:**');
  }
});





client.on('message', msg => {
  if (msg.content === 'متجر') {
    msg.reply('**https://discord.gg/ge2KfDB تفضل يا حلو**');
  }
});



client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('** ۗ وّلّلّّكّكّممّّ نۨــۏڕٺ ۛ ּيۧ مۭــڗ ۛ ּ، ۛ ּمۭــنۨ ۖ ڙمۭــٰا̍نۨ ̨؏ــڼۨــک ۗ :rose::wave:**');
  }
});


client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('***أطلق اثبات وجود :hearts: ***');
  }
});



let rebel;
client.on("ready", async  => {
    let guild = client.guilds.get("470653659114635275");
  let users = guild.members.map(member => member.user.id);
  let i;
  rebel=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  rebel++;
}
}
guild.channels.find('id', '470893893219647489').setName("["+rebel+"]- عدد الاعضاء في الرومات");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("470653659114635275");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   rebel++;
guild.channels.find('id', '470893893219647489').setName(" ["+rebel+"]- عدد الاعضاء في الرومات");
} else if(newUserChannel === undefined){
  rebel--;
guild.channels.find('id', '470893893219647489').setName(" ["+rebel+"]- عدد الاعضاء في الرومات");
}
});
client.on('message', Codes => {
  
  if(Codes.content === "!صوت") {
      Codes.channel.send("["+rebel+"]- عدد الاعضاء في الرومات");
}
});

var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

 

 

 





  client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });



client.on('message', message => {
    if(message.content === '!'){
        message.channel.send('**__Welcome__S7Q Clan..:champagne_glass:**')
			                       
    }
});


client.on('message', message => {
    if(message.content === '!!'){
        message.channel.send('***Welcome To __S7Q__Clan :champagne_glass::champagne_glass: ***')
    }
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
