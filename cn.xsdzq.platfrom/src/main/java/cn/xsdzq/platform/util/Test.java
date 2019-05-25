package cn.xsdzq.platform.util;

import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

public class Test {
	public static void main(String[] args) {
		TestUser u = new TestUser();
		u.setAge("1");
		u.setName("tom");
		
		TestUser u1 = new TestUser();
		u1.setAge("2");
		u1.setName("zhangsan");
		
		List<TestUser> list = new ArrayList<TestUser>();
		list.add(u);
		list.add(u1);
		String s1 = JSON.toJSONString(u);  

		String s = JSON.toJSONString(list);  
		System.out.println(s1);
		System.out.println(s);
		
		//-----
		JSONObject json = JSON.parseObject(s1); 
		
		String  name = json.getString("name");
		
		String  age =  json.getString("age");
		u.setAge(name);
		u.setName(age);
		
		System.out.println(name);
		System.out.println(age);
	}
}
