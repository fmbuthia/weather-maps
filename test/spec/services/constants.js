'use strict';

describe('Service: apiUrl', function () {

  // load the service's module
  beforeEach(module('weatherViewApp'));

  // instantiate service
  var darkSkyBaseUri;
  var darkSkyApiKey;
  beforeEach(inject(function (_darkSkyBaseUri_, _darkSkyApiKey_) {
    darkSkyBaseUri = _darkSkyBaseUri_;
    darkSkyApiKey = _darkSkyApiKey_;
  }));

  it('should do something', function () {
    expect(!!darkSkyBaseUri).toBe(true);
    expect(!!darkSkyApiKey).toBe(true);
  });

});
