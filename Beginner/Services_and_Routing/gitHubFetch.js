// (function() {
    
    var github = function($http) {
        
        var getUser = function(username) {
            return $http.get("http://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data;
                });
        };
        
        var getRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data;
            });
        }
        
        return {
            getUser: getUser,
            getRepos: getRepos
        };

    };

    var module = angular.module("gitHubApp");
    // below registers the service we just created and whenever the program calls github, it will return getUser and getRepos
    module.factory("github", github);
// }());
