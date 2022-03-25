package com.mimidev.webprograming.generiskedatatyper;

//lage den abstrakte klassen Møbel, med dens attributter
abstract class Mobel implements Comparable <Mobel> {
    private String navn;
    private String type;
    private int vekt;
    private int pris;
    private int nummer;

 //Lage en konstruktør
 public Mobel (String navn, String type, int vekt, int pris, int nummer) {
     this.navn = navn;
     this.type = type;
     this.vekt = vekt;
     this.pris = pris;
     this.nummer = nummer;
 }

//lage get & set metoder
   public String getNavn() {
     return navn;
   }
   public void setNavn(String navn) {
     this.navn = navn;
   }
    public String getType() {
        return type;
    }
    public void setType(String Type) {
        this.type = type;
    }
    public int getVekt() {
        return vekt;
    }
    public void setVekt(int vekt) {
        this.vekt = vekt;
    }
    public int getPris() {
        return pris;
    }
    public void setPris(int pris) {
        this.pris = pris;
    }
    public int getNummer() {
        return nummer;
    }
    public void setNummer(int nummer) {
        this.nummer = nummer;
    }

  //lage en abstrakt metode toString()
    public abstract String toString();

}
