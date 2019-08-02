//这是主进程的文件
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

/**用于检测渲染进程发过来的消息指令 */


//创建窗口事件
ipcMain.on('create-window', (event, arg) => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, '../public/preload.js')
        }
    });
    win.webContents.openDevTools()
    win.on('close', function () {
        win = null;
    });
    win.loadURL(arg.loadURL);
})
