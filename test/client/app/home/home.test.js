describe('home', homeTest);

function homeTest() {
    'use strict';

    var $rootScope, $state, state = 'home';

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

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
        $state = _$state_;
        $rootScope = _$rootScope_;

        $templateCache.put('app/home/home.html');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).to.equal('/');
    });
/*
    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).to.be(state);
    });
*/
}
