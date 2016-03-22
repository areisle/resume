app.controller('MainController', ['$scope', function ($scope) {
    $scope.sections = [
        {
            title: "Related Skills",
            items:[
                {
                    location: "Technical",
                    description: ["description of duties point 1","description of duties point 2"] 
                }]
        },
        {
            title: "Work Experience",
            items:[
                {
                    location: "company",
                    title: "job title",
                    date: "date of employment 2",
                    description: "description of duties 2"
                }]
        }
    ]
}]);