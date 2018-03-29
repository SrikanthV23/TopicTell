var myApp=angular.module("signUpApp",[]);
myApp.controller("signUpController",function($scope) {
    $scope.validateForm=function(isValid) {
        useName = $scope.userName;
        userEmail = $scope.userEmail;
        userPasword = $scope.userPwd;
        userconfirmPassword = $scope.conUserPwd;
    if(!isValid){
        alert("Please fill the fields");
    }
    else {
      if(userPasword != userconfirmPassword ){
        alert("enter same password");
        $scope.userPwd = "";
        $scope.conUserPwd = "";
        return;
      }
      $scope.getData={
          'User Name': useName,
          'User Email': userEmail,
          'User Password': userPasword,
          'User Confirm Password': userconfirmPassword
      }
    }
   }
});