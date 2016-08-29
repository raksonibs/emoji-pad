'use strict';
module.exports = (input, count, emojii, direction) => direction === "right" ? input + `${emojii}`.repeat(count) : `${emojii}`.repeat(count) + input;