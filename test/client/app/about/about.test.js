describe('Loading about:', aboutTest);

function aboutTest() {
    'use strict';

    var $rootScope, $state, state = 'about';

    beforeEach(module('app'));
/*
    beforeEach(module('app/about/about.html'));

    beforeEach(inject(function (_$rootScope_, _$state_) {
        $rootScope = _$rootScope_;
        $state = _$state_;
    }));

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
    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
        $state = _$state_;
        $rootScope = _$rootScope_;

        $templateCache.put('app/about/about.html');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('/about');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });

    describe('Dummy test.', function () {
        it('Just assert true.', function () {
            assert(true);
        });
    });
}
