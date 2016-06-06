/*questions hide show control*/
_innoApp.controller("Questionctrl", ["$scope","$http", function($scope,$http) {
  
   $scope.lists = [];
   var tempIndex = 0;
   $http({
    url:'faq.json',
    method:'get',
  }).success(function(resp){
    $scope.questionList = resp;        
  
  })
    
	  $scope.custom = false;
  
	 $scope.addQuestion = function(){
		 //qusetionText
		 if (angular.isDefined($scope.qusetionText) && $scope.qusetionText != '') 
			{
				// ADD A NEW ELEMENT.
				$scope.lists.push({ question: $scope.qusetionText, answer: null });
				// CLEAR THE FIELDS.
				$scope.qusetionText = '';
			}
	 };
	 
	 $scope.qusetionClick = function(aVal){
		 tempIndex = aVal;
	 }
	 
	 $scope.addAnswer = function(){
		 //answerText
		 if (angular.isDefined($scope.answerText) && $scope.answerText != '') 
			{
				// ADD A NEW ELEMENT.
				//$scope.lists.push({ name: $scope.answerText, answer: null });

				$scope.lists[tempIndex].answer = $scope.answerText;
				// CLEAR THE FIELDS.
				$scope.answerText = '';
				$scope.questionList.push($scope.lists[tempIndex]);
				$scope.lists.splice(tempIndex, 1);
			}
	 };
	 
	 
}]);
