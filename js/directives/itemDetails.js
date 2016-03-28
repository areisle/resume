
app.component('itemDetails', {
    bindings: {
        info: '=' // things we want pass to the controller from our html tag.
    },
    controllerAs: 'ctrl', // '$ctrl' is the default name but I think it looks ugly :)
    controller: function($http) {
        var self = this;

        this.http = $http;
        this.albums = [];

        this.http.get('/api/albums').then(
                function(response) {
                    self.albums = response.data;
                },
                function(error) {
                    console.log(error);
                }
            );

        this.descriptionIsString = function() {
            // we can see self.info is a thing here because it's in the bindings
            return typeof(this.info.description) === 'string';
        }
    },
    templateUrl: 'js/directives/itemDetails.html'
});