Hooks.once('renderCompendiumDirectory', () => {

    game.settings.register('aeltm-compendium', 'compendium-folders-ready', {
        name: 'Carpetas de compendios instaladas',
        hint: 'Si tienes problemas con la importación automática de las carpetas de compendios, desmarca esta casilla para que se vuelvan a importar automáticamente',
        type: Boolean,
        default: false,
        scope: 'world',
        config: true,
        onChange: isReady => {
            !isReady && window.location.reload();
        }
    });

    if (game.user.isGM && !game.settings.get('aeltm-compendium', 'compendium-folders-ready')) {
        let compendiumFolderJson = JSON.parse(`{"hidden":{"compendiumList":[],"titleText":"hidden-compendiums","_id":"hidden","compendiums":[],"expanded":false},"default":{"compendiumList":[],"titleText":"Default","_id":"default","colorText":"#000000","compendiums":[],"expanded":false,"fontColorText":"#FFFFFF","type":"CompendiumEntry","entity":"CompendiumFolder","sorting":"a","parent":null,"pathToFolder":[],"folderIcon":null,"visible":true},"cfolder_kbo7rtpocxi":{"titleText":"Aventuras en la Tierra Media","colorText":"#0080ff","compendiumList":["aeltm-compendium.clases-aeltm","aeltm-compendium.equipo-aeltm","aeltm-compendium.rasgos-de-clase-aeltm","aeltm-compendium.virtudes-aeltm","aeltm-compendium.criaturas-aeltm","aeltm-compendium.trasfondos-aeltm","aeltm-compendium.tablas-de-trasfondos"],"folderList":[],"_id":"cfolder_kbo7rtpocxi","pathToFolder":[],"folderIcon":"icons/equipment/finger/ring-band-thick-rounded-gold.webp","fontColorText":"#FFFFFF","compendiums":[{"code":"aeltm-compendium.clases-aeltm","folder":"cfolder_kbo7rtpocxi"},{"code":"aeltm-compendium.equipo-aeltm","folder":"cfolder_kbo7rtpocxi"},{"code":"aeltm-compendium.rasgos-de-clase-aeltm","folder":"cfolder_kbo7rtpocxi"},{"code":"aeltm-compendium.virtudes-aeltm","folder":"cfolder_kbo7rtpocxi"},{"code":"aeltm-compendium.criaturas-aeltm","folder":"cfolder_kbo7rtpocxi"},{"code":"aeltm-compendium.trasfondos-aeltm","folder":"cfolder_kbo7rtpocxi"},{"code":"aeltm-compendium.tablas-de-trasfondos","folder":"cfolder_kbo7rtpocxi"}],"expanded":false,"type":"CompendiumEntry","entity":"CompendiumFolder","sorting":"a","parent":null,"visible":true},"cfolder_bpdmqpw3nn":{"titleText":"SRD","colorText":"#d90000","compendiumList":["dnd5e.heroes","dnd5e.monsters","dnd5e.items","dnd5e.tradegoods","dnd5e.spells","dnd5e.classes","dnd5e.classfeatures","dnd5e.races","dnd5e.monsterfeatures","dnd5e.rules"],"folderList":[],"_id":"cfolder_bpdmqpw3nn","pathToFolder":[],"folderIcon":null,"fontColorText":"#FFFFFF","compendiums":[{"code":"dnd5e.heroes","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.monsters","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.items","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.tradegoods","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.spells","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.classes","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.classfeatures","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.races","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.monsterfeatures","folder":"cfolder_bpdmqpw3nn"},{"code":"dnd5e.rules","folder":"cfolder_bpdmqpw3nn"}],"expanded":false}}`);

        setTimeout(() => {
            game.settings.set('compendium-folders', 'cfolders', compendiumFolderJson).then(function () {
                ui.notifications.info("Actualizadas carpetas de compendio, refresque la pestaña");
            });
            game.settings.set('aeltm-compendium', 'compendium-folders-ready', true);
        }, 2000);
    }
});
