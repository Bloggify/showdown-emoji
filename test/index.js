"use strict";

const tester = require("tester")
    , showdownEmoji = require("..")
    , showdown = require('showdown')
    ;

tester.describe("showdown-emoji", t => {
    t.should("A Showdown extension for emoji the code blocks.", () => {
        let converter = new showdown.Converter({
            extensions: [showdownEmoji]
        });
        let html = converter.makeHtml(`Hello World! :heart:`);
        t.expect(html).toBe(`<p>Hello World! <img src="https://github.global.ssl.fastly.net/images/icons/emoji/heart?v5" alt="" /></p>`);
    });
});
