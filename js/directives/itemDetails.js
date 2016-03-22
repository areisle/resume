app.directive('itemDetails', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        controllerAs: "ctrl",
        bindToController: true,
        controller: function(){
            var self = this;
            this.descriptionIsString = function () {
                return typeof self.info.description === 'string';
            };
        },
        templateUrl: 'js/directives/itemDetails.html'
        
    };
});