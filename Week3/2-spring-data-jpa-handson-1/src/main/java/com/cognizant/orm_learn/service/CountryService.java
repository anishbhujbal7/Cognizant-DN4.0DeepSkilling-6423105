package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Country findCountryByCode(String code) throws CountryNotFoundException {
        Optional<Country> result = countryRepository.findById(code);
        if (result.isEmpty()) {
            throw new CountryNotFoundException("Country not found: " + code);
        }
        return result.get();
    }

    // NEW: Countries containing substring
    public List<Country> findByNameContaining(String keyword) {
        return countryRepository.findByNameContaining(keyword);
    }

    // NEW: Countries containing substring (sorted ascending)
    public List<Country> findByNameContainingOrderByNameAsc(String keyword) {
        return countryRepository.findByNameContainingOrderByNameAsc(keyword);
    }

    // NEW: Countries starting with a letter
    public List<Country> findByNameStartingWith(String letter) {
        return countryRepository.findByNameStartingWith(letter);
    }
}
