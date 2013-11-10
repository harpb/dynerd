var DynerdListCtrl = function($scope, $localStorage, $sessionStorage) {
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
            address: '383 Castro St Mountain View, CA 94041'
            , hours: '11 am - 9 pm'
            , id: 1
            , phone: '(650) 209-0383'
            , price: '$$'
            , title: 'Steakout'
            , thumbnailUrl: 'images/restaurants/Burger1_SO_Med.jpg'
            , largeThumbnailUrl: 'images/restaurants/Burger1_SO_Large.jpg'
            , smallThumbnailUrl: 'images/restaurants/Burger1_SO_Small.jpg'
            , type: 'Burgers'
            , website: 'steakout.us'
            , yelp: 'http://www.yelp.com/biz/steakout-mountain-view'
        }
        , {
            address: '954 Villa St Mountain View, CA 94041'
            , hours: '11:30 am - 11 pm'
            , id: 2
            , phone: '(650) 965-2739'
            , price: '$$'
            , title: 'Tied House'
            , thumbnailUrl: 'images/restaurants/Burger2_TH_Med.jpg'
            , largeThumbnailUrl: 'images/restaurants/Burger2_TH_Large.jpg'
            , smallThumbnailUrl: 'images/restaurants/Burger2_TH_Small.jpg'
            , type: 'Burgers'
            , website: 'tiedhouse.com'
            , yelp: 'http://www.yelp.com/biz/tied-house-cafe-and-brewery-mountain-view'
        }
        , {
            address: '201 Castro St Mountain View, CA 94041'
            , hours: '8 am - 11 pm'
            , id: 3
            , phone: '(650) 967-4473'
            , price: '$'
            , title: 'Red Rock Coffee'
            , thumbnailUrl: 'images/restaurants/Coffee1_RR_Med.jpg'
            , largeThumbnailUrl: 'images/restaurants/Coffee1_RR_Large.jpg'
            , smallThumbnailUrl: 'images/restaurants/Coffee1_RR_Small.jpg'
            , type: 'Coffee'
            , website: 'redrockcoffee.org'
            , yelp: 'http://www.yelp.com/biz/red-rock-coffee-co-mountain-view'
        }
        , {
            address: '744 W Dana St Mountain View, CA 94041'
            , hours: '8 am - 11 pm'
            , id: 4
            , phone: '(650) 390-9638'
            , price: '$'
            , title: 'Dana Street Roasting'
            , thumbnailUrl: 'images/restaurants/Coffee2_DSR_Med.jpg'
            , largeThumbnailUrl: 'images/restaurants/Coffee2_DSR_Large.jpg'
            , smallThumbnailUrl: 'images/restaurants/Coffee2_DSR_Small.jpg'
            , type: 'Coffee'
            , website: 'danastreetroasting.com'
            , yelp: 'http://www.yelp.com/biz/dana-street-roasting-mountain-view'
        }
        , {
            address: '108 Castro St Mountain View, CA 94041'
            , hours: '11:30 pm - 10 pm'
            , id: 5
            , phone: '(650) 940-1717'
            , price: '$$'
            , title: 'Vaso Azzurro'
            , thumbnailUrl: 'images/restaurants/Italian1_VA_Med.jpg'
            , largeThumbnailUrl: 'images/restaurants/Italian1_VA_Large.jpg'
            , smallThumbnailUrl: 'images/restaurants/Italian1_VA_Small.jpg'
            , type: 'Italian'
            , website: 'vasoazzurro.com'
            , yelp: 'http://www.yelp.com/biz/ter%C3%BAn-palo-alto-3'
        }
        , {
            address: '448 S California Ave Palo Alto, CA 94306'
            , hours: '11:30 pm - 10 pm'
            , id: 6
            , phone: '(650) 600-8310'
            , price: '$$'
            , title: 'Terun'
            , thumbnailUrl: 'images/restaurants/Italian2_T_Med.jpg'
            , largeThumbnailUrl: 'images/restaurants/Italian2_T_Large.jpg'
            , smallThumbnailUrl: 'images/restaurants/Italian2_T_Small.jpg'
            , type: 'Italian'
            , website: 'terunpizza.com'
            , yelp: 'http://www.yelp.com/biz/ter%C3%BAn-palo-alto-3'
        }
        , {
            address: '165 E El Camino Real Mountain View, CA 94040'
            , hours: '11:30 am - 10 pm'
            , id: 7
            , phone: '(650) 965-1111'
            , price: '$'
            , title: 'Chaat Paradise'
            , thumbnailUrl: 'images/restaurants/Indian1_CP_Med.jpg'
            , largeThumbnailUrl: 'images/restaurants/Indian1_CP_Large.jpg'
            , smallThumbnailUrl: 'images/restaurants/Indian1_CP_Small.jpg'
            , type: 'Indian'
            , website: 'chaatparadise.com'
            , yelp: 'http://www.yelp.com/biz/chaat-paradise-mountain-view'
        }
        , {
            address: '357 Castro St Mountain View, CA 94041'
            , hours: '12 pm - 10:30 pm'
            , id: 8
            , phone: '(650) 965-2000'
            , price: '$$'
            , title: 'Sakoon'
            , thumbnailUrl: 'images/restaurants/Indian2_S_Med.jpg'
            , largeThumbnailUrl: 'images/restaurants/Indian2_S_Large.jpg'
            , smallThumbnailUrl: 'images/restaurants/Indian2_S_Small.jpg'
            , type: 'Indian'
            , website: 'sakoonrestaurant.com'
            , yelp: 'http://www.yelp.com/biz/sakoon-mountain-view-3#query:amber%20india'
        }
    ];
    var challenges = [
        {
            id: 1
            , 'title': 'Burgers'
            , 'iconClass': 'circle'
            , 'challenger': restaurants[0]
            , 'contender':  restaurants[1]
        }
        , {
            id: 2
            , 'title': 'Coffee'
            , 'iconClass': 'coffee'
            , 'challenger': restaurants[2]
            , 'contender':  restaurants[3]
        }
        , {
            id: 3
            , 'title': 'Italian'
            , 'iconClass': 'wrench'
            , 'challenger': restaurants[4]
            , 'contender':  restaurants[5]
        }
        , {
            id: 4
            , 'title': 'Indian'
            , 'iconClass': 'rupee'
            , 'challenger': restaurants[6]
            , 'contender':  restaurants[7]
        }
    ]
    var users = [
        {
            id: 1
            , name: 'Harp'
        }
        , {
            id: 2
            , name: 'Harpsie'
        }

    ]
    $scope.user = users[0]

    $scope.ratings = [
        {
            accepted: true
            , amount: {
                challenger: null
                , challenger_created: 'Nov 10, 2013'
                , contender: null
                , contender_created: 'Nov 10, 2013'
            }
            , contenderWin: true
            , challenge: challenges[0]
            , challengeId: 1
            , completed: false
            , created: 'Nov 3, 2013'
            , id: 1
            , userId:1
        }
    ]

    $scope.tinderChallenge = function(){
        var availableChallenge = _.find(challenges, function(item){
            ratingExists = _.where($scope.ratings, {
                challengeId: item.id
                , userId: $scope.user.id
            });
            console.info('ratingExists: ', ratingExists, item, item.id, $scope.user.id)
            return !ratingExists.length
        });
        console.info('availableChallenge', availableChallenge)
        return availableChallenge
    }

    $scope.activeRatings = function(){
        var unfinishedChallenges = _.where($scope.ratings, {
            accepted: true
            , completed: false
            , userId: $scope.user.id
        })
        return unfinishedChallenges
    }

    $scope.completedRatings = function(){
        var finishedChallenges = _.where($scope.ratings, {
            completed: true
            , userId: $scope.user.id
        })
        console.info('finishedChallenges', finishedChallenges)
        return finishedChallenges
    }

    $scope.myChallengeToAdd = function(){
        console.info('myChallengeToAdd', MAX_MY_CHALLENGES);
        var available = [];
        for(var i = $scope.activeRatings().length; i < MAX_MY_CHALLENGES; i++)
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
//    $scope.challengeId = 0;
//    var selectTinderChallenge = function(){
//        console.info('selectTinderChallenge', $scope.challengeId)
//        $scope.tinderChallenge = $scope.challenges[$scope.challengeId]
//    }
    $scope.tinderView = function(){
        if($scope.activeRatings().length == MAX_MY_CHALLENGES){
            $scope.eatView();
            return
        }
        $scope.selectedView = TINDER;
        $scope.openChallenge = $scope.tinderChallenge();
        $scope.showHeader = true;
        $scope.showFooter = false;
    }
    var createRating = function(challenge, accepted){
        var newRatingId = _.last($scope.ratings).id + 1;
        var rating = {
            accepted: accepted
            , challenge: challenge
            , challengeId: challenge.id
            , completed: false
            , created: 'Nov 3, 2013'
            , id: newRatingId
            , userId: $scope.user.id
            , amount: {
                challenger: null
                , contender: null
            }
        }
        $scope.ratings.push(rating)
    }
    $scope.declineChallenge = function(){
        createRating($scope.openChallenge, false);
        $scope.tinderView()
    }
    $scope.acceptChallenge = function(){
        createRating($scope.openChallenge, true);
        $scope.tinderView()
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
    $scope.rateChallengeView = function(rating){
        $scope.activeRating = rating;
        $scope.selectedView = RATE_CHALLENGE;
        $scope.showHeader = false;
        $scope.showFooter = true;

        $scope.$watch('activeRating.amount.challenger', function(newValue, oldValue) {
            console.info('watch challenger')
            if(!$scope.activeRating){
                return false
            }
            console.info('watch challenger', $scope.activeRating)
            $scope.activeRating.amount.challenger_created = 'Nov 10, 2013';
            $scope.checkRatingCompleted()
        });
        $scope.$watch('activeRating.amount.contender', function(newValue, oldValue) {
            if(!$scope.activeRating){
                return false
            }
            console.info('watch contender', $scope.activeRating)
            $scope.activeRating.amount.contender_created = 'Nov 10, 2013';
            $scope.checkRatingCompleted()
        });
    }

    $scope.checkRatingCompleted = function(){
        if(!$scope.activeRating.amount.challenger || !$scope.activeRating.amount.contender){
            return false;
        }

        $scope.completedChallenge($scope.activeRating);
    };

    // Completed Challenge
    $scope.detailsView = function(challenge, justCompleted){
        $scope.selectedView = DETAILS;
        $scope.activeRating = challenge;
        $scope.showHeader = true;
        $scope.showFooter = true;
        if(justCompleted == undefined){
            $scope.justCompleted = false;
        }
    }
    $scope.completedChallenge = function(challenge){
        challenge.completed = true;
        $scope.justCompleted = true;
        $scope.detailsView(challenge, true);
    }

    /**
     * Initialize
     */
//    $scope.tinderView()
//    $scope.eatView()
//    $scope.rateChallengeView($scope.ratings[0])
    $scope.completedChallenge($scope.ratings[0])
//      $scope.ateView()
}

/**
 * Dynerd Module
 */
dynerdApp = angular.module('dynerdApp', ['ngStorage']);

//whoisApp.config(function(RestangularProvider) {
//    return RestangularProvider.setBaseUrl('/scrapbook/api/v1/');
//});
//
//whoisApp.config(function($interpolateProvider) {
//    $interpolateProvider.startSymbol('{$');
//    return $interpolateProvider.endSymbol('$}');
//});

dynerdApp.controller('DynerdListCtrl', DynerdListCtrl);


/**
SEMANTIC UI
**/
// RATING
dynerdApp.directive("semanticRating", function() {
    var directive = {
        require: "ngModel",
        scope: {
            ngModel: '='
        },
        link: function(scope, element, attrs, ctrl) {
            $parentScope = element.parent().scope()
            var onRate = function (amount){
                console.info('onRate', amount)
                scope.ngModel = amount;
//                $parentScope.$digest()
//                $parentScope.activeRatingUpdated(scope.ngModel, amount)
            }
            ctrl.$render = function() {
                this.rating = element.rating({
                    initialRating: scope.ngModel
                    , onRate: onRate
                })
            };
        }
    };
    return directive;
});

// SHAPE
dynerdApp.directive("semanticCube", function() {
    var directive = {
        link: function(scope, element, attrs, ctrl) {
//            console.info('link semanticCube', scope, element, attrs, ctrl)
            this.last = true;
            var bind = function($event){
                console.info('semanticCube bind', this.last, arguments, $event.target.localName)
                var targetTagName = $event.target.localName
                if(targetTagName == 'a'){
                    return;
                }
                this.last = !this.last;
                if(this.last){
                    element.shape('flip right');
                }
                else{
                    element.shape('flip left');
                }
            }
            element.bind("click", bind);
        }
    };
    return directive;
});