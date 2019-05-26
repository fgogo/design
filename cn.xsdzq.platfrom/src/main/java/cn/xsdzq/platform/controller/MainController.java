package cn.xsdzq.platform.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

import cn.xsdzq.platform.entity.UserEntity;
import cn.xsdzq.platform.service.IMainService;
import cn.xsdzq.platform.service.IUserService;
import cn.xsdzq.platform.service.UserLoginService;
import cn.xsdzq.platform.util.GsonUtil;
import cn.xsdzq.platform.util.UserManageUtil;
import cn.xsdzq.platform.util.UserUtil;

@Controller
@RequestMapping("/")
public class MainController {

	@Autowired
	@Qualifier("mainServiceImpl")
	private IMainService mainService;

	@Autowired
	@Qualifier("userServiceImpl")
	private IUserService userService;
	
	@Resource
	private UserLoginService userLoginService;

	@RequestMapping(value = "/menu", method = GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public Map<String, Object> getMenu() {
		User user = UserManageUtil.getUser();
		String name = user.getUsername();
		UserEntity userEntity = userService.findUserByName(name);
		JSONObject menu = mainService.getMenu(userEntity);
		// 接口合并用户信息
		menu.put("user", UserUtil.convertUserDTOByUserEntityToMain(userEntity));
		return GsonUtil.buildMap(0, "ok", menu);
	}
	

	
	/**
	 * 获取我的信息
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getMyInfo", method = POST)
	@ResponseBody
	public Map<String, Object> getUserInfo(@RequestBody String username) {
		// @RequestParam("username") String username
		System.out.println(username);
//		userLoginService.getUserInfo(username)
		return GsonUtil.buildMap(0, "ok", userLoginService.getUserInfo(username));
	}

}
