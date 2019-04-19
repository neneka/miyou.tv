/*!
Copyright 2016-2019 Brazil Ltd.
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

import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createEncryptor from "redux-persist-transform-encrypt";
import { all, fork } from "redux-saga/effects";

import { persistSecretKey } from "../config/constants";
import loadingReducer from "./loading";
import navReducer from "./nav";
import playerReducer from "./player";
import programReducer, { programSaga } from "./program";
import serviceReducer, { serviceSaga } from "./service";
import settingReducer from "./setting";
import viewerReducer, { viewerSaga } from "./viewer";
import windowReducer, { windowSaga } from "./window";

const encryptor = createEncryptor({
  secretKey: persistSecretKey
});

export const persistConfig: PersistConfig = {
  key: "root",
  storage,
  whitelist: ["nav", "setting"],
  transforms: [encryptor]
};

const rootReducer = combineReducers({
  loading: loadingReducer,
  nav: navReducer,
  player: playerReducer,
  program: programReducer,
  service: serviceReducer,
  setting: settingReducer,
  viewer: viewerReducer,
  window: windowReducer
});
export default rootReducer;

export function* rootSaga() {
  yield all([
    fork(programSaga),
    fork(serviceSaga),
    fork(viewerSaga),
    fork(windowSaga)
  ]);
}
