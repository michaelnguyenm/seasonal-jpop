describe('Loading about:', aboutTest);

function aboutTest() {
    'use strict';

    var $rootScope, $state;

    beforeEach(module('app'));
    beforeEach(module('app/about/about.html'));

    beforeEach(inject(function (_$rootScope_, _$state_) {
        $rootScope = _$rootScope_;
        $state = _$state_;
    }));
/*
    describe('Checks if about gets loaded. ', function() {
        it('Compare route with state.', function () {
            $state.go('about');
            $state.transition.then(function() {
                expect($state.current.name).to.equal('about');
            });
            $rootScope.$digest();
        });
    });
*/
    describe('Dummy test.', function () {
        it('Just assert true.', function () {
            assert(true);
        });
    });
}
