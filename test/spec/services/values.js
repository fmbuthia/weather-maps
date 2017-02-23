'use strict';

describe('Service: defaultCoords', function () {

  // load the service's module
  beforeEach(module('weatherViewApp'));

  // instantiate service
  var defaultCoords;
  beforeEach(inject(function (_defaultCoords_) {
    defaultCoords = _defaultCoords_;
  }));

  it('should do something', function () {
    expect(!!defaultCoords).toBe(true);
  });

});
