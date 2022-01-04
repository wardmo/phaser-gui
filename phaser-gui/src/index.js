const { app, BrowserWindow } = require('electron');
const path = require('path');
const { stdout, stderr } = require('process');
const { exec } = require(`child_process`);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
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

function quickFeatures(){
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "--quickfeatures";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").innerHTML = myheaders;
}

// functions for those buttons that require user input to work


function writeDeviceSku(){
  document.getElementById("userInputLabel-writeDeviceSku").innerHTML = "enter number between 1 and 32: ";
  document.getElementById("userInput-writeDeviceSku").focus();
}
function submitwriteDeviceSku(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-d " + document.getElementById("userInput-writeDeviceSku").value;
  document.getElementById("userInput-writeDeviceSku").value = myheaders;
  document.getElementById("userInputLabel-writeDeviceSku").innerHTML = myheaders;
}


function pathToUSB(){
  document.getElementById("userInputLabel-pathToUSB").innerHTML = "enter which UsbCanDevice you would like to use. (ex. 'UsbCanDevice 1 ')";
  document.getElementById("userInput-pathToUSB").focus();
}
function submitpathToUSB(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-p " + document.getElementById("userInput-pathToUSB").value;
  document.getElementById("userInput-pathToUSB").value = myheaders;
  document.getElementById("userInputLabel-pathToUSB").innerHTML = myheaders;
}

function canMask(){
  document.getElementById("userInputLabel-canMask").innerHTML = "enter CAN Mask (ex 0x7FF) ";
  document.getElementById("userInput-canMask").focus();

}
function submitcanMask(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-m " + document.getElementById("userInput-canMask").value;
  document.getElementById("userInput-canMask").value = myheaders;
  document.getElementById("userInputLabel-canMask").innerHTML = myheaders;
}

function canTxAddress(){
  document.getElementById("userInputLabel-CANTxAddress").innerHTML = "enter CAN Tx Address (ex 0x7E4) ";
  document.getElementById("userInput-CANTxAddress").focus();
}
function submitCANTxAddress(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-a " + document.getElementById("userInput-CANTxAddress").value;
  document.getElementById("userInput-CANTxAddress").value = myheaders;
  document.getElementById("userInputLabel-CANTxAddress").innerHTML = myheaders;
}

function canRxAddress(){
  document.getElementById("userInputLabel-canRxAddress").innerHTML = "enter CAN RxAddress (ex 0x7EC) ";
  document.getElementById("userInput-canRxAddress").focus();
}
function submitcanRxAddress(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-b " + document.getElementById("userInput-canRxAddress").value;
  document.getElementById("userInput-canRxAddress").value = myheaders;
  document.getElementById("userInputLabel-canRxAddress").innerHTML = myheaders;
}

function canTimeout(){
  document.getElementById("userInputLabel-canTimeout").innerHTML = "enter CAN Timeout Length (ex 6000) ";
  document.getElementById("userInput-canTimeout").focus();
}
function submitcanTimeout(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-t " + document.getElementById("userInput-canTimeout").value;
  document.getElementById("userInput-canTimeout").value = myheaders;
  document.getElementById("userInputLabel-canTimeout").innerHTML = myheaders;
}

function filename(){
  document.getElementById("userInputLabel-filename").innerHTML = "enter filename (ex Firmware.txt) ";
  document.getElementById("userInput-filename").focus();
}
function submitfilename(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-n " + document.getElementById("userInput-filename").value;
  document.getElementById("userInput-filename").value = myheaders;
  document.getElementById("userInputLabel-filename").innerHTML = myheaders;
}

function outputFilename(){
  document.getElementById("userInputLabel-outputFilename").innerHTML = "enter outputFilename (ex ChecksumedFirmware.txt) ";
  document.getElementById("userInput-outputFilename").focus();
}
function submitoutputFilename(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "-o " + document.getElementById("userInput-outputFilename").value;
  document.getElementById("userInput-outputFilename").value = myheaders;
  document.getElementById("userInputLabel-outputFilename").innerHTML = myheaders;
}

function bluetoothName(){
  document.getElementById("userInputLabel-bluetoothName").innerHTML = "enter device you want to connect to";
  document.getElementById("userInput-bluetoothName").focus();
}
function submitbluetoothName(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "--bluetoothname " + document.getElementById("userInput-bluetoothName").value;
  document.getElementById("userInput-bluetoothName").value = myheaders;
  document.getElementById("userInputLabel-bluetoothName").innerHTML = myheaders;
}

function bluetoothPrefix(){
  document.getElementById("userInputLabel-bluetoothPrefix").innerHTML = "enter device name prefix such as PLX ";
  document.getElementById("userInput-bluetoothPrefix").focus();
}
function submitbluetoothPrefix(){
  var myheaders = "";
  document.getElementById("commandLine").innerHTML = document.getElementById("commandLine").innerHTML + "--btprefix " + document.getElementById("userInput-bluetoothPrefix").value;
  document.getElementById("userInput-bluetoothPrefix").value = myheaders;
  document.getElementById("userInputLabel-bluetoothPrefix").innerHTML = myheaders;
}

// submit button to enter user input into the phasercommand line

function execute(){
  document.getElementById("commandLine").innerHTML = "phasercommandline.exe " + document.getElementById("commandLine").innerHTML;
  exec(document.getElementById("commandLine").innerHTML, function(error, stdout, stderr){
    if(error){
      console.log(`error: ${error.message}`)
      document.getElementById("outbox").innerHTML = error;
    }
    else if(stderr){
      console.log(`stderr: ${stderr}`)
      document.getElementById("outbox").innerHTML = stderr;
    }
    else{
      console.log(`stdout: ${stdout}`)
      document.getElementById("outbox").innerHTML = stdout;
    }
  })
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