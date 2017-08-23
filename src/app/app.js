import './assets/styles/main.scss';
import './assets/styles/select.css';

import angular from 'angular';

(function() {
    var app = angular.module('form', []);

    app.controller('FormСontroller', ['$scope', function($scope) {
       $scope.user = {
           firstName: '',
           lastName: '',
           email: '',
           phone: '',
           address: '',
           city: '',
           state: '',
           zip: '',
           website: '',
           hosting: true,
           description: ''

       };
       //REGEX
       $scope.isTableVisible = false;
       $scope.phonePattern = /((\d)\D)?(\(?(\d\d\d)\)?)?\D(\d\d\d)\D(\d\d\d\d)/g;
       $scope.urlPattern = /^(http(s)?(:\/\/))?(www\.)[a-zA-Z0-9-_\.]+(\.[a-zA-Z0-9]{2,})([-a-zA-Z0-9:%_\+.~#?&//=]*)/g;
       $scope.literalPattern = /[a-z]/ig;
       $scope.numericalPattern = /\d/g;
       //
       $scope.toggleTableVisibility = function(e){
           e.target.preventDefault();
           $scope.isTableVisible = !$scope.isTableVisible;
       }
    }]);

})();
