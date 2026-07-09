package com.cognizant.springlearn.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {

        List<Country> countries = new ArrayList<>();

        Country c1 = new Country();
        c1.setCode("IN");
        c1.setName("India");

        Country c2 = new Country();
        c2.setCode("US");
        c2.setName("United States");

        Country c3 = new Country();
        c3.setCode("JP");
        c3.setName("Japan");

        Country c4 = new Country();
        c4.setCode("DE");
        c4.setName("Germany");

        countries.add(c1);
        countries.add(c2);
        countries.add(c3);
        countries.add(c4);

        for (Country country : countries) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        return null;
    }
}