describe('home', homeTest);

function homeTest() {
    'use strict';

    var $rootScope, $state;

    beforeEach(module('app'));
/*
    beforeEach(module('app/home/home.html'));

    beforeEach(inject(function (_$rootScope_, _$state_) {
        $rootScope = _$rootScope_;
        $state = _$state_;
    }));

    describe('Test home', function() {
        it('Test home route', function () {
            $state.go('home');
            $state.transition.then(function() {
                expect($state.current.name).to.equal('home');
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
