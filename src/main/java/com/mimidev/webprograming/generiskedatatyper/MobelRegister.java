package com.mimidev.webprograming.generiskedatatyper;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

//Definer og implementer klassen MobelRegister
public class MobelRegister <T extends Mobel>{
    private List<T> mobler;

 //Lag en konstruktør som initialiserer en tom liste med Mobel-objekter
    public MobelRegister() {
        mobler = new ArrayList<>();
    }

 //Metode for å legge til (ved å angi navn, type, vekt, pris)
    public void addMobel(T mobel) {
        mobler.add(mobel);
    }

 //Metode for å hente ut
    public T getMobel(int nummer) {
        for (T mobel : mobler) {
            if (mobel.getNummer() == nummer)
                return mobel;
        }
        return null; //om vi ikke finner noe returner null
    }

 // Metode for å slette Mobel-objekter ved bruk av nummer
 public void slettMobel(int nummer) {
     for (T mobel : mobler) {
         if (mobel.getNummer() == nummer)
             mobler.remove(mobel);
     }
 }

 //kalle sorteringen med en metode
    public void sorter() {
        Collections.sort(mobler);
    }

 //Lag en skrivUtAlle()-metode i som skriver ut alle møbler i listen
    public void skrivUtAlle() {
        for (T mobel : mobler) {
            System.out.println(mobel);
        }
    }
}
