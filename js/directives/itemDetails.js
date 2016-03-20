app.directive('itemDetails', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/itemDetails.html'
    };
});