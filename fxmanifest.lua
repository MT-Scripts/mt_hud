fx_version 'cerulean'
description 'FiveM Player and Vehicle HUD script'
author 'Marttins'
lua54 'yes'
game 'gta5'

shared_scripts {
    '@ox_lib/init.lua',
    'config.lua'
}

client_scripts {
    'client/**/*',
}

server_scripts {
    'server/**/*',
}

ui_page 'web/build/index.html'

files {
    'locales/*',
	'web/build/index.html',
	'web/build/**/*',
    'web/assets/**/*',
}