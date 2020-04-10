"use strict";

const tester = require("tester")
    , showdownEmoji = require("..")
    , showdown = require('showdown')
    ;

tester.describe("showdown-emoji", t => {
    t.should("A Showdown extension for emoji the code blocks.", () => {
        let converter = new showdown.Converter({
            extensions: [showdownEmoji("/path/to/emojis")]
        });
        let html = converter.makeHtml(`Hello World! :heart:`);
        t.expect(html).toBe(`<p>Hello World! <img src="/path/to/emojis/heart.png?v5" alt=":heart:" title=":heart:" class="emoji-img emoji"></p>`);
    });
    t.should("not replace :everything:", () => {
        let converter = new showdown.Converter({
            extensions: [showdownEmoji("/path/to/emojis")]
        });
        let html = converter.makeHtml(`Hello World! :heart: :this: won't get replaced`);
        t.expect(html).toBe(`<p>Hello World! <img src="/path/to/emojis/heart.png?v5" alt=":heart:" title=":heart:" class="emoji-img emoji"> :this: won't get replaced</p>`);
    });
});
