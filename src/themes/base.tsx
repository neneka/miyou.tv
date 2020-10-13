/*!
Copyright 2016-2020 Brazil Ltd.
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

import React from "react";
import { Platform } from "react-native";
import { Colors, Theme } from "react-native-elements";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { DefaultTheme } from "@react-navigation/native";

const colors: Partial<Colors> = {
  primary: "#9991ff",
  disabled: "#808080",
  divider: "#e2e2e2",
  searchBg: "#3a3a3a",
  default: "#1a1a1a",
  background: "#ffffff",
  border: "#808080",
  selected: "#9991ff60",
  appBg: "#e2e2e2",
  appBorder: "#1a1a1a",
  titlebar: "#e2e2e2",
  titlebarBg: "#1a1a1a",
  titlebarBorder: "#1a1a1a",
  control: "#e2e2e2",
  controlBg: "#262626",
  controlBgActive: "#1a1a1a",
  controlBorder: "#3a3a3a",
  controlFg: "#3a3a3aa8"
};

const baseTheme: Theme = {
  colors,
  Navigation: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      background: colors.appBg as string
    }
  },
  Badge: {
    badgeStyle: [{ borderColor: colors.divider }]
  },
  Button: {
    titleStyle: [{ fontSize: 16 }]
  },
  Image: {
    placeholderStyle: [{ backgroundColor: "transparent" }]
  },
  ListItem: {
    containerStyle: [{ backgroundColor: colors.background }],
    titleStyle: [{ color: colors.default, fontWeight: "bold" }]
  },
  SearchBar: {
    containerStyle: [
      {
        backgroundColor: "transparent",
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        padding: 0
      }
    ],
    inputContainerStyle: [{ height: 32, overflow: "hidden" }],
    inputStyle: [
      {
        color: colors.control,
        fontSize: 16,
        minHeight: Platform.OS === "web" ? 32 : 64,
        padding: 0,
        textAlign: "center"
      }
    ],
    searchIcon: (
      <FontAwesome5Icon name="search" solid color={colors.disabled} size={16} />
    )
  },
  Text: {
    style: [{ fontSize: 16, color: colors.default }],
    h1Style: [{ fontSize: 24 }],
    h2Style: [
      {
        flex: 1,
        fontSize: 24,
        height: 40,
        lineHeight: 40,
        marginHorizontal: 16,
        overflow: "hidden"
      }
    ],
    h3Style: [{ fontSize: 22, fontWeight: "bold" }],
    h4Style: [{ fontSize: 20 }]
  },
  Slider: {
    thumbTintColor: colors.primary
  }
};

export default baseTheme;
