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

import { ipcMain, shell } from "electron";
import ElectronStore from "electron-store";

import "./dialog";
import "./win";
import "./powerSaveBlocker";
import "./download";
import "./ipc";
import "./viewer";

ipcMain.handle("argv", () => {
  return process.argv;
});

ipcMain.handle("devtool-toggle", ({ sender }) => {
  sender.toggleDevTools();
});

ipcMain.handle("open-external", (event, url: string) => {
  shell.openExternal(url);
});

ElectronStore.initRenderer();
