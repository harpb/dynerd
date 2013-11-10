DynerdListCtrl = function($scope) {
    console.info('Scope', $scope)
    var EAT = 'EAT',
        ATE = 'ATE',
        TINDER = 'TINDER';
    $scope.selectedView = TINDER;
    $scope.showMenu = true;
    $scope.showFooter = false;

    $scope.eatView = function(){
        $scope.selectedView = EAT;
        $scope.showFooter = true;
//        $scope.showMenu = false;
    }

    $scope.ateView = function(){
        $scope.selectedView = ATE;
        $scope.showFooter = true;

//        $scope.showMenu = false
    }
    var placeHold = 'http://placehold.it/117x125'
    var largeThumbnail = 'http://placehold.it/320x160'
    var restaurants = [
        {
            title: 'Peet\'s Coffee'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , iconClass: 'coffee'
        }
        , {
            title: 'Starbucks'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , iconClass: 'coffee'
        }
        , {
            title: 'Pizza #1'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , iconClass: 'wrench'
        }
        , {
            title: 'Pizza #2'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , iconClass: 'wrench'
        }
        , {
            title: 'New Delhi'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , iconClass: 'rupee'
        }
        , {
            title: 'Old Delhi'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , iconClass: 'rupee'
        }
    ];
    var coffeeChallenge = {
        'title': 'Coffee'
        , 'iconClass': 'coffee'
        , 'challenger': restaurants[0]
        , 'contender':  restaurants[1]
    };
    var italianChallenge = {
        'title': 'Italian'
        , 'iconClass': 'wrench'
        , 'challenger': restaurants[0]
        , 'contender':  restaurants[1]
    };
    var indianChallenge = {
        'title': 'Indian'
        , 'iconClass': 'rupee'
        , 'challenger': restaurants[0]
        , 'contender':  restaurants[1]
    };
    $scope.challenges = [
        coffeeChallenge
        , italianChallenge
        , indianChallenge
    ]
    $scope.myChallenges = [
        indianChallenge
        , italianChallenge
        , coffeeChallenge
    ]

    /**
     * TINDER VIEW
     */
    $scope.challengeId = 0;
    var selectTinderChallenge = function(){
        console.info('selectTinderChallenge', $scope.challengeId)
        $scope.tinderChallenge = $scope.challenges[$scope.challengeId]
    }
    $scope.tinderView = function(){
        selectTinderChallenge()
    }
    $scope.declineChallenge = function(){
        $scope.challengeId += 1;
        selectTinderChallenge();
    }
    $scope.acceptChallenge = function(){
        $scope.challengeId += 1;
        selectTinderChallenge();
    }

    /**
     * Initialize
     */
//    $scope.tinderView()
    $scope.eatView()
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
