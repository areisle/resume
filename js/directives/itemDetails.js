app.component('itemDetails', {
    bindings: {
        info: '=' // things we want pass to the controller from our html tag.
    },
    controllerAs: 'ctrl', // '$ctrl' is the default name but I think it looks ugly :)
    controller: function($scope) {
        var self = this;

        this.descriptionIsString = function() {
            // we can see self.info is a thing here because it's in the bindings
            return typeof(self.info.description) === 'string';
        }
    },
    templateUrl: 'js/directives/itemDetails.html'
});