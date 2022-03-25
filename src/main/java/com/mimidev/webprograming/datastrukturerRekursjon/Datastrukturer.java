package com.mimidev.webprograming.datastrukturerRekursjon;

public class Datastrukturer {

    public static void main (String[] args) {
        System.out.println("Ukeoppgaver - datastrukturer");

        System.out.println("Sirkulær enveis liste");

        MinSirkelListe minSirkelListe = new MinSirkelListe();

        minSirkelListe.leggTilNode(13);
        minSirkelListe.leggTilNode(7);
        minSirkelListe.leggTilNode(24);
        minSirkelListe.leggTilNode(40);
        minSirkelListe.leggTilNode(1);
        minSirkelListe.leggTilNode(8);
        minSirkelListe.leggTilNode(4);

        int tall = 8;

        if(minSirkelListe.inneholderNode(tall))
            System.out.println("Listen inneholder " + tall);
        else
            System.out.println("Listen inneholder ikke " + tall);

            minSirkelListe.slettNode(tall);

        if(minSirkelListe.inneholderNode(tall))
            System.out.println("Listen inneholder " + tall);
        else
            System.out.println("Listen inneholder ikke " + tall);
            minSirkelListe.skrivUt();

        //Stack
        System.out.println("Stakk!");
        MinStakk minStakk = new MinStakk();

        minStakk.push(11);
        minStakk.push(22);
        minStakk.push(33);
        minStakk.push(44);

        minStakk.skrivUt();

        System.out.println("Første tall i stakken er " + minStakk.se());

        minStakk.pop();
        minStakk.pop();

        minStakk.skrivUt();
        System.out.println("Første tall i stakken er " + minStakk.se());
    }
}

