module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [
        "react"
    ],
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "react/prop-types": 0,
        "react/display-name": 0
    },
    "globals": {
		"graphql": false
	}
};
