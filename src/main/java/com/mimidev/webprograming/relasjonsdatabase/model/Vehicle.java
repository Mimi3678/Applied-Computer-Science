package com.mimidev.webprograming.relasjonsdatabase.model;

public class Vehicle {
    private String brand;
    private String type;

    public Vehicle(String brand, String type) {
        this.brand = brand;
        this.type = type;
    }

    public Vehicle() {

    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
