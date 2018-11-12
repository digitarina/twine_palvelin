# twine_palvelin

## Asennus

Tuore asennus, Ubuntu 16.04.5 LTS.

    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install screen
    screen

seuraavat screenissä (https://kb.iu.edu/d/acuy)

    sudo apt-get install npm git curl nodejs build-essential make zsh
    git clone https://github.com/digitarina/twine_palvelin.git
    mv twine_palvelin/ /var
    cd /var/twine_palvelin/
    curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
    sudo apt install nodejs
    npm install
    npm start

    ctrl-C pysäyttää palvelun

nyt palvelin toimii portissa 8000.

   sudo service apache2 stop
   
haluttaessa Apachen poisto: sudo apt-get remove apache2

   nano server.js

   rivi 6, muuta portiksi 80

   npm start

Palvelun toimii nyt perus http-portissa (toimii pelkällä ip:llä/osoitteessa)

kehityspalvelin tarvittaessa: node_modules/webpack-dev-server/bin/webpack-dev-server.js  --host 192.168.1.1 --port 80 (vaihda oma IP)

## Install

Fresh installation of Ubuntu 16.04.5 LTS.

    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install screen
    screen

in screen (https://kb.iu.edu/d/acuy)

    sudo apt-get install npm git curl nodejs build-essential make zsh
    git clone https://github.com/digitarina/twine_palvelin.git
    mv twine_palvelin/ /var
    cd /var/twine_palvelin/
    curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
    sudo apt install nodejs
    npm install
    npm start

    ctrl-C to kill server

runs now on port 8000.

   sudo service apache2 stop

optionally: sudo apt-get remove apache2

   nano server.js

   line 6, change port to 80

   npm start

runs now on default http port

alterative for dev: node_modules/webpack-dev-server/bin/webpack-dev-server.js  --host 192.168.1.1 --port 80 (use your own ip of course)
