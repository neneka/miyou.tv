/*!
Copyright 2016-2021 Brazil Ltd.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { remote, ipcRenderer } from "electron";
import path from "path";
import fs from "fs";
import createElectronStorage from "redux-persist-electron-storage";

declare global {
  interface Window {
    preloadPath: string;
    remote: typeof remote;
    ipcRenderer: typeof ipcRenderer;
    fs: typeof fs;
    createElectronStorage: typeof createElectronStorage;
  }
}

window.preloadPath = path.join(remote.app.getAppPath(), "dist/preload.js");
window.remote = remote;
window.ipcRenderer = ipcRenderer;
window.fs = fs;
window.createElectronStorage = createElectronStorage;
