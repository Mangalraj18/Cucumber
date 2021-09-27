$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("all.feature");
formatter.feature({
  "line": 1,
  "name": "Validating UrbanLadder Website",
  "description": "",
  "id": "validating-urbanladder-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User want to login UrbanLadder Website",
  "description": "",
  "id": "validating-urbanladder-website;user-want-to-login-urbanladder-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user open the Urban Ladder Url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter their username and password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify user is sucessfully logged in or not \"https://www.urbanladder.com/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_open_the_browser()"
});
formatter.result({
  "duration": 4136283200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_open_the_urban_ladder_url()"
});
formatter.result({
  "duration": 11398808800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_enter_their_username_and_password()"
});
formatter.result({
  "duration": 12768468300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com/",
      "offset": 45
    }
  ],
  "location": "stepdefinition.verify_user_is_sucessfully_logged_in_or_not_something(String)"
});
formatter.result({
  "duration": 1455172500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Adding a product to cart as guest",
  "description": "",
  "id": "validating-urbanladder-website;adding-a-product-to-cart-as-guest",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is open the Url and login",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User is searching for a \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User selecting for a praticular brand \u003cbrand_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User adding the product to cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validating-urbanladder-website;adding-a-product-to-cart-as-guest;",
  "rows": [
    {
      "cells": [
        "product",
        "",
        "brand_name"
      ],
      "line": 15,
      "id": "validating-urbanladder-website;adding-a-product-to-cart-as-guest;;1"
    },
    {
      "cells": [
        "table",
        "",
        "Osiris Console Table"
      ],
      "line": 16,
      "id": "validating-urbanladder-website;adding-a-product-to-cart-as-guest;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Adding a product to cart as guest",
  "description": "",
  "id": "validating-urbanladder-website;adding-a-product-to-cart-as-guest;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is open the Url and login",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User is searching for a table",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User selecting for a praticular brand Osiris Console Table",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User adding the product to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_is_open_the_url_and_login()"
});
formatter.result({
  "duration": 23286412000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "table",
      "offset": 24
    }
  ],
  "location": "stepdefinition.user_is_searching_for_a(String)"
});
formatter.result({
  "duration": 2534293400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Osiris Console Table",
      "offset": 38
    }
  ],
  "location": "stepdefinition.user_selecting_for_a_praticular_brand(String)"
});
formatter.result({
  "duration": 1411364700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_adding_the_product_to_cart()"
});
formatter.result({
  "duration": 9058209900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Product price filter",
  "description": "",
  "id": "validating-urbanladder-website;product-price-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user open the url in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user click on price range and filtering the price",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Price should display in sortout order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_open_the_url_in_browser()"
});
formatter.result({
  "duration": 39230639000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_click_on_price_range_and_filtering_the_price()"
});
formatter.result({
  "duration": 6763276400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.price_should_display_in_sortout_order()"
});
formatter.result({
  "duration": 775796500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Get product price",
  "description": "",
  "id": "validating-urbanladder-website;get-product-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user open the browser enter the urbanladder url",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is selecting any product",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Get the price of desire product and User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify whether user in homepage or not",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_open_the_browser_enter_the_urbanladder_url()"
});
formatter.result({
  "duration": 23859810400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_is_selecting_any_product()"
});
formatter.result({
  "duration": 6269537600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.get_the_price_of_desire_product_and_user_click_on_home_button()"
});
formatter.result({
  "duration": 5297602400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.verify_whether_user_in_homepage_or_not()"
});
formatter.result({
  "duration": 4487570700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify whether get google map url for particular location or not",
  "description": "",
  "id": "validating-urbanladder-website;verify-whether-get-google-map-url-for-particular-location-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user click on stores and choose desire of places",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "verify the google map url",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_open_the_url()"
});
formatter.result({
  "duration": 28214675600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_click_on_stores_and_choose_desire_of_places()"
});
formatter.result({
  "duration": 16497004600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.verify_the_google_map_url()"
});
formatter.result({
  "duration": 17910536600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify payment page is displayed or not",
  "description": "",
  "id": "validating-urbanladder-website;verify-payment-page-is-displayed-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user open their browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is searching for any product",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enter their address and verify the payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_open_their_browser_and_enter_the_url()"
});
formatter.result({
  "duration": 28857488900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_is_searching_for_any_product()"
});
formatter.result({
  "duration": 3436722800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_enter_their_address_and_verify_the_payment_page()"
});
formatter.result({
  "duration": 24218384700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify Customer stories is displayed or not",
  "description": "",
  "id": "validating-urbanladder-website;verify-customer-stories-is-displayed-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Customer click on user stories",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "System display the customer stories",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "verify the customer stories",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.customer_click_on_user_stories()"
});
formatter.result({
  "duration": 23561016900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.system_display_the_customer_stories()"
});
formatter.result({
  "duration": 1783354000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.verify_the_customer_stories()"
});
formatter.result({
  "duration": 854102500,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify the subscription page",
  "description": "",
  "id": "validating-urbanladder-website;verify-the-subscription-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "User open the browser and enter the url of urbanladder",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User enter their emailid click on subscribe",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify whether message is showing or not",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_open_the_browser_and_enter_the_url_of_urbanladder()"
});
formatter.result({
  "duration": 22879820800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_enter_their_emailid_click_on_subscribe()"
});
formatter.result({
  "duration": 2520487900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.verify_whether_message_is_showing_or_not()"
});
formatter.result({
  "duration": 963804200,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "verify whether the produt is added to wishlist or not",
  "description": "",
  "id": "validating-urbanladder-website;verify-whether-the-produt-is-added-to-wishlist-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "user open the url urbanLadder",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "user enter the product",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "user add their desire product to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_open_the_url_urbanladder()"
});
formatter.result({
  "duration": 21286680100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_enter_the_product()"
});
formatter.result({
  "duration": 4593066200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d94.0.4606.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-UV3GUN9\u0027, ip: \u0027192.168.43.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.54, chrome: {chromedriverVersion: 94.0.4606.41 (333e85df3c9b6..., userDataDir: C:\\Users\\Personal\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7bd20dba0da0dafb3e166a95025e218f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.mindtree.pageOfObjects.Homepage.selectproduct(Homepage.java:125)\r\n\tat com.mindtree.stepDefinition.stepdefinition.user_enter_the_product(stepdefinition.java:259)\r\n\tat ✽.When user enter the product(all.feature:51)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefinition.user_add_their_desire_product_to_wishlist()"
});
formatter.result({
  "status": "skipped"
});
});