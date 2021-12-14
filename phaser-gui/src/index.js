const { exec } = require('child_process');
const { app, BrowserWindow } = require('electron'); 
const path = require('path');
const { stdout, stderr } = require('process');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


// This code is for the buttons that dont need extra user inputs. 
// Code to add more buttons is found below 

// function (){
//   document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "";
// }

function readDeviceInformation(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-i";
}

function targetMicrocontroller(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-u";
}

function targetFPGA(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-f";
}

function targetEEPROM(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-e";
}

function readTargetToFile(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-r";
}

function writeTargetFromFile(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-w";
}

function verifyTargetAgainstFile(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-v";
}

function fpga4k(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-4";
}

function fpga8k(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-8";
}

function fpga16k(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-6";
}

function reconfigureFPGA(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-x";
}

function listUSB(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-l";
}

function checksumHeaderWrite(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-c";
}

function writeDeviceSerialNumber(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-s";
}

function clearDTCs(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-y";
}

function readErrorLog(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-g";
}

function useSalsa20(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-z";
}

function enterBootloader(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-j";
}

function extension(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-%";
}

function address(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-#";
}


function byteCount(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-&";
}

function messageData(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-q";
}


// functions for those buttons that require user input to work


function writeDeviceSku(){
  var sku = window.prompt("enter number between 1 and 32: ");
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-d(" + sku + ")";
}

//the backspace and clear functions are found here
function empty(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = myheaders;
}

function backspace(){
  let str = document.getElementById("commandLine").innerHTML
  str = str.substring(0,str.length - 1);
  document.getElementById("commandLine").innerHTML = str;
}

function bluetoothList(){
  
}

function bluetoothName(){
  
}

function bluetoothPrefix(){

}

function quickfeatures(){
  
}

/*
function execute(){
  const execSync = require(document.getElementById("commandLine").innerHTML).execSync;
  const output = execSync(/phaser-command-line/PhaserCommandLine.exe, {encoding: 'utf-8'});
  document.getElementById("outbox").innerHTML = output;
}
*/

function execute(){  
  const execSync = require('child_process').execSync; 
  exec(document.getElementById("commandLine").innerHTML, (error, stdout, stderr)); {
    if (error){
      console.log(`error: ${error.message}`)
    }
    if (sterr){
      console.log(`sterr: ${stderr}`)
    }
    console.log(`stdout: ${stdout}`)
  }
  
  /*
  const output = execSync("C:\Users\shapiroga\Documents\GitHub\phaser-gui\phaser-command-line", {encoding: 'utf-8'});
  console.log(output);
  var work = "itworks"
  document.getElementById("outbox").innerHTML = work;
  */
}
