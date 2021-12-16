const { app, BrowserWindow } = require('electron');
const path = require('path');

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
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function targetMicrocontroller(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-u";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function targetFPGA(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-f";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function targetEEPROM(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-e";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function readTargetToFile(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-r";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function writeTargetFromFile(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-w";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function verifyTargetAgainstFile(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-v";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function fpga4k(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-4";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function fpga8k(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-8";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function fpga16k(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-6";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function reconfigureFPGA(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-x";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function listUSB(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-l";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function checksumHeaderWrite(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-c";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function writeDeviceSerialNumber(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-s";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function clearDTCs(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-y";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function readErrorLog(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-g";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function useSalsa20(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-z";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function enterBootloader(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-j";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function extension(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-%";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function address(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-#";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}


function byteCount(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-&";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function messageData(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-q";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function bluetoothList(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "--bluetoothlist";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

// functions for those buttons that require user input to work


function writeDeviceSku(){
  document.getElementById("userInputLabel").innerHTML = "enter number between 1 and 32: ";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-d ";
}

function pathToUSB(){
  document.getElementById("userInputLabel").innerHTML = "enter which UsbCanDevice you would like to use. (ex. 'UsbCanDevice 1 )'";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-p ";
}

function canMask(){
  document.getElementById("userInputLabel").innerHTML = "enter CAN Mask (ex 0x7FF) ";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-m ";
}

function canTxAddress(){
  document.getElementById("userInputLabel").innerHTML = "enter CAN Tx Address (ex 0x7E4) ";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-a ";
}

function canRxAddress(){
  document.getElementById("userInputLabel").innerHTML = "enter CAN RxAddress (ex 0x7EC) ";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-b ";
}

function canTimeout(){
  document.getElementById("userInputLabel").innerHTML = "enter CAN Timeout Length (ex 6000) ";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-t ";
}

function filename(){
  document.getElementById("userInputLabel").innerHTML = "enter filename (ex Firmware.txt) ";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-n ";
}

function outputFilename(){
  document.getElementById("userInputLabel").innerHTML = "enter outputFilename (ex ChecksumedFirmware.txt) ";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-o ";
}

function bluetoothName(){
  document.getElementById("userInputLabel").innerHTML = "enter device you want to connect to";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "--bluetoothname ";
}

function bluetoothPrefix(){
  document.getElementById("userInputLabel").innerHTML = "enter device name prefix such as PLX ";
  document.getElementById("userInput").focus();
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "--btprefix ";
}

// submit button to enter user input into the phasercommand line
function submit(){
  if (document.getElementById("userInputLabel").innerHTML ==""){
    var myheaders = "";
    document.getElementById("userInput").value = myheaders;
    document.getElementById("userInputLabel").innerHTML = myheaders;
  }
  else{
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + document.getElementById("userInput").value;
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
  }
}

//the backspace and clear functions are found here
function empty(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = myheaders;
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

function backspace(){
  let str = document.getElementById("commandLine").innerHTML
  str = str.substring(0,str.length - 1);
  document.getElementById("commandLine").innerHTML = str;
}
/*
function Execute(){
  const execSync = require(document.getElementById("commandLine").innerHTML).execSync;
  const output = execSync(/phaser-command-line/PhaserCommandLine.exe, {encoding: 'utf-8'});
  document.getElementById("outbox").innerHTML = str.output;
}
*/