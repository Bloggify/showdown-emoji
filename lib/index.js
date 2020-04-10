"use strict";

const emojer = require("emojer")
    , emojis = require("github-api-emojis/lib/map")

/**
 * showdownEmoji
 * Replace the :emojis: in the text with images.
 *
 * @name showdownEmoji
 * @function
 * @param {String} emojiDirPath The public path to
 * the emoji directory containing the emoji images.
 * @returns {Array} The configuration used by Showdown.
 */
module.exports = function showdownEmoji (emojiDirPath = "/emojis") {
    const emojiImgTemplate = `<img src=\"${emojiDirPath}/__EMOJI_NAME__.png?v5\" alt=\":__EMOJI_NAME__:\" title=\":__EMOJI_NAME__:\" class=\"emoji-img emoji\">`
    return [
        {
            type: "output"
          , filter: text => emojer(text, emojiImgTemplate, emojis)
        }
    ]
}
