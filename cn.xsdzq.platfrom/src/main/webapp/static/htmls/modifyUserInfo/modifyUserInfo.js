ngApp.$inject = ['$scope', '$http', '$state', 'httpUtils', 'layerUtils'];
function modifyUserInfoController($scope, $http, $state, httpUtils, layerUtils) {
	var username = $scope.user.username;
	$scope.user={};
	var data = {
			"one" : {
				name : "修改个人信息",
				goto:"userlist"
			},
		}
	$scope.$emit("changeNavigation", data);
	$scope.init=function(){
		console.log("modifyUserInfoController")
		$scope.getUserList();
	};

	$scope.getUserList = function() {
		$http.post(httpUtils.url.getMyInfo, username+"").success(function(data) {
			if (data.resCode == 0) {
				$scope.user = data.result;
				console.log($scope.user)
			}
		});
	}
	
	
	$scope.modifyUser =function(){
		var user=$scope.user;
		console.log(user);
		$state.go("modifyuser",{user:user});
	}

	$scope.submit = function() {
		
		var url = httpUtils.url.modifyUser;
		$http.post(url, $scope.user).success(function(data) {
			if (data.resCode == 0) {
				layerUtils.iMsg(-1,"修改成功");
			} else {
				layerUtils.iMsg(-1,"修改失败");
			}
		});
	};
}