
import angular from 'angular';

(function() {
    var app = angular.module('directs', []);
    app.directive('firstName', function(){
        return{
            restrict: 'E',
            template: require('./FirstName.html'),
        }
    });
    app.directive('lastName', function(){
        return{
            restrict: 'E',
            template: require('./LastName.html'),
        }
    });
    app.directive('eMail', function(){
        return{
            restrict: 'E',
            template: require('./Email.html'),
        }
    });
    app.directive('telNum', function(){
        return{
            restrict: 'E',
            template: require('./Tel.html'),
        }
    });
    app.directive('address', function(){
        return{
            restrict: 'E',
            template: require('./Address.html'),
        }
    });
    app.directive('city', function(){
        return{
            restrict: 'E',
            template: require('./City.html'),
        }
    });
    app.directive('state', function(){
        return{
            restrict: 'E',
            template: require('./State.html'),
        }
    });
    app.directive('zCode', function(){
        return{
            restrict: 'E',
            template: require('./ZipCode.html'),
        }
    });
    app.directive('webSite', function(){
        return{
            restrict: 'E',
            template: require('./Website.html'),
        }
    });
    app.directive('quiz', function(){
        return{
            restrict: 'E',
            template: require('./Quiz.html'),
        }
    });
    app.directive('dScription', function(){
        return{
            restrict: 'E',
            template: require('./Description.html'),
        }
    });
    app.directive('submit', function(){
        return{
            restrict: 'E',
            template: require('./Submit.html'),
        }
    });
    app.directive('userTable', function(){
        return{
            restrict: 'E',
            template: require('./Table.html'),
        }
    });
    app.directive('userForm', function(){
        return{
            restrict: 'E',
            template: require('./Form.html'),
        }
    });

})();
/**
 * Created by Роман on 23.08.2017.
 */
