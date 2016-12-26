"use strict";

const showdown = require('showdown')
    , showdownEmoji = require("../lib")
    ;

// After requiring the module, use it as extension
let converter = new showdown.Converter({
    extensions: [showdownEmoji]
});

// Now you can Emoji code blocks
let html = converter.makeHtml("Hello World! :heart:");

console.log(html);
// <p>Hello World! <img src="https://github.global.ssl.fastly.net/images/icons/emoji/heart.png?v5" alt=":heart:" title=":heart:" class="emoji-img emoji"</p>
