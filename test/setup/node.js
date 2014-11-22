var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');

var Radio = require('../../src/radio')

global._ = require('lodash')
global.Backbone = {
  Events: require('backbone-events-standalone'),
  Radio: Radio
}

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;

global.slice = Array.prototype.slice;

require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../../src/') + 'radio');

global.Radio = Backbone.Radio;
