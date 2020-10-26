import electron from 'electron';

export default class ElectronApp {

    constructor() {
        this.window = null;
    }

    createWindow() {
        this.window = new electron.BrowserWindow({
            width: 800,
            height: 600,
            frame: true
        });
     
        // Debug console
        //this.window.webContents.openDevTools();
     
        // Server Homepage
        this.window.loadURL('http://localhost:3000/');
     
        this.window.on('closed', () => {
            this.window = null;
        });
    }

    start() {
        const _this = this;
        electron.app.on('ready', () => _this.createWindow());
    }
    
    stop() {
        electron.app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') electron.app.quit();
        });
    }

    activate() {
        const _this = this;
        electron.app.on('activate', () => {
            if (this.window === null) _this.createWindow();
        });
    }
    
}
