'use strict';

/**
 * @ngdoc function
 * @name weatherViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherViewApp
 */
angular.module('weatherViewApp')
  .controller('MainCtrl', function ($scope, weatherViewApi, defaultCoords, googleMapsKey, pixaBayKey, bgDefaultUri, NgMap) {

    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key="+googleMapsKey;
    $scope.currentBackground = bgDefaultUri;
    $scope.currentCity = 'Seattle, WA';
    $scope.defaultCoords = defaultCoords;
    $scope.weatherForecast = {};
    var vm = this;

    /**
     * Initialize Google Maps
     * @function getMap
     * @param map the initialized map
     */
    NgMap.getMap().then(function(map) {
      vm.map = map;
    });

    /**
     * Places a marker when map is clicked
     * @function placeMarker
     * @param e the initialized map
     */
    $scope.placeMarker = function(e) {
      var marker = new google.maps.Marker({position: e.latLng, map: vm.map});
      vm.map.panTo(e.latLng);
      defaultCoords.lat = e.latLng.lat();
      defaultCoords.long = e.latLng.lng();
      getForecast();
      getAddress(e.latLng);
    };

    /**
     * Gets the address of given coordinates
     * @function getAddress
     * @param loc the location coordinates to reverse geocode address
     */
    function getAddress(loc) {
      new google.maps.Geocoder().geocode({'location': loc}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            $scope.currentCity = (results[1].address_components[0] ? results[1].address_components[0].long_name : 'Some city') +', '+(results[1].address_components[2] ? results[1].address_components[2].short_name : results[1].address_components[1] ? results[1].address_components[1].short_name : '');
          } else {
            console.log('No results found');
          }
        } else {
          console.log('Geocoder failed due to: ' + status);
        }
      });
    }

    /**
     * Gets the forecast for the given coordinates
     * Coordinates are found in defaultCoords
     * @function getForecast
     */
    function getForecast() {
      weatherViewApi.getForecast().then(function(res) {

        $scope.weatherForecast = res.data;

        weatherViewApi.getBackgroundImage({
          q: res.data.currently.summary,
          key: pixaBayKey,
          image_type: 'photo',
          orientation: 'horizontal',
          category: 'nature',
          min_width: 555,
          min_height: 219,
          per_page: 10
        }).then(function(res){
          var random = getRandom(res.data.hits.length);
          var bgImage = res.data.hits[random];
          $scope.currentBackground = (bgImage ? bgImage.webformatURL : bgDefaultUri);
        });
      });
    }

    /**
     * Returns a random number between 0 and the size
     * of the array
     * @function getRandom
     * @param size the size of the array
     */
    function getRandom(size) {
      return Math.floor(Math.random() * size);
    }

    getForecast();

  });
