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
     
        // Si vous décommentez cette ligne, vous verrez la console de débug Chrome
        //this.window.webContents.openDevTools();
     
        // Display the homepage of the server
        this.window.loadURL('http://localhost:3000/');
     
        // Lorsque la fenêtre est fermée, on l'indique au système
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
