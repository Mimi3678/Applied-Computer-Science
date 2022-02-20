package com.mimidev.webprograming.spring1.model;

public class Amount {
    private String currency;
    private double value;

    //konstruktør
    public Amount (String currency, double value) {
        this.currency = currency;
        this.value = value;
    }

    //getter
    public String getCurrency() {
        return currency;
    }

    public double getValue() {
        return value;
    }

    //setter
    public void setCurrency() {
        this.currency = currency;
    }

    public void setValue() {
        this.value = value;
    }
}
