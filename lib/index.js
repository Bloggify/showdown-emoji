"use strict";

const decodeHtml = require("html-encoder-decoder").decode
    , showdown = require("showdown")
    , emojer = require("emojer")
    ;

/**
 * showdownEmoji
 * A Showdown extension to replace emoji codes with images.
 *
 * @name showdownEmoji
 * @function
 * @return {Function} The extension to use.
 */
module.exports = function showdownEmoji () {
    return [
        {
            type: "lang"
          , filter (text) {
              return emojer(text, "![](https://github.global.ssl.fastly.net/images/icons/emoji/__EMOJI_NAME__?v5)");
            }
        }
    ];
};
