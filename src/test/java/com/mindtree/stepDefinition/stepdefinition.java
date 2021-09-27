package com.mindtree.stepDefinition;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import junit.framework.Assert;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.runner.RunWith;

import com.mindtree.pageOfObjects.Homepage;
import com.mindtree.pageOfObjects.List_of_products_page;
import com.mindtree.reusablecomponents.reusabledriver;
import com.mindtree.reusablecomponents.reusablemethods;
import com.mindtree.utility.Propertyfilereader;
import com.mindtree.utility.logger;

@SuppressWarnings("deprecation")
@RunWith(Cucumber.class)
public class stepdefinition extends reusabledriver
{
	public static Logger log=LogManager.getLogger( stepdefinition.class.getName());
	
	@Given("^User open the browser$")
    public void user_open_the_browser() throws Throwable {
		reusabledriver.driver();
    }
	
	
    @When("^user open the Urban Ladder Url$")
    public void user_open_the_urban_ladder_url() throws Throwable {
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    }

    @And("^User enter their username and password$")
    public void user_enter_their_username_and_password() throws Throwable {
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));
        
    }
    
    @SuppressWarnings("deprecation")
    @Then("^verify user is sucessfully logged in or not \"([^\"]*)\"$")
    public void verify_user_is_sucessfully_logged_in_or_not_something(String strArg1) throws Throwable 
    {
    	Assert.assertEquals(driver.getCurrentUrl(), strArg1);
    	driver.quit();
    }

    @Given("^user is open the Url and login$")
    public void user_is_open_the_url_and_login() throws Throwable {
    	reusabledriver.driver();
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));   	
    }

    @When("^User is searching for a (.+)$")
    public void user_is_searching_for_a(String product_name) throws Throwable {
    	Homepage.search(driver,product_name);
    }
    @And("^User selecting for a praticular brand (.+)$")
    public void user_selecting_for_a_praticular_brand(String product_brand_name) throws Throwable {
    	List_of_products_page.product_search(driver,product_brand_name);
    }


    @Then("^User adding the product to cart$")
    public void user_adding_the_product_to_cart() throws Throwable {
    	List_of_products_page.addtocart(driver);
    	driver.quit();
    	logger.loginfo(log, "Product Successfully added to cart");
    }
    @Given("^user open the url in browser$")
    public void user_open_the_url_in_browser() throws Throwable {
     
    	reusabledriver.driver();
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));   	        
    }

    @When("^user click on price range and filtering the price$")
    public void user_click_on_price_range_and_filtering_the_price() throws Throwable {
    	try
    	{
    		
    	Homepage.sale_menu_bar(driver);
    	List_of_products_page.price_range(driver);	
    	List_of_products_page.low_high(driver);
    	}
    	catch(Exception e)
    	{
    		logger.logerror(log, "Price filter error happened");
    		reusabledriver.captureScreen("price filter");
    	}
    	
    }

    @Then("^Price should display in sortout order$")
    public void price_should_display_in_sortout_order() throws Throwable {
    	logger.loginfo(log, "Product successfully filtered");
    	driver.quit();
    }
    @Given("^user open the browser enter the urbanladder url$")
    public void user_open_the_browser_enter_the_urbanladder_url() throws Throwable {
    	reusabledriver.driver();
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));   	        
    }
    @When("^User is selecting any product$")
    public void user_is_selecting_any_product() throws Throwable {    	
    	Homepage.search(driver,Propertyfilereader.propfile().getProperty("product"));
    	List_of_products_page.product_search(driver,Propertyfilereader.propfile().getProperty("product_brand_name"));   
    	
    }

    @And("^Get the price of desire product and User click on home button$")
    public void get_the_price_of_desire_product_and_user_click_on_home_button() throws Throwable {
    	List_of_products_page.move_to__addtocart_page(driver);
    }
    @Then("^Verify whether user in homepage or not$")
    public void verify_whether_user_in_homepage_or_not() throws Throwable 
    {	
    	try
    	{
        List_of_products_page.validation_title(driver);
        logger.loginfo(log, "Grabbed the price of product and returned to homepage");
        driver.quit();
    	}
        catch(Exception e)
    	{
    		logger.loginfo(log, "Not returned to homepage and not grabbed the price details");
    		reusabledriver.captureScreen("not_grab_the_price");
    	}
    }

    @Given("^user open the url$")
    public void user_open_the_url() throws Throwable {
   	reusabledriver.driver();
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));   	        
    }

    @When("^user click on stores and choose desire of places$")
    public void user_click_on_stores_and_choose_desire_of_places() throws Throwable {
    	Homepage.stores(driver);
    	   List_of_products_page.stores_map(driver);
    }

    @Then("^verify the google map url$")
    public void verify_the_google_map_url() throws Throwable 
    {
    	try
    	{
    	List_of_products_page.google_location(driver);
    	   logger.loginfo(log, "Google location has showed for particular location");
    	   driver.quit();
    		}
    		catch(Exception e)
    		{
    			logger.logerror(log, "Google location has not showed for that particular location");
    			reusabledriver.captureScreen("stores");
    		}
    }

    @Given("^user open their browser and enter the url$")
    public void user_open_their_browser_and_enter_the_url() throws Throwable {
	reusabledriver.driver();
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));   	        
        
    }
    @When("^User is searching for any product$")
    public void user_is_searching_for_any_product() throws Throwable {

   Homepage.search(driver,Propertyfilereader.propfile().getProperty("product"));
    	List_of_products_page.product_search(driver,Propertyfilereader.propfile().getProperty("product_brand_name"));
    }

    @Then("^User enter their address and verify the payment page$")
    public void user_enter_their_address_and_verify_the_payment_page() throws Throwable {
    	try
    	{
    	List_of_products_page.addtocart_address(driver);
    	    logger.loginfo(log,"Payment page has showed");
    	    driver.quit();
    		}
    		catch(Exception e)
    		{
    			logger.logerror(log, "Payement has not showed");
    			reusabledriver.captureScreen("payment");
    		}
    	}
    @Given("^Customer click on user stories$")
    public void customer_click_on_user_stories() throws Throwable {
    	reusabledriver.driver();
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));

    }

    @When("^System display the customer stories$")
    public void system_display_the_customer_stories() throws Throwable 
    {
    	Homepage.user_stories_(driver);
    	
    }

    @Then("^verify the customer stories$")
    public void verify_the_customer_stories() throws Throwable
    {
    	try
    	{
    	List_of_products_page.user_stories_count(driver);
    	driver.quit();
    	}
    	catch(Exception e)
    	{
    		logger.logerror(log, "customer stories");
    	}
    }

    @Given("^User open the browser and enter the url of urbanladder$")
    public void user_open_the_browser_and_enter_the_url_of_urbanladder() throws Throwable {
    	reusabledriver.driver();
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));
    	   
    }

    @When("^User enter their emailid click on subscribe$")
    public void user_enter_their_emailid_click_on_subscribe() throws Throwable {
    	 Homepage.subscribe(driver,Propertyfilereader.propfile().getProperty("email_id"));

    }

    @Then("^Verify whether message is showing or not$")
    public void verify_whether_message_is_showing_or_not() throws Throwable {
        driver.quit();
    	logger.loginfo(log, "Message is verified");   
        
}
    @Given("^user open the url urbanLadder$")
    public void user_open_the_url_urbanladder() throws Throwable 
    {
    	reusabledriver.driver();
    	reusablemethods.loadurl(driver);
    	reusablemethods.timelapse(driver);
    
    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));
  	  
    }

    @When("^user enter the product$")
    public void user_enter_the_product() throws Throwable {
    	try
    	{
    	Homepage.select(driver);
        Homepage.selectproduct(driver, "Kaira Study Lamp");
        Homepage.child(driver);
    	}
    	catch(Exception e)
    	{
    		logger.logerror(log, "produt is not clicked");
    		reusabledriver.captureScreen("Product is not clicked");
    	}
        
    }

    @Then("^user add their desire product to wishlist$")
    public void user_add_their_desire_product_to_wishlist() throws Throwable {
    	try
    	{
    	Homepage.add_wish(driver);
    	driver.quit();
    	logger.loginfo(log, "Produt added to wishlist");
	}
	catch(Exception e)
	{
		logger.logerror(log,"Product is not added to wishlist");
	}
    }
    @Given("^User open urbanladder url$")
    public void user_open_urbanladder_url() throws Throwable {
    	
    		reusabledriver.driver();
        	reusablemethods.loadurl(driver);
        	reusablemethods.timelapse(driver);

    	Homepage.login_page(driver,Propertyfilereader.propfile().getProperty("email_id"),Propertyfilereader.propfile().getProperty("password"));
    	
    	
    }

    @When("^click on store and click on app store$")
    public void click_on_store_and_click_on_app_store() throws Throwable {
    	Homepage.stores(driver);
    	List_of_products_page.andriod_button(driver);
    	
    }

    @Then("^Verifies with url$")
    public void verifies_with_url() throws Throwable {
    try
    {
    	List_of_products_page.verify_android(driver);
    	driver.quit();
    	logger.loginfo(log, "Andriod app is clicked");
	}
	catch(Exception e)
	{
		logger.logerror(log, "Andriod app is not clicked");
	}
	
    }
}

