'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMap'));
  beforeEach(module('weatherViewApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach default city to the scope', function () {
    expect(scope.currentCity).toBe('Seattle, WA');
  });

  it('should attach default background to the scope', function () {
    expect(scope.currentBackground).toBe('https://pixabay.com/get/e836b0082af7033ed95c4518b7484397e174e7dc04b0154993f7c47fa7e8b1_640.jpg');
  });

});
