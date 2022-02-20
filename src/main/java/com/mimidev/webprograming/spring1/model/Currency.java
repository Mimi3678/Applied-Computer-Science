package com.mimidev.webprograming.spring1.model;

public class Currency {
    private String currency;
    private double rate;


    //konstruktør
    public Currency (String currency, double rate) {
        this.currency = currency;
        this.rate = rate;
    }

    //getter
    public String getCurrency() {
        return currency;
    }

    public double getRate() {
        return rate;
    }

    //setter
    public void setCurrency() {
        this.currency = currency;
    }

    public void setRate() {
        this.rate = rate;
    }
}
