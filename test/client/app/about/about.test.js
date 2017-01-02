describe('Loading about: ', aboutTest);

function aboutTest() {
    'use strict';
/*
    var $rootScope, $state;

    beforeEach(module('app'));
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
    it("should load the page.", inject(function ($rootScope, $location, $route, $httpBackend) {
        $httpBackend.whenGET("app/about/about.html").respond("<div/>");
        $location.path("/about");
        $rootScope.$digest();
        expect($location.path()).toBe("/about");
    }));
}
