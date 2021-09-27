Feature: Validating UrbanLadder Website

Scenario: User want to login UrbanLadder Website
Given User open the browser
When user open the Urban Ladder Url
And User enter their username and password
Then verify user is sucessfully logged in or not "https://www.urbanladder.com/"

Scenario Outline: Adding a product to cart as guest
Given user is open the Url and login
When User is searching for a <product>
And User selecting for a praticular brand <brand_name>
Then User adding the product to cart
Examples:
|product| |brand_name|
|table|    |Osiris Console Table|

Scenario: Product price filter
Given user open the url in browser
When user click on price range and filtering the price
Then Price should display in sortout order

Scenario: Get product price 
Given user open the browser enter the urbanladder url
When User is selecting any product
And Get the price of desire product and User click on home button
Then Verify whether user in homepage or not

Scenario: Verify whether get google map url for particular location or not
Given user open the url 
When user click on stores and choose desire of places
Then verify the google map url

Scenario: Verify payment page is displayed or not
Given user open their browser and enter the url
When User is searching for any product
Then User enter their address and verify the payment page

Scenario: Verify Customer stories is displayed or not
Given Customer click on user stories
When System display the customer stories
Then verify the customer stories

Scenario: Verify the subscription page
Given User open the browser and enter the url of urbanladder
When User enter their emailid click on subscribe
Then  Verify whether message is showing or not

Scenario: verify whether the produt is added to wishlist or not
Given user open the url urbanLadder
When user enter the product
Then user add their desire product to wishlist

Scenario: Verify whether the get the app url for download or not
Given User open urbanladder url 
When click on store and click on app store
Then Verifies with url