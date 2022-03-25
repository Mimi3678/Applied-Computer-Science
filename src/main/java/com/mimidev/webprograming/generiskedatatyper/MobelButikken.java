package com.mimidev.webprograming.generiskedatatyper;

/*Test MobelRegister-klassen (ved å lage en main-metode i en
separat klasse, opprette et nytt MobelRegister og teste metodene) */

public class MobelButikken {
    public static void main (String [] args) {
        MobelRegister<Mobel> mr = new MobelRegister<>();

        mr.addMobel(new Mobellmpl("Sverre", "Stol", 10, 1000, 2));
        mr.addMobel(new Mobellmpl("Espen", "Bord", 30, 2500, 4));
        mr.addMobel(new Mobellmpl("Sol", "Sofa", 15, 4500, 1));
        mr.addMobel(new Mobellmpl("Nana", "Benk", 5, 900, 3));

        //skrive ut
        mr.skrivUtAlle();

        //Sortering
        mr.sorter();

        mr.skrivUtAlle();
    }
}
