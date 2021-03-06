ngApp.factory("httpUtils", [ function() {

	// var baseUrl = "http://localhost:8080/webapp/";
	var baseUrl = getUrl() + "/platform/";
	var url = {
		menu : baseUrl+"menu",
		addUser : baseUrl + "user/add",
		modifyUser : baseUrl + "user/modify",
		deleteUser : baseUrl + "user/delete",
		userList : baseUrl + "user/getAll",
		userAddRoles: baseUrl + "user/userAddRoles",
		userModifyRoles: baseUrl + "user/userModifyRoles",
		addRole : baseUrl + "role/add",
		modifyRole : baseUrl + "role/modifyRole",
		deleteRole : baseUrl + "role/delete",
		getRoleAuthorityToModify : baseUrl +"role/getPermissionsByUserToModify",
		getExtraRole : baseUrl + "role/getExtraRole",
		addPermissions: baseUrl +"role/addPermissions",
		getPermissionsByUser: baseUrl +"role/getPermissionsByUser",
		modifyRoleAuthority : baseUrl + "role/modifyRoleAuthority",
		roleList : baseUrl + "role/getAll",
		authorityList : baseUrl + "authority/getAll",
		authorityListByRole : baseUrl + "authority/getAllByRole",
		categoryList : baseUrl + "category/getAll",
		categoryListExcept : baseUrl + "category/getAllExcept",
		getDisplayCategories: baseUrl + "category/getDisplayCategories",
		addCategory : baseUrl + "category/addCategory",
		modifyCategory : baseUrl + "category/modifyCategory",
		deleteCategory : baseUrl + "category/deleteCategory",
		sortCategory : baseUrl + "category/sortCategory",
		moduleUpload : baseUrl + "modules/upload",
		getInfoById : baseUrl + "info/getInfoById",
		addInfo : baseUrl + "info/addInfo",
		getInfoList : baseUrl + "info/getInfosByCategoryId",
		getCheckInfoList : baseUrl + "info/getCheckInfosByCategoryId",
		revocation : baseUrl + "info/revocation",
		modifyInfo : baseUrl + "info/modifyInfo",
		addWeight : baseUrl + "info/addWeight",
		deleteInfo : baseUrl + "info/deleteInfo",
		checkList : baseUrl + "info/getUncheckedInfo",
		getCommonInfos : baseUrl + "info/getCommonInfos",
		getInfosByCategoryIdForH5 : baseUrl + "info/getInfosByCategoryIdForH5",
		modifyCheckResult : baseUrl + "info/modifyCheckResult",
		getMyInfo : baseUrl + "getMyInfo"
	};

	function getUrl() {
		var url = window.location.protocol + "//" + window.location.host;
		return url;
	}

	var utils = {
		baseUrl : baseUrl,
		url : url
	};
	return utils;

} ]);
