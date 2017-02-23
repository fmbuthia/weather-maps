'use strict';

describe('Service: weatherViewInterceptor', function () {

  // load the service's module
  beforeEach(module('weatherViewApp'));

  // instantiate service
  var weatherViewInterceptor;
  beforeEach(inject(function (_weatherViewInterceptor_) {
    weatherViewInterceptor = _weatherViewInterceptor_;
  }));

  it('should do something', function () {
    expect(!!weatherViewInterceptor).toBe(true);
  });

});
