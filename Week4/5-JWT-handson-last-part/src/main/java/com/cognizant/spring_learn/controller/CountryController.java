package com.cognizant.spring_learn.controller;


import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {
    private static Logger LOGGER= LoggerFactory.getLogger(CountryController.class);


    @RequestMapping("/country")
    public Country getCountryIndia(){
        LOGGER.info("Statrt getCountryIndia()");
        ApplicationContext context= new ClassPathXmlApplicationContext("country.xml");
        Country country=context.getBean("country",Country.class);
        LOGGER.info("Country bean loaded(): "+country);
        LOGGER.info("End getCountryIndia()");
        return country;
    }

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START getCountry() with code: {}", code);
        Country country = countryService.getCountry(code);
        LOGGER.info("END getCountry() with result: {}", country);
        return country;
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        LOGGER.info("START getAllCountries()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countryList = context.getBean("countryList", List.class);
        LOGGER.info("END getAllCountries()");
        return countryList;
    }



}
