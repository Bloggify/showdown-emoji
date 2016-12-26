"use strict";

const showdown = require("showdown")
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
            type: "output"
          , filter: text => emojer(text, "<img src=\"https://github.global.ssl.fastly.net/images/icons/emoji/__EMOJI_NAME__.png?v5\" alt=\":__EMOJI_NAME__:\" title=\":__EMOJI_NAME__:\" class=\"emoji-img emoji\">")
        }
    ];
};
