app.controller('MainController', ['$scope', function ($scope) {
    $scope.sections = [
        {
            title: "Related Skills",
            item:
                {
                    location: "Technical",
                    date: "date of employment",
                    description: ["description of duties"] 
                }
        },
        {
            title: "Work Experience",
            item:
                {
                    location: "company",
                    title: "job title",
                    date: "date of employment 2",
                    description: "description of duties 2"
                }
        }
    ]
}]);