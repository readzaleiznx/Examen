/** ***********************************************/
/*
/* Créditos al creador de este módulo.
/* Jefferson: https://github.com/jeffersonalionco
/*
/*************************************************/
const handler = async (m, {args, usedPrefix, command, isAdmin}) => {
  try {
    const idioma = global.db.data.users[m.sender].language || 'es';
    const _translate = global.translate[idioma];
    const tradutor = _translate.plugins._language;


    data.db.data.users[m.sender].language;
    let sigla; // Args user

    // ---- Transformar "cadena" en letras minúsculas
    if (args[0] != undefined) {
      sigla = args[0].toLowerCase();
    }

    if (command === 'lang') {
      // ----- Opciones de lenguaje
      if (sigla === 'pt-br' || sigla === 'pt' || sigla === 'br') {
        global.db.data.users[m.sender].language = 'pt-br';
        m.reply(`*[ ✅ ] Off Bot*\n\n*—◉* *_Idioma definido em Português 🇧🇷_*`);
      } else if (sigla === 'es') {
        global.db.data.users[m.sender].language = 'es';
        m.reply(`*[ ✅ ] Off Bot*\n\n*—◉* *_Idioma definido a Español 🇪🇸_*`);
      } else if (sigla === 'en') {
        global.db.data.users[m.sender].language = 'en';
        m.reply(`*[ ✅ ] Off Bot*\n\n*—◉* *_Idioma definido a Inglês 🇬🇧_*`);
      } else if (sigla === 'ru') {
        global.db.data.users[m.sender].language = 'ru';
        m.reply(`*[ ✅ ] Off Bot*\n\n*—◉* *_Язык установлен на русский 🇷🇺_*`);
      } else if (sigla === 'fr') {
        global.db.data.users[m.sender].language = 'fr';
        m.reply(`*[ ✅ ] Off Bot*\n\n*—◉* *_Langue définie en Français 🇫🇷_*`);
      } else if (sigla === 'ar') {
        global.db.data.users[m.sender].language = 'ar';
        m.reply('[ ✅ ] ذا ميستيك - بوت\n\n*—◉* اللغة مضبوطة على العربية 🇸🇦');
      } else {
        m.reply(`
${tradutor.texto1[2]}
${tradutor.texto1[3]} *( ${data.db.data.users[m.sender].language} )*
${tradutor.texto1[0]}
*${usedPrefix}lang* es

${tradutor.texto1[1]}

`);
      }
    }

    // - DEFINIDO TRADUÇÕES PARA GRUPOS NO BOT THE MYSTIC

    if (command === 'langgroup') {
      // ----- Condiciones para grupos
      if (m.isGroup === false) {
        return m.reply(tradutor.texto3);
      }
      if (m.isGroup === true && isAdmin === false) {
        return m.reply(tradutor.texto4);
      }

      // ----- Opciones de lenguaje
      if (sigla === 'pt-br' || sigla === 'pt' || sigla === 'br') {
        global.db.data.chats[m.chat].language = 'pt-br';

        m.reply(`*[ ✅ ] Configuración del grupo*\n\n*—◉* *_Idioma definido em Português 🇧🇷_*`);
      } else if (sigla === 'es') {
        global.db.data.chats[m.chat].language = 'es';

        m.reply(`*[ ✅ ] Configuración del grupo*\n\n*—◉* *_Idioma definido a Español 🇪🇸_*`);
      } else if (sigla === 'en') {
        global.db.data.chats[m.chat].language = 'en';

        m.reply(`*[ ✅ ] Configuración del grupo*\n\n*—◉* *_Idioma definido a Inglês 🇬🇧_*`);
      } else if (sigla === 'ru') {
        global.db.data.chats[m.chat].language = 'ru';

        m.reply(`*[ ✅ ] Off Bot*\n\n*—◉* *_Язык установлен на русский 🇷🇺*`);
      } else if (sigla === 'fr') {
        global.db.data.chats[m.chat].language = 'fr';

        m.reply(`*[ ✅ ] Configuration du groupe*\n\n*—◉* *_Langue définie en Français 🇫🇷_*`);
      } else if (sigla === 'ar') {
        global.db.data.chats[m.chat].language = 'ar';

        m.reply('[ ✅ ] تكوين المجموعة\n\n*—◉* اللغة مضبوطة على العربية 🇸🇦');
      } else {
        m.reply(`
${tradutor.texto2[0]}
*${usedPrefix}langgroup* es

${tradutor.texto2[1]}

`);
      }
    }
    // Fim
  } catch (error) {
    global.db.data.users[m.sender].language = 'es';
    global.db.data.chats[m.chat].language = 'es';
    m.reply(`*[ERROR]* -  _Por defecto el idioma estaba configurado en español._
                \`\`\`contacta a los creadores del bot\`\`\` `);
  }
};


handler.command = /^(lang||langgroup)$/i;

export default handler;
