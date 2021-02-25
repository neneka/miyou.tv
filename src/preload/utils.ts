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

import { existsSync } from "fs";
import { remote } from "electron";
import createElectronStorage from "redux-persist-electron-storage";

let powerSaveBlockerId: number | undefined;

const utils = {
  fileExists: existsSync,
  getArgv: () => remote.process.argv,
  toggleDevTools: () => {
    remote.getCurrentWebContents().toggleDevTools();
  },
  startPowerSaveBlocker: () => {
    powerSaveBlockerId = remote.powerSaveBlocker.start("prevent-display-sleep");
  },

  stopPowerSaveBlocker: () => {
    if (
      powerSaveBlockerId != null &&
      remote.powerSaveBlocker.isStarted(powerSaveBlockerId)
    ) {
      remote.powerSaveBlocker.stop(powerSaveBlockerId);
    }
  },
  openExternal: (url: string) => {
    remote.shell.openExternal(url);
  },
  createElectronStorage
};

export default utils;
