package com.mimidev.webprograming.generiskedatatyper;

/* Lage en ny klasse, som skal arve (extends) den abstrakte klassen Mobel
 og implementerer toString() slik at den returnerer "nummer_navn"
 */
public class Mobellmpl extends Mobel{

//lage en konstruktør, dette skal da arves fra Mobel klassen
public Mobellmpl (String navn, String type, int vekt, int pris, int nummer) {
    super (navn, type, vekt, pris, nummer);
}

 //implementerer toString() slik at den returnerer "nummer_navn"
    public String toString(){
        return getNummer() + "_" + getNavn();
    }

    //legge til sorterings metoden
    public int compareTo(Mobel m) {
    return this.getNummer() - m.getNummer();
    }
}
