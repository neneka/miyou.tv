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

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import AppNavigator from "../navigators";
import Titlebar from "./Titlebar";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Titlebar />
        <AppNavigator />
      </View>
    );
  }
}
export default connect()(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
