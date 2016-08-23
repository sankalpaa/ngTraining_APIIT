var app = angular.module('addressBook', []);

app.controller('createAddressBook', function($scope, addressBookService) {
    $scope.title = 'Address Book';
    $scope.save = function(firstName, lastName, email) {
        addressBookService.saveAddress(firstName, lastName, email);
    };
});

app.controller('searchAddress', function (addressBookService, $scope) {
    $scope.addressBook= addressBookService.getAddresses();
});

app.service('addressBookService', function() {
    var addressBook = [];
    return {
        saveAddress : function(firstName, lastName, email) {
            addressBook.push({
                firstName: firstName,
                lastName: lastName,
                email: email
            });
        },
        getAddresses : function() {
            return addressBook;
        }
    }

});
