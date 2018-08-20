// record mouse position and save to one file
const ioHook = require('iohook');
// const AutoLaunch = require('auto-launch');
 
// var proAutoLauncher = new AutoLaunch({
//     name: 'EmotivPRO.exe',
//     path: 'C:\\Program Files (x86)\\EmotivPRO',
// });

// proAutoLauncher.enable();

ioHook.on('mouseclick', event => {
    console.log(event);
});

ioHook.start();