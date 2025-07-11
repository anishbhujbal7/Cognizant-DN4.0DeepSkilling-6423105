package com.cognizant.orm_learn;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

	private static CountryService countryService;

	public static void main(String[] args) throws CountryNotFoundException {
		ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
		LOGGER.info("Inside main");

		countryService = context.getBean(CountryService.class);

		// Uncomment to test one at a time
		// testGetAllCountries();
		// testFindCountryByCode();
		testFindByNameContaining();
		// testFindByNameContainingSorted();
		// testFindByNameStartingWith();
	}

	private static void testGetAllCountries() {
		LOGGER.info("Start");
		List<Country> countries = countryService.getAllCountries();
		LOGGER.debug("countries={}", countries);
		LOGGER.info("End");
	}

	private static void testFindCountryByCode() throws CountryNotFoundException {
		LOGGER.info("Start");
		Country country = countryService.findCountryByCode("IN");
		LOGGER.debug("Country: {}", country);
		LOGGER.info("End");
	}

	private static void testFindByNameContaining() {
		LOGGER.info("Start");
		List<Country> countries = countryService.findByNameContaining("ou");
		LOGGER.debug("Matched countries: {}", countries);
		LOGGER.info("End");
	}

	private static void testFindByNameContainingSorted() {
		LOGGER.info("Start");
		List<Country> countries = countryService.findByNameContainingOrderByNameAsc("ou");
		LOGGER.debug("Sorted countries: {}", countries);
		LOGGER.info("End");
	}

	private static void testFindByNameStartingWith() {
		LOGGER.info("Start");
		List<Country> countries = countryService.findByNameStartingWith("Z");
		LOGGER.debug("Countries starting with Z: {}", countries);
		LOGGER.info("End");
	}
}
