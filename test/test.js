var assert = require('assert');
var ePad = require('../index');

describe('ePad', function() {  
  it('should return 5 dog emojiies when given that', function() {
    assert.equal(ePad("YO", 5, '🐶'), "🐶🐶🐶🐶🐶YO");
  });
});