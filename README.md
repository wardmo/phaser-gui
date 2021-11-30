# phaser-gui
implement a gui that works as a command builder for the phaser command line tool


# phaser-command-line directory
the contents of this directory are the binary files needed to run the phaser command line tool.  
if you call `.\PhaserCommandLine.exe` from the terminal, it should bring up the help dialog.  
start by adding a button to our gui for each parameter.  
Email me if you have questions.


# execute command line from javascript
```
const execSync = require('child_process').execSync;
const output = execSync('PATH_TO_PHASERCOMMANDLINE.EXE', {encoding: 'utf-8'});
console.log(output);
```


# 2 week sprint
Good work adding those buttons!  
Lets make the buttons do some work for us since they look so pretty  
I want a string to populate at the top of the screen that appends the corresponding flag to the button pushed. (look at the help output of PhaserCommandLine.exe for all the flags i.e. -a, -b etc..)  
I want an execute button that executes the PhaserCommandLine.exe with the command string that has been built up  
I want the output of the PhaserCommandLine.exe to show up below all the buttons  