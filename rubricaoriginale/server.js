'use strict';

// Imitation of server - for testing purpose
angular.module('serverSide', ['ngMockE2E'])
        .run(['$httpBackend', function ($httpBackend) {
            var users = [
            { "RoleId": 464, "ImageAvater":20, "UserId": 100849, "NickName": "matt", "FirstName": "Tom", "LastName": "Blue", "Email": "matt@comp.com", "Telephone": null, "Mobilephone": "111222333", "CustCd": null, "CustId": 16, "Loccd": null, "IsLocked": true },
            { "RoleId": 463, "ImageAvater":20,"UserId": 100851, "NickName": "sale", "FirstName": "sale", "LastName": "sale", "Email": "sales@comp.com", "Telephone": null, "Mobilephone": "777111223",  "CustCd": null, "CustId": 15, "Loccd": null, "IsLocked": false },
            { "RoleId": 464, "ImageAvater":20, "UserId": 100853, "NickName": "novak", "FirstName": "Mark", "LastName": "Novak", "Email": "asa@asd.cz", "Telephone": null, "Mobilephone": "777888444", "CustCd": null, "CustId": 15, "Loccd": null, "IsLocked": false },
            { "RoleId": 465, "ImageAvater":20,"UserId": 100860, "NickName": "testadmin", "FirstName": "testadmin", "LastName": "testadmin", "Email": "test@test.cz", "Telephone": null, "Mobilephone": "777888999","CustCd": null, "CustId": null, "Loccd": null, "IsLocked": false },
            { "RoleId": 465, "ImageAvater":20,"UserId": 100861, "NickName": "admin", "FirstName": "admin", "LastName": "admin", "Email": "admin@comp.com", "Telephone": "777888999", "Mobilephone": "777888999",  "CustCd": null, "CustId": null, "Loccd": null, "IsLocked": false },
            { "RoleId": 464, "ImageAvater":20,"UserId": 100873, "NickName": "test", "FirstName": "test", "LastName": "test", "Email": "test@test.cz", "Telephone": null, "Mobilephone": "789456123",  "CustCd": null, "CustId": 16, "Loccd": null, "IsLocked": false },
            { "RoleId": 463, "ImageAvater":20,"UserId": 100874, "NickName": "testsale", "FirstName": "testsale", "LastName": "testsale", "Email": "testsale@test.cz", "Telephone": null, "Mobilephone": "789456123", "CustCd": null, "CustId": null, "Loccd": null, "IsLocked": false}];

            var roles = [{ "Text": "Friend", "Value": 463 }, { "Text": "Family", "Value": 464 }, { "Text": "Work Team", "Value": 465}];
            var custs = [{ "Text": "Male", "Value": 15 }, { "Text": "Female", "Value": 16}];
            var image = [{ "img.src": "C:\Users\Take off\Desktop\rubricaoriginale\image\borat.jpg", "Value": 20 }, { "Image": "C:\Users\Take off\Desktop\rubricaoriginale\image\borat.jpg", "Value": 21}];

            $httpBackend.whenPOST('/GetRoles').respond(function (method, url, data, headers) {
                var result = [200];
                result.push({ data: roles })
                return result;
            });
            $httpBackend.whenPOST('/GetCusts').respond(function (method, url, data, headers) {
                var result = [200];
                result.push({ data: custs })
                return result;
            });
            $httpBackend.whenPOST('/GetUsers').respond(function (method, url, data, headers) {
                var result = [200];
                result.push({ data: users })
                return result;
            });
            $httpBackend.whenPOST('/GetImage').respond(function (method, url, data, headers) {
                var result = [200];
                result.push({ data: image })
                return result;
            });
            $httpBackend.whenPOST('/EditUser').respond(function (method, url, data, headers) {
                var updatedUser = angular.fromJson(data);
                for (var i = 0; i < users.length; i++)
                    if (updatedUser.UserId === users[i].UserId) {
                        angular.extend(users[i], updatedUser);
                        var result = [200];
                        result.push({ data: users[i] })
                        return result;
                    }
            });
            $httpBackend.whenPOST('/AddUser').respond(function (method, url, data, headers) {
                var newUser = angular.fromJson(data);
                users.push(newUser);

                var result = [200];
                result.push({ data: newUser })
                return result;
            });
            $httpBackend.whenPOST('/DelUser').respond(function (method, url, data, headers) {
                var updatedUser = angular.fromJson(data);
                for (var i = 0; i < users.length; i++)
                    if (updatedUser.UserId === users[i].UserId) {
                        users.splice(i, 1);
                        var result = [200];
                        result.push({ data: users[i] })
                        return result;
                    }
            });
        } ]);