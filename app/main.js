const {app, BrowserWindow, dialog, Menu} = require('electron');
const fs = require('fs');

const windows = new Set();
