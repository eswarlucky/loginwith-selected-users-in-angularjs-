/*login panel control*/
_innoApp.controller("loginStateCtrl", ["$scope", "$location", "authentication", function($scope, $location, authentication){
  
  $scope.isValid = null;
  
  var userData = [
    {name: "user1", passw: "pass"},
    {name: "admin", passw: "admin"},
    {name: "eswar", passw: "eswar"}    
  ];
  
  $scope.login = function(uVal, pVal){
    //console.log("User Name: "+uVal+", Password: "+pVal);
    for(i=0;i<userData.length;i++){
      if(userData[i].name == uVal && userData[i].passw == pVal){
        $location.url("home/page-home");
        authentication.user = uVal;
        $scope.isValid = false;
        break;
      }else{
        $scope.isValid = true;
      }
    }
  };

}]);

_innoApp.factory("authentication", function(){
  return {
    isAuthenticated: false,
    user: null

  }


});