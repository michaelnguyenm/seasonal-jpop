describe('app', appTest);

function appTest () {
    'use strict';

    beforeEach(module('app'));
    describe('Test module', moduleTest);

    function moduleTest () {
        it('should recognize our angular module', function() {
            expect(angular.module('app')).to.exist;
        });
    }
}
