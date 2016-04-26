function greeter(person) {
    return "Hello, " + person;
}
var user = "Xolani";
document.body.innerHTML = greeter(user);
webApp.module('webApp', []);
var Controller1 = (function () {
    function Controller1($scope) {
        $scope.devs = [
            { 'name': 'Xolani' },
            { 'name': 'Terrah' },
            { 'name': 'Tinei' }
        ];
    }
    return Controller1;
}());
;
