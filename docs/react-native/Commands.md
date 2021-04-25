---
id: react-native-commands
title: Commands
sidebar_label: Commands
---

### Create a new project

```node
expo init ProjectName
```

### Add eslint and prettier to project
Prettier and Eslint the industry standards

https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community

Preferred content of .eslintrc file

```json
{
    "extends": "@react-native-community",
    "rules": {
        "quotes": [
            2,
            "double",
            {
                "avoidEscape": true
            }
        ]
    }
}
```

Commands to work with eslint

Add below to package.json scripts

```node
"lint": "eslint . --ext .js"
```
Command to show errors and problems

```node
yarn lint
```

Command to fix then automatically

```node
yarn lint --fix
```

Visual studio code also has a plugin for eslint and prettier, install these

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint  
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Also configure in settings to auto format whenever the code is saved  
If this doesn't work set default formatter by right clicking on the file.
