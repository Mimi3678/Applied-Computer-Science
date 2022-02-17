package com.mimidev.webprograming.klientTjener1.controller;


import com.mimidev.webprograming.klientTjener1.model.Amount;
import com.mimidev.webprograming.klientTjener1.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CurrencyController {
    //det skal være to endpoint, en som loader

    //linke controller til service
    @Autowired
    CurrencyService service;

    //knappen returnere ingenting, derfor brukes void
    @PostMapping("/load")
    public void load() {
        service.loadCurrensies();
    }

    @GetMapping("/calc")
    public double calculate(Amount amount) {
        return service.calculate(amount);
    }
}


