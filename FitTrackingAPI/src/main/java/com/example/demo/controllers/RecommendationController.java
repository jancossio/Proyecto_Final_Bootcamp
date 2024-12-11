package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Recommendation;
import com.example.demo.services.RecomendationService;

@RestController
@RequestMapping("/recommendations")
public class RecommendationController {

    @Autowired
    private RecomendationService recommendationService;
    
    @RequestMapping(value = "all/{id}",method = RequestMethod.GET)
	public List<Recommendation> getRecommendationsByUser(@PathVariable Long id){

		return recommendationService.findRecommendationsByUser(id);
	}
	
	@RequestMapping(value = "/{id}",  method = RequestMethod.GET)
	public Recommendation getRecommendation(@PathVariable Long id){

		return recommendationService.findRecomendation(id);
	}
	
	@RequestMapping(value = "/add",  method={RequestMethod.POST, RequestMethod.PUT})
	public Recommendation addRecommendation(@RequestBody Recommendation recomendation) {

		return recommendationService.saveRecomendation(recomendation);
	}
	
	@RequestMapping(value = "/delete/{id}",  method = RequestMethod.DELETE)

	public void deleteRecommendation(@PathVariable Long id) {

		recommendationService.deleteRecomendation(id);
	}
	
	@RequestMapping(value = "/update/{id}",  method = RequestMethod.PATCH)
	public Recommendation updateRecommendation(@PathVariable Long id, @RequestBody Recommendation recommendation) {
		
		Recommendation recommendationUpdated = recommendationService.findRecomendation(id);

		recommendationUpdated.setDescription(recommendation.getDescription());
		recommendationUpdated.setPhysicalActivityReference(recommendation.getPhysicalActivityReference());
		recommendationUpdated.setWeigthReference(recommendation.getWeigthReference());
		
		return recommendationUpdated;
	}
}
