app.controller('MainController', ['$scope', function ($scope) {
    $scope.sections = [
        {
            title: "Example Section Title",
            item:
                {
                    location: "some company",
                    title: "some job title",
                    date: "date of employment",
                    description: "description of duties"
                }
        },
        {
            title: "Example Section Title 2",
            item:
                {
                    location: "some company 2",
                    title: "some job title 2",
                    date: "date of employment 2",
                    description: "description of duties 2"
                }
        }
    ]
}]);