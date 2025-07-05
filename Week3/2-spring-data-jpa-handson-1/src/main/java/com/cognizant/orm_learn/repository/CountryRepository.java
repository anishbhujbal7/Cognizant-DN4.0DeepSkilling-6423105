package com.cognizant.orm_learn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.orm_learn.model.Country;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // 1. Contains a substring
    List<Country> findByNameContaining(String substring);

    // 2. Contains substring with ascending sort
    List<Country> findByNameContainingOrderByNameAsc(String substring);

    // 3. Starting with a given letter
    List<Country> findByNameStartingWith(String prefix);
}
