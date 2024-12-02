package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.UserData;
import com.example.demo.services.UserDataService;

@RestController
@RequestMapping("/user_data")
public class UserDataController {

	  @Autowired
	  private UserDataService userDataService;
	  
	  @RequestMapping(value = "/{id}",  method = RequestMethod.GET)
		public UserData getUserData(@PathVariable Long id){

			return userDataService.findUserdata(id);
		}
		
		@RequestMapping(value = "/add",  method={RequestMethod.POST, RequestMethod.PUT})
		public UserData addUserData(@RequestBody UserData userData) {

			return userDataService.saveUserdata(userData);
		}
		
		@RequestMapping(value = "/delete/{id}",  method = RequestMethod.DELETE)

		public void deleteUserData(@PathVariable Long id) {

			userDataService.deleteUserdata(id);
		}
		
		@RequestMapping(value = "/update/{id}",  method = RequestMethod.PATCH)
		public UserData updateUserData(@PathVariable Long id, @RequestBody UserData userData) {
			
			UserData rserDataUpdated = userDataService.findUserdata(id);

			rserDataUpdated.setAge(userData.getAge());
			rserDataUpdated.setWeigth(userData.getWeigth());
			rserDataUpdated.setHeigth(userData.getHeigth());
			rserDataUpdated.setPhysicalActivity(userData.getPhysicalActivity());
			rserDataUpdated.setHealthIssues(userData.getHealthIssues());
			rserDataUpdated.setWaterDrank(userData.getWaterDrank());
			rserDataUpdated.setAllergy(userData.getAllergy());
			rserDataUpdated.setMotivation(userData.getMotivation());
			rserDataUpdated.setCurrentDate(userData.getCurrentDate());
			rserDataUpdated.setFoodPreferences(userData.getFoodPreferences());

			return rserDataUpdated;
		}
}
