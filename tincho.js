const Discord = require('discord.js');
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

      if (command === 'frases') {
        message.channel.send('Tincho puede decir : colo , risa , pelotudo , ahi ');
      }
    else
      if(command === 'help') {
        message.channel.send("t-<frase> para que tinchito te diga algo lindo");
        message.channel.send("t-frases para ver lo quen tincho puede decir ");
      }
 
      



      // INICIO CODIGO INGRESO AL CANAL DE VOZ
    let canalvoz = message.member.voice.channel;


    //Sonidos
    switch(command){

        case 'colo':
        if(!canalvoz) {
          message.channel.send('Mira wachin unite a un canal para usarme xd');
        } else {
            canalvoz.join()
            .then(connection => {
                const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/colorado.mp3');
                message.channel.send('reproducciendo');
            })
            .catch(console.error);
        }
        break;
        case 'risa':
          if(!canalvoz) {
            message.channel.send('Mira wachin unite a un canal para usarme xd');
          } else {
              canalvoz.join()
              .then(connection => {
                  const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/risa.mp3');
                  message.channel.send('reproducciendo');
              })
              .catch(console.error);
          }
          break;
          case 'mucho':
            if(!canalvoz) {
              message.channel.send('Mira wachin unite a un canal para usarme xd');
            } else {
                canalvoz.join()
                .then(connection => {
                    const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/WhatsApp Ptt 2018-11-11 at 23.39.23.ogg');
                    message.channel.send('reproducciendo');
                })
                .catch(console.error);
            }
            break;
            case 'ahi':
              if(!canalvoz) {
                message.channel.send('Mira wachin unite a un canal para usarme xd');
              } else {
                  canalvoz.join()
                  .then(connection => {
                      const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/ahi.mp3');
                      message.channel.send('reproducciendo');
                  })
                  .catch(console.error);
              }
              break;
              case 'plata':
                if(!canalvoz) {
                  message.channel.send('Mira wachin unit a un canal para usarme xd');
                } else {
                  canalvoz.join()
                  .then(connection => {
                    const  dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/plata.mp3');
                    message.channel.send('reproducciendo');
                  })
                  .catch(console.error);
                }
              break;
              case 'data':
                if(!canalvoz) {
                  message.channel.send('Mira wachin unite a un canal para usarme');
                } else {
                  canalvoz.join()
                  .then(connection => {
                    const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/data.mp3');
                    message.channel.send('reproducciendo');
                  })
                  .catch(console.error);
                }
                break;
                case 'amigos':
                  if(!canalvoz) {
                    message.channel.send('Mira wachin unite a un canal para usarme');
                  } else {
                    canalvoz.join()
                    .then(connection => {
                      const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/amigos.mp3');
                      message.channel.send('reproducciendo');
                    })
                    .catch(console.error);
                  }
                break;
                case 'puta':
                  if(!canalvoz) {
                    message.channel.send('Mira wachin unite a un canal para usarme');
                  } else {
                    canalvoz.join()
                    .then(connection => {
                      const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/puta2.mp3');
                      message.channel.send('reproducciendo');
                    })  
                    .catch(console.error);
                  }
                break;
                case 'naze':
                  if(!canalvoz) {
                    message.channel.send('Mira wachin unite a un canal para usarme');
                  } else {
                    canalvoz.join()
                    .then(connection => {
                      const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/naze.mp3');
                      message.channel.send('reproducciendo');
                    })
                    .catch(console.error);
                  }
                break;
                case 'nv':
                  if(!canalvoz) {
                    message.channel.send('Mira wachin unite a un canal para usarme xd');
                  } else {
                    message.channel.send('Me re fui nv.').then(() => {
                        canalvoz.leave();
        
                    }).catch(error => console.log(error));
                  }
                  break;
                  case 'pelotudo':
                    if(!canalvoz){
                      message.channel.send('Mira wachin unite a un canal para usarme xd');
                    } else {
                      canalvoz.join()
                      .then(connection => {
                        const dispatcher = connection.play('C:/Users/Bautikiller/Desktop/audios/pelotudo.mp3');
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


client.login(config.token);