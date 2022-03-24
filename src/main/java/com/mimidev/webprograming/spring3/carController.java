package com.mimidev.webprograming.spring3;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

public class carController {
    public final List<Motor> alleBil = new ArrayList<>();
    public final List<Cars> carsRegisterd = new ArrayList<>();

    public carController() {
        Cars car1 = new Cars("Toyota", "B5");
        carsRegisterd.add(car1);
        Cars car2 = new Cars("Toyota", "Xs4");
        carsRegisterd.add(car2);
        Cars car3 = new Cars("Audi", "A9");
        carsRegisterd.add(car3);
        Cars car4 = new Cars("Audi", "A0");
        carsRegisterd.add(car4);
    }

    //trenger en ny mapping for å hente disse bilene
    @GetMapping("/getCars")
    public List<Cars> hentCars() {
        return carsRegisterd;
    }

    @PostMapping("/save")
    public void lagremotorvogn (Motor biler) {
        alleBil.add(biler);
    }
    @GetMapping("/getAll")
    public List<Motor> hentAlle() {
        return alleBil;
    }


    @GetMapping("deleteAll")
    public void slettAlle() {
        alleBil.clear();
    }
}
