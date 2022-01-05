const { app, BrowserWindow } = require('electron');
const path = require('path');
//const { stdout, stderr, stdin } = require('process');
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
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-i";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function targetMicrocontroller(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-u";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function targetFPGA(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-f";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function targetEEPROM(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-e";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function readTargetToFile(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-r";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function writeTargetFromFile(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-w";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function verifyTargetAgainstFile(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-v";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function fpga4k(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-4";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function fpga8k(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-8";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function fpga16k(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-6";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function reconfigureFPGA(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-x";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function listUSB(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-l";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function checksumHeaderWrite(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-c";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}



function clearDTCs(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-y";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function readErrorLog(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-g";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function useSalsa20(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-z";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function enterBootloader(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-j";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function extension(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-%";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function address(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-#";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}


function byteCount(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-&";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function messageData(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-q";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function bluetoothList(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "--bluetoothlist";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function quickFeatures(){
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "--quickfeatures";
  var myheaders = "";
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

// functions for those buttons that require user input to work

function writeDeviceSerialNumber(){
  document.getElementById("userInputLabel-writeDeviceSerialNumber").value = "Enter Serial Number ";
  document.getElementById("userInput-writeDeviceSerialNumber").focus();
}
function submitwriteDeviceSerialNumber(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-s " + document.getElementById("userInput-writeDeviceSku").value + " ";
  document.getElementById("userInput-writeDeviceSerialNumber").value = myheaders;
  document.getElementById("userInputLabel-writeDeviceSerialNumber").value = myheaders;
}

function writeDeviceSku(){
  document.getElementById("userInputLabel-writeDeviceSku").value = "enter number between 1 and 32: ";
  document.getElementById("userInput-writeDeviceSku").focus();
}
function submitwriteDeviceSku(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-d " + document.getElementById("userInput-writeDeviceSku").value + " ";
  document.getElementById("userInput-writeDeviceSku").value = myheaders;
  document.getElementById("userInputLabel-writeDeviceSku").value = myheaders;
}


function pathToUSB(){
  document.getElementById("userInputLabel-pathToUSB").value = "enter which UsbCanDevice you would like to use. (ex. 'UsbCanDevice 1 ')";
  document.getElementById("userInput-pathToUSB").focus();
}
function submitpathToUSB(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-p " + document.getElementById("userInput-pathToUSB").value + " ";
  document.getElementById("userInput-pathToUSB").value = myheaders;
  document.getElementById("userInputLabel-pathToUSB").value = myheaders;
}

function canMask(){
  document.getElementById("userInputLabel-canMask").value = "enter CAN Mask (ex 0x7FF) ";
  document.getElementById("userInput-canMask").focus();

}
function submitcanMask(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-m " + document.getElementById("userInput-canMask").value + " ";
  document.getElementById("userInput-canMask").value = myheaders;
  document.getElementById("userInputLabel-canMask").value = myheaders;
}

function canTxAddress(){
  document.getElementById("userInputLabel-CANTxAddress").value = "enter CAN Tx Address (ex 0x7E4) ";
  document.getElementById("userInput-CANTxAddress").focus();
}
function submitCANTxAddress(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-a " + document.getElementById("userInput-CANTxAddress").value + " ";
  document.getElementById("userInput-CANTxAddress").value = myheaders;
  document.getElementById("userInputLabel-CANTxAddress").value = myheaders;
}

function canRxAddress(){
  document.getElementById("userInputLabel-canRxAddress").value = "enter CAN RxAddress (ex 0x7EC) ";
  document.getElementById("userInput-canRxAddress").focus();
}
function submitcanRxAddress(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-b " + document.getElementById("userInput-canRxAddress").value + " ";
  document.getElementById("userInput-canRxAddress").value = myheaders;
  document.getElementById("userInputLabel-canRxAddress").value = myheaders;
}

function canTimeout(){
  document.getElementById("userInputLabel-canTimeout").value = "enter CAN Timeout Length (ex 6000) ";
  document.getElementById("userInput-canTimeout").focus();
}
function submitcanTimeout(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-t " + document.getElementById("userInput-canTimeout").value + " ";
  document.getElementById("userInput-canTimeout").value = myheaders;
  document.getElementById("userInputLabel-canTimeout").value = myheaders;
}

function filename(){
  document.getElementById("userInputLabel-filename").value = "enter filename (ex Firmware.txt) ";
  document.getElementById("userInput-filename").focus();
}
function submitfilename(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-n " + document.getElementById("userInput-filename").value + " ";
  document.getElementById("userInput-filename").value = myheaders;
  document.getElementById("userInputLabel-filename").value = myheaders;
}

function outputFilename(){
  document.getElementById("userInputLabel-outputFilename").value = "enter outputFilename (ex ChecksumedFirmware.txt) ";
  document.getElementById("userInput-outputFilename").focus();
}
function submitoutputFilename(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "-o " + document.getElementById("userInput-outputFilename").value + " ";
  document.getElementById("userInput-outputFilename").value = myheaders;
  document.getElementById("userInputLabel-outputFilename").value = myheaders;
}

function bluetoothName(){
  document.getElementById("userInputLabel-bluetoothName").value = "enter device you want to connect to";
  document.getElementById("userInput-bluetoothName").focus();
}
function submitbluetoothName(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "--bluetoothname " + document.getElementById("userInput-bluetoothName").value + " ";
  document.getElementById("userInput-bluetoothName").value = myheaders;
  document.getElementById("userInputLabel-bluetoothName").value = myheaders;
}

function bluetoothPrefix(){
  document.getElementById("userInputLabel-bluetoothPrefix").value = "enter device name prefix such as PLX ";
  document.getElementById("userInput-bluetoothPrefix").focus();
}
function submitbluetoothPrefix(){
  var myheaders = "";
  document.getElementById("commandLine").value = document.getElementById("commandLine").value + "--btprefix " + document.getElementById("userInput-bluetoothPrefix").value + " ";
  document.getElementById("userInput-bluetoothPrefix").value = myheaders;
  document.getElementById("userInputLabel-bluetoothPrefix").value = myheaders;
}

// submit button to enter user input into the phasercommand line

function execute(){
  exec("C:\\dev\\phaser\\phaser-gui\\phaser-command-line\\phasercommandline.exe " + document.getElementById("commandLine").value, {timeout: 3000}, function(error, stdout, stderr){
    if(error){
      console.log(`error: ${error.message}`)
      document.getElementById("outbox").value = error;
    }
    else if(stderr){
      console.log(`stderr: ${stderr}`)
      document.getElementById("outbox").value = stderr;
    }
    console.log(`stdout: ${stdout}`)
    document.getElementById("outbox").value = stdout;
    
  })
}

//the backspace and clear functions are found here
function empty(){
  var myheaders = "";
  document.getElementById("commandLine").value = myheaders;
  document.getElementById("userInput").value = myheaders;
  document.getElementById("userInputLabel").value = myheaders;
}

function backspace(){
  let str = document.getElementById("commandLine").value
  str = str.substring(0,str.length - 1);
  document.getElementById("commandLine").value = str;
}
/*
function Execute(){
  const execSync = require(document.getElementById("commandLine").innerHTML).execSync;
  const output = execSync(/phaser-command-line/PhaserCommandLine.exe, {encoding: 'utf-8'});
  document.getElementById("outbox").innerHTML = str.output;
}
*/