'use strict';

/**
 * @ngdoc service
 * @name weatherViewApp.wViewInterceptor
 * @description
 * # wViewInterceptor
 * Factory in the weatherViewApp.
 */
angular.module('weatherViewApp')
  .factory('weatherViewInterceptor', function () {
    return {
      request: function(config) {
        return config;
      },

      requestError: function(config) {
        return config;
      },

      /**
       * Function modifies response data to make it
       * work better with weather icons being used
       * @function response
       * @param res the response object
       */
      response: function(res) {

        for (var key in res) {

          if (!res.hasOwnProperty(key)) continue;

            if(key == 'data'){

              var obj = res[key];

              if (typeof obj != 'object') continue;

              for (var objKey in obj) {

                if (!obj.hasOwnProperty(objKey)) continue;

                var innerObj = obj[objKey];

                if(objKey == 'currently'){
                  if(innerObj.hasOwnProperty('icon')){
                    if(innerObj.icon.includes('day') || innerObj.icon.includes('night')){
                      var iconParts = innerObj.icon.split('-');
                      var tag = iconParts.pop();
                      innerObj.icon = tag + '-' + iconParts.join('-');
                    }
                  }
                }
                if(objKey == 'daily'){
                  innerObj.data.forEach(function(item){
                    if(item.hasOwnProperty('icon')){
                      if(item.icon.includes('day') || item.icon.includes('night')){
                        var iconParts = item.icon.split('-');
                        var tag = iconParts.pop();
                        item.icon = tag + '-' + iconParts.join('-');
                      }
                    }
                  });
                }
              }
            }
          }

        return res;
      },

      responseError: function(res) {
        return res;
      }
    };
  });
