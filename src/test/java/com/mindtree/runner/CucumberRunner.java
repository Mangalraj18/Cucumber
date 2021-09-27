package com.mindtree.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features ="features",
			glue="com.mindtree.stepDefinition",
	        plugin= {"html:target/cucumber-reports.html"})
	public class CucumberRunner 
	{
	
	}

