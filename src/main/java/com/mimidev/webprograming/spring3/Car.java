package com.mimidev.webprograming.spring3;

public class Car {
    private String merke;
    private String type;

    //lage konstruktør
    public Car(String merke, String type) {
        this.merke = merke;
        this.type = type;
    }

    //lage en tom konstruktør, dette er et krav
    public Car() {
    }

    //get og set metoder
    public void setMerke(String merke) {
        this.merke = merke;
    }
    public String getMerke() {
        return merke;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getType() {
        return type;
    }
 }

