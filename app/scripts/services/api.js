'use strict';

/**
 * @ngdoc service
 * @name weatherViewApp.api
 * @description
 * # api
 * Service in the weatherViewApp.
 */
angular.module('weatherViewApp')
  .service('weatherViewApi', function ($http, darkSkyBaseUri, darkSkyApiKey, defaultCoords, pixaBayBaseUri, pixaBayKey, $sce) {
    return {
      /**
       * Gets the forecast data for dark sky
       * @function getForecast
       */
      getForecast: function () {
        var url = darkSkyBaseUri+'forecast/'+darkSkyApiKey+'/'+defaultCoords.lat+','+defaultCoords.long;
        return $http.jsonp($sce.trustAsResourceUrl(url)).then(function (res) {
         return res;
        });
      },
      /**
       * Gets high quality images from pixabay
       * @function getBackgroundImage
       */
      getBackgroundImage: function (data) {
        return $http.get(pixaBayBaseUri , {params: data}).then(function (res) {
          return res;
        });
      }
    };
  });
