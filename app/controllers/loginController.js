app.controller('loginController', function ($scope, $rootScope, CommonUtility) {


    $rootScope.loginButtonText = "LOGIN";

    $scope.username = "mdmansoor.k@maybank.com";
    $scope.password = "Maybank@12";
    $scope.valid = true;
    $scope.error_message = "Invalid email or password";
    $scope.redirect = function (loginForm) {
        if (loginForm.$invalid)
            $scope.valid = false;
        else {
            $rootScope.loginButtonText = "Logging in...";
            $.ajax({
                //                xhrFields: {
                //                    withCredentials: true
                //                },
                headers: {
                    'Authorization': "Basic " + btoa($scope.username + ":" + $scope.password)
                },
                datatype: 'json',
                data: "{ }",
                type: "GET",
                url: CommonUtility.server_url + "_api/sp.userprofiles.peoplemanager/getmyproperties",
                success: function (data) {
                    $rootScope.loggedIn = true;
                    $rootScope.u = $scope.username;
                    $rootScope.p = $scope.password;
                    window.location = "#/home";
                    var results;
                    var divHTML = '';
                    var Picurl;

                    if (data.d) {
                        if (data.d.query)
                            var users = new Array();
                        results = data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
                    }
                },
                error: function (data) {


                    if (data.status == 401)
                        $scope.error_message = "Invalid email or password";
                    else
                        $scope.error_message = "Sorry, we are having some temporary server issue. Please try after some time";

                    $rootScope.loginButtonText = "LOGIN";
                    $scope.password = "";
                    $scope.valid = false;
                    $rootScope.$apply();
                }
            });
        }
    }

    $scope.init = function () {
        if ($rootScope.loggedIn == true)
            window.location = "#/home";
        else
            $rootScope.loggedIn = false;
    }
});
