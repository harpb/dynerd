DynerdListCtrl = function($scope) {
    console.info('Scope', $scope)
}

/**
 * Dynerd Module
 */
dynerdApp = angular.module('dynerdApp', []);

//whoisApp.config(function(RestangularProvider) {
//    return RestangularProvider.setBaseUrl('/scrapbook/api/v1/');
//});
//
//whoisApp.config(function($interpolateProvider) {
//    $interpolateProvider.startSymbol('{$');
//    return $interpolateProvider.endSymbol('$}');
//});

dynerdApp.controller('DynerdListCtrl', DynerdListCtrl);
