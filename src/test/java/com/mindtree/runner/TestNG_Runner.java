package com.mindtree.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features ="features",
		glue="com.mindtree.stepDefinition"
       	
)
public class TestNG_Runner extends AbstractTestNGCucumberTests
{
	
	
	
	
}

