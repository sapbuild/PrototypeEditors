'use strict';

var UIComposerRestApi = require('../api/UIComposerRestApi');
var api = new UIComposerRestApi();

describe('DB init', function () {
    this.timeout(120000);
    before('db initialize', function (done) {
        api.dbInitialize(done);
    });
    it('ok', function (done) {
        api.initialize('dbinit.UIComposer@example.com', '5_LucrouR').then(done);
    });
});
