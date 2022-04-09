# Angular101
Studies Repository for Angular

# To install Node LTS (16.x)¹ ²

Using Linux Mint 20.3 "Una", or Ubuntu 20.04 LTS, or elementary OS 6 Odin:

```curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -```

```sudo apt-get install -y nodejs```

## To install Angular

npm install -g @angular/cli
or
npm i -g @angular/cli


### In case of getting an EACCESS ERROR³
1. Reinstall npm with a node version manager (recommended), following the steps in [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. Or Manually change npm's default directory
- Back Up your computer 
- On the command line, in your home directory, create a directory for global installations: 
        ```mkdir ~/.npm-global```
- Configure npm to use the new directory path:
        ```npm config set prefix '~/.npm-global'```
- In your preferred text editor, open or create a ~/.profile file and add this line:
        ```export PATH=~/.npm-global/bin:$PATH```
- On the command line, update your system variables:
        ```source ~/.profile```
- To test your new configuration, install a package globally without using sudo:
        ```npm install -g jshint```
        
###### Reference(s):
1. https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
2. https://github.com/nodesource/distributions/blob/master/README.md
3. https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
