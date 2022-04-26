package com.mimidev.webprograming.relasjonsdatabase.model;

public class Registration {
    private int id;
    private int ssn;
    private String name;
    private String address;
    private String characteristics;
    private String brand;
    private String type;

    public Registration(int id, int ssn, String name, String address, String characteristics, String brand, String type) {
        this.id = id;
        this.ssn = ssn;
        this.name = name;
        this.address = address;
        this.characteristics = characteristics;
        this.brand = brand;
        this.type = type;
    }

    public Registration() {
    }

    public int getId() {return id;}

    public void setId(int id) {this.id = id;}

    public int getSsn() {
        return ssn;
    }

    public void setSsn(int ssn) {
        this.ssn = ssn;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(String characteristics) {
        this.characteristics = characteristics;
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
