# Guide to setting up Style Dictionary 

1.  Run 'npm install -g style-dictionary' to setup style dictionary client
2.  Paste PoC.json file in the root directory
3.  Create a config.json file in the root directory containing configurations for building style dictionary. 
    In this file, we will also call our design tokens in the 'source' parameter, in our case, the 'PoC.json' file.
4.  Once config.json is set, run 'style-dictionary build' in the root directory to generate the css variables based on our PoC.json 
5.  We can now see a 'build' folder generated in the root directory. Inside that folder is a css directory containing the _variables.css file (containing our global css variables) 
6.  Move the newly generated 'build' folder into the scr directory for us to be able to import the _variables.css file in App.js 
7.  Import the _variables.css file in App.js:
    import './build/css/_variables.css';
    (This will allow us to use the css variables globally)
8.  Sample usage of the global variables can be seen in:
    src/components/emerald-button/emerald-button.module.css
    (where the styling for the EmeraldButton component is set based on the styling variables declared in _variables.css)