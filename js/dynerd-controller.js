DynerdListCtrl = function($scope, $localStorage) {
    console.info('Scope', $scope)
    var EAT = 'EAT'
        , ATE = 'ATE'
        , RATE_CHALLENGE = 'RATE_CHALLENGE'
        , DETAILS = 'DETAILS'
        , TINDER = 'TINDER';
    $scope.selectedView = TINDER;
    $scope.showMenu = true;
    $scope.showFooter = false;
    MAX_MY_CHALLENGES = 3

//    $scope.$storage = $localStorage.$default({
//        restaurants: restaurants,
//        challenges: $scope.challenges
//    });

    var placeHold = 'http://placehold.it/120x125'
    var smallPlaceHold = 'http://placehold.it/120x62'
    var largeThumbnail = 'http://placehold.it/320x160'
    var restaurants = [
        {
            title: 'Peet\'s Coffee'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , smallThumbnailUrl: smallPlaceHold
            , iconClass: 'coffee'
        }
        , {
            title: 'Starbucks'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , smallThumbnailUrl: smallPlaceHold
            , iconClass: 'coffee'
        }
        , {
            title: 'Pizza #1'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , smallThumbnailUrl: smallPlaceHold
            , iconClass: 'wrench'
        }
        , {
            title: 'Pizza #2'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , smallThumbnailUrl: smallPlaceHold
            , iconClass: 'wrench'
        }
        , {
            title: 'New Delhi'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , smallThumbnailUrl: smallPlaceHold
            , iconClass: 'rupee'
        }
        , {
            title: 'Old Delhi'
            , thumbnailUrl: placeHold
            , largeThumbnailUrl: largeThumbnail
            , smallThumbnailUrl: smallPlaceHold
            , iconClass: 'rupee'
        }
    ];
    var contenderRating = {
        amount: 2
        , created: 'Nov 3, 2013'
    }
    var challengerRating = {
        amount: 4
        , created: 'Nov 5, 2013'
    }
    var coffeeChallenge = {
        'title': 'Coffee'
        , 'iconClass': 'coffee'
        , 'challenger': restaurants[0]
        , 'contender':  restaurants[1]
        , ratings: {
            challenger: challengerRating
            , contender: contenderRating
            , contenderWin: false
        }
    };
    var italianChallenge = {
        'title': 'Italian'
        , 'iconClass': 'wrench'
        , 'challenger': restaurants[0]
        , 'contender':  restaurants[1]
        , ratings: {
            challenger: challengerRating
            , contender: contenderRating
            , contenderWin: true
        }
    };
    var indianChallenge = {
        'title': 'Indian'
        , 'iconClass': 'rupee'
        , 'challenger': restaurants[0]
        , 'contender':  restaurants[1]
        , ratings: {
            challenger: challengerRating
            , contender: contenderRating
            , contenderWin: true
        }
    };
    $scope.challenges = [
        coffeeChallenge
        , italianChallenge
        , indianChallenge
    ]
    $scope.myChallenges = [
        indianChallenge
        , italianChallenge
    ]

    $scope.completedChallenges = [
        coffeeChallenge
        , indianChallenge
        , italianChallenge
    ]

    $scope.myChallengeToAdd = function(){
        console.info('myChallengeToAdd', MAX_MY_CHALLENGES);
        var available = [];
        for(var i = $scope.myChallenges.length - 1; i < MAX_MY_CHALLENGES; i++)
        {
            var num = i + 1;
            available.push(num)
        }
        console.info('available', available)
        return available;
    }
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
        $scope.showHeader = true;
        $scope.showFooter = false;
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
     * VIEWS
     */
    $scope.eatView = function(){
        $scope.selectedView = EAT;
        $scope.showHeader = true;
        $scope.showFooter = true;
//        $scope.showMenu = false;
    }

    $scope.ateView = function(){
        $scope.selectedView = ATE;
        $scope.showHeader = true;
        $scope.showFooter = true;

//        $scope.showMenu = false
    }

    // Open Challenge
    $scope.rateChallengeView = function(challenge){
        $scope.openedChallenge = challenge;
        $scope.selectedView = RATE_CHALLENGE;
        $scope.showHeader = false;
        $scope.showFooter = true;
        console.info('rateChallengeView', challenge, $('.ui.rating'))
        $('.ui.rating')
            .rating()
    }

    // Completed Challenge
    $scope.detailsView = function(challenge, justCompleted){
        $scope.selectedView = DETAILS;
        $scope.openedChallenge = challenge;
        $scope.showHeader = true;
        $scope.showFooter = true;
        if(justCompleted == undefined){
            $scope.justCompleted = false;
        }
    }
    $scope.completedChallenge = function(challenge){
        $scope.justCompleted = true;
        $scope.detailsView(challenge, true);
    }

    /**
     * Initialize
     */
//    $scope.tinderView()
    $scope.eatView()
//    $scope.rateChallengeView($scope.challenges[0])
//    $scope.completedChallenge($scope.challenges[0])
//      $scope.ateView()
}

/**
 * Dynerd Module
 */
dynerdApp = angular.module('dynerdApp', [$localStorage, $sessionStorage]);

//whoisApp.config(function(RestangularProvider) {
//    return RestangularProvider.setBaseUrl('/scrapbook/api/v1/');
//});
//
//whoisApp.config(function($interpolateProvider) {
//    $interpolateProvider.startSymbol('{$');
//    return $interpolateProvider.endSymbol('$}');
//});

dynerdApp.controller('DynerdListCtrl', DynerdListCtrl);
