package com.mimidev.webprograming.spring2.model;

public class Motorvogn {

    private String personnr;
    private String navn;
    private String adresse;
    private String kjennetegn;
    private String merke;
    private String type;

    public Motorvogn(String personnr, String navn, String adresse,
                     String kjennetegn, String merke, String type) {
        this.personnr = personnr;
        this.navn = navn;
        this.adresse = adresse;
        this.kjennetegn = kjennetegn;
        this.merke = merke;
        this.type = type;
    }

    public Motorvogn () {
    }

    //get/set-metoder
    //setters
    public void setPersonnr (String personnr) {
        this.personnr = personnr;
    }
    public void setNavn (String navn) {
        this.navn = navn;
    }
    public void setAdresse (String adresse) {
        this.adresse = adresse;
    }

    public void setKjennetegn (String kjennetegn) {
        this.kjennetegn = kjennetegn;
    }
    public void setMerke (String merke) {
        this.merke = merke;
    }
    public void setType (String type) {
        this.type = type;
    }

    //getters
    public String getPersonnr () {
        return personnr;
    }
    public String getNavn () {
        return navn;
    }
    public String getAdresse () {
        return adresse;
    }
    public String getKjennetegn () {
        return kjennetegn;
    }
    public String getMerke () {
        return merke;
    }
    public String getType () {
        return type;
    }
}




