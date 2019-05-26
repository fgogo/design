package cn.xsdzq.platform.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.xsdzq.platform.dao.UserRepository;
import cn.xsdzq.platform.entity.UserEntity;

/**
 * 登录的Service层
 * @author fugg9
 *
 */

@Service
public class UserLoginService {
	@Resource
	private UserRepository userRepository;
	
	public UserEntity getUserInfo(String username) {
		return userRepository.findUserByName(username);
	}
	
}
