package com.mimidev.webprograming.spring1.service;


import com.mimidev.webprograming.spring1.model.Amount;
import com.mimidev.webprograming.spring1.model.Currency;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CurrencyService {
    //Array-list
    private final List<Currency> list = new ArrayList<>();

    //skriv ned currensies
    public void loadCurrensies() {
        Currency sek = new Currency("SEK", 0.85);
        Currency usd = new Currency("USD", 8.95);
        Currency eur = new Currency("EUR", 9.56);

        //gjøre om
        list.add(sek);
        list.add(usd);
        list.add(eur);
    }

    //regne ut
    public double calculate(Amount amount) {
        for (Currency currency : list) {
            if (amount.getCurrency().equalsIgnoreCase(currency.getCurrency())) {
                return amount.getValue() * currency.getRate();
            }
        }
        return 0.0;

    }
}
