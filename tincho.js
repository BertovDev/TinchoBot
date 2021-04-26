const Discord = require('discord.js'); //Importo libreria de discord
const client = new Discord.Client();
//AGREGAMOS EL USO DEL PREFIX
const config = require("./config.json");

client.on('ready', () => {
  console.log("TINCHO ESTA LISTO");
});

let prefix = config.prefix;


client.on('message', (message) => {
    //CREO DOS VARIABLES PARA USARLAS DE COMANDO 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //EVITO BUCLES INFINITOS 
    if (!message.content.startsWith(prefix)) return; 
    if (message.author.bot) return;

      /*if (command === 'frases') { //comandos disponibles para audio
        message.channel.send('Tincho puede decir : colo , risa , ahi ');
      }
    else
      if(command === 'help') {
        message.channel.send("t-<frase> para que tinchito te diga algo lindo");
        message.channel.send("t-frases para ver lo quen tincho puede decir ");
      }*/
 
      



      // INICIO CODIGO INGRESO AL CANAL DE VOZ
    let canalvoz = message.member.voice.channel;


    //Sonidos
    switch(command){
        case 'help':
          message.channel.send("t-<frase> para que tinchito te diga algo lindo");
          message.channel.send("t-frases para ver lo quen tincho puede decir ");
          message.channel.send("t-nv y tincho se va del canal");
        break;
        case 'frases':
          message.channel.send('Tincho puede decir : colo , risa , fede , pavi , mucho , ahi , plata , data , amigos , naze');
        break;
        case 'colo':
        if(!canalvoz) {
          message.channel.send('Unite a un canal para usarme xd');
        } else {
            canalvoz.join()
            .then(connection => {
                const dispatcher = connection.play('./audios/colorado.mp3');
                message.channel.send('reproducciendo');
            })
            .catch(console.error);
        }
        break;
        case 'risa':
          if(!canalvoz) {
            message.channel.send('Unite a un canal para usarme xd');
          } else {
              canalvoz.join()
              .then(connection => {
                  const dispatcher = connection.play('./audios/risa.mp3');
                  message.channel.send('reproducciendo');
              })
              .catch(console.error);
          }
          break;
          case 'mucho':
            if(!canalvoz) {
              message.channel.send('Unite a un canal para usarme xd');
            } else {
                canalvoz.join()
                .then(connection => {
                    const dispatcher = connection.play('./audios/WhatsApp Ptt 2018-11-11 at 23.39.23.ogg');
                    message.channel.send('reproducciendo');
                })
                .catch(console.error);
            }
            break;
            case 'ahi':
              if(!canalvoz) {
                message.channel.send('Unite a un canal para usarme xd');
              } else {
                  canalvoz.join()
                  .then(connection => {
                      const dispatcher = connection.play('./audios/ahi.mp3');
                      message.channel.send('reproducciendo');
                  })
                  .catch(console.error);
              }
              break;
              case 'plata':
                if(!canalvoz) {
                  message.channel.send('Unit a un canal para usarme xd');
                } else {
                  canalvoz.join()
                  .then(connection => {
                    const  dispatcher = connection.play('./audios/plata.mp3');
                    message.channel.send('reproducciendo');
                  })
                  .catch(console.error);
                }
              break;
              case 'data':
                if(!canalvoz) {
                  message.channel.send('Unite a un canal para usarme');
                } else {
                  canalvoz.join()
                  .then(connection => {
                    const dispatcher = connection.play('./audios/data.mp3');
                    message.channel.send('reproducciendo');
                  })
                  .catch(console.error);
                }
                break;
                case 'amigos':
                  if(!canalvoz) {
                    message.channel.send('Unite a un canal para usarme');
                  } else {
                    canalvoz.join()
                    .then(connection => {
                      const dispatcher = connection.play('./audios/amigos.mp3');
                      message.channel.send('reproducciendo');
                    })
                    .catch(console.error);
                  }
                break;
                case 'pavi':
                  if(!canalvoz) {
                    message.channel.send('Unite a un canal para usarme');
                  } else {
                    canalvoz.join()
                    .then(connection => {
                      const dispatcher = connection.play('./audios/pavi.mp3');
                      message.channel.send('reproducciendo');
                    })  
                    .catch(console.error);
                  }
                break;
                case 'naze':
                  if(!canalvoz) {
                    message.channel.send('Unite a un canal para usarme');
                  } else {
                    canalvoz.join()
                    .then(connection => {
                      const dispatcher = connection.play('./audios/naze.mp3');
                      message.channel.send('reproducciendo');
                    })
                    .catch(console.error);
                  }
                break;
                case 'nv':
                  if(!canalvoz) {
                    message.channel.send('Unite a un canal para usarme xd');
                  } else {
                    message.channel.send('Me re fui nv.').then(() => {
                        canalvoz.leave();
        
                    }).catch(error => console.log(error));
                  }
                  break;
                  case 'fede':
                    if(!canalvoz){
                      message.channel.send('Unite a un canal para usarme xd');
                    } else {
                      canalvoz.join()
                      .then(connection => {
                        const dispatcher = connection.play('./audios/fede.mp3');
                        message.channel.send('reproduciendo');
                      })
                      .catch(console.error);
                    }
                    break;
                //si no esta definida
                default:
                  message.channel.send('nonono pibe , ese comando no lo tengo');
                break;
      } //fin switch
  

  





  }); //FIN EVENTO MESSAGE 


client.login(''); //AQUI SE COLOCA EL TOKEN DE TU BOT DENTRO DE LAS COMILLAS