function greeter(person) {
    return "Hello, " + person;
}

var user = "Xolani";

document.body.innerHTML = greeter(user);


declare var webApp;

webApp.module('webApp', []);

class Controller1 {
    constructor($scope) {
        $scope.devs = [
            { 'name': 'Xolani' },
            { 'name': 'Terrah' },
            { 'name': 'Tinei' }
        ];
    }

};