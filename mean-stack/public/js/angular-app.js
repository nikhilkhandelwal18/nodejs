angular.module('TestApp', []);

angular.module('TestApp')
        .controller('MainController', ctrlFunc);


function ctrlFunc() {
    this.message = 'hello';

    this.clientPeople = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jim Doe'
        }
    ];


    this.peopleFromServer = peopleFromServerGlobal;

}