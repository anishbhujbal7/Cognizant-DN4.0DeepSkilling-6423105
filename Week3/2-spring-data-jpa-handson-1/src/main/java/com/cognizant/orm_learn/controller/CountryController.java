package com.cognizant.orm_learn.controller;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    // GET /countries/contains?keyword=ou
    @GetMapping("/contains")
    public List<Country> getCountriesContaining(@RequestParam String keyword) {
        return countryService.findByNameContaining(keyword);
    }

    // GET /countries/contains-sorted?keyword=ou
    @GetMapping("/contains-sorted")
    public List<Country> getCountriesContainingSorted(@RequestParam String keyword) {
        return countryService.findByNameContainingOrderByNameAsc(keyword);
    }

    // GET /countries/starts-with?letter=Z
    @GetMapping("/starts-with")
    public List<Country> getCountriesStartingWith(@RequestParam String letter) {
        return countryService.findByNameStartingWith(letter);
    }

    // GET /countries/{code}
    @GetMapping("/{code}")
    public Country getCountryByCode(@PathVariable String code) throws Exception {
        return countryService.findCountryByCode(code);
    }

    // GET /countries
    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }
}
