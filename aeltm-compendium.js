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
        let compendiumFolderJson = JSON.parse(`{"hidden":{"compendiumList":[],"titleText":"hidden-compendiums","_id":"hidden"},"default":{"compendiumList":[],"titleText":"Default","_id":"default","colorText":"#000000"},"cfolder_kbo7rtpocxi":{"titleText":"Aventuras en la Tierra Media","colorText":"#0080ff","compendiumList":["world.clases-aeltm","world.equipo-aeltm","world.rasgos-de-clase-aeltm","world.virtudes-aeltm","world.criaturas-aeltm","world.trasfondos-aeltm","world.tablas-de-trasfondos"],"folderList":[],"_id":"cfolder_kbo7rtpocxi","pathToFolder":[],"folderIcon":"icons/equipment/finger/ring-band-thick-rounded-gold.webp","fontColorText":"#FFFFFF"},"cfolder_bpdmqpw3nn":{"titleText":"SRD","colorText":"#d90000","compendiumList":["dnd5e.heroes","dnd5e.monsters","dnd5e.items","dnd5e.tradegoods","dnd5e.spells","dnd5e.classes","dnd5e.classfeatures","dnd5e.races","dnd5e.monsterfeatures","dnd5e.rules"],"folderList":[],"_id":"cfolder_bpdmqpw3nn","pathToFolder":[],"folderIcon":null,"fontColorText":"#FFFFFF"}}`);

        setTimeout(() => {
            game.settings.set('compendium-folders', 'cfolders', compendiumFolderJson).then(function () {
                ui.notifications.info("Actualizadas carpetas de compendio, refresque la pestaña");
            });
            game.settings.set('aeltm-compendium', 'compendium-folders-ready', true);
        }, 2000);
    }
});
