	package com.example.demo.controllers;
	
	import org.springframework.beans.factory.annotation.Autowired;
	
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RequestMethod;
	import org.springframework.web.bind.annotation.RestController;
	
	import com.example.demo.entities.User;
	import com.example.demo.services.UserService;
	
	@RestController
	@RequestMapping("/users")
	public class UserController {
	
		  @Autowired
		  private UserService userService;
		  
		  @RequestMapping(value = "/{id}",  method = RequestMethod.GET)
		  public User getUser(@PathVariable Long id){
	
			  return userService.findUser(id);
		  }
				
		  @RequestMapping(value = "/add",  method={RequestMethod.POST, RequestMethod.PUT})
		  public User addUser(@RequestBody User user) {
			  
			  return userService.saveUser(user);
		  }
				
		  @RequestMapping(value = "/delete/{id}",  method = RequestMethod.DELETE)
		  public void deleteUserData(@PathVariable Long id) {
	
			  userService.deleteUserById(id);
		  }
	}