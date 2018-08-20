const robot = require("robotjs");
const sleep = require("sleep");

// win mouse clicks
const mouseClicks = [
{ button: 1, clicks: 1, x: 229, y: 908, type: 'mouseclick' },
{ button: 1, clicks: 2, x: 793, y: 461, type: 'mouseclick' },
{ button: 1, clicks: 3, x: 1021, y: 657, type: 'mouseclick' },
{ button: 1, clicks: 4, x: 224, y: 905, type: 'mouseclick' },
{ button: 1, clicks: 5, x: 1039, y: 649, type: 'mouseclick' }
]

function record(name){

    // click to start record
    robot.moveMouse(mouseClicks[0].x, mouseClicks[0].y);
    robot.mouseClick();

    // wait for record name dialog
    sleep.sleep(2)

    // click to record name
    robot.moveMouse(mouseClicks[1].x, mouseClicks[1].y);
    robot.mouseClick();

    // type record name
    robot.typeString(name);

    // close record name dialog
    robot.moveMouse(mouseClicks[2].x, mouseClicks[2].y);
    robot.mouseClick();

    // wait record for 1 min
    sleep.sleep(60);

    // click to stop button
    robot.moveMouse(mouseClicks[3].x, mouseClicks[3].y);
    robot.mouseClick();

    // wait for close dialog
    sleep.sleep(2);

    // close note dialog
    robot.moveMouse(mouseClicks[4].x, mouseClicks[4].y);
    robot.mouseClick();

    sleep.sleep(1);
}

function records(recordNum, prefix){
    
    // wait some time
    sleep.sleep(5);

    let recordName = "";
    for(var i=1; i<=recordNum; i++)
    {   
        recordName = prefix+i; 
        console.log(recordName);
        record(recordName);
    }
}

const recordNum = 2;
const prefix = "hello_world_";
records(recordNum, prefix);