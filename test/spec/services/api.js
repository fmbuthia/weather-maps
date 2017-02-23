'use strict';

describe('Service: weatherViewApi', function () {

  // load the service's module
  beforeEach(module('weatherViewApp'));

  // instantiate service
  var weatherViewApi;
  beforeEach(inject(function (_weatherViewApi_) {
    weatherViewApi = _weatherViewApi_;
  }));

  it('should do something', function () {
    expect(!!weatherViewApi).toBe(true);
  });

});
