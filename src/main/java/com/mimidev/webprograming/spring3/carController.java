package com.mimidev.webprograming.spring3;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

public class carController {
    private final List<Motor> alleBil = new ArrayList<>();

    @PostMapping("/save")
    public void lagremotorvogn (Motor biler) {
        alleBil.add(biler);
    }
    @GetMapping("/getAll")
    public List<Motor> hentAlle() {
        return alleBil;
    }

    @GetMapping("hentCars")
    public List<Cars> hentCars() {
        List<Cars> listCars = new ArrayList<>();
        listCars.add(new Cars("Toyota", "B5"));
        listCars.add(new Cars("Tesla", "Xs4"));
        listCars.add(new Cars("Audi", "A9"));
        return listCars;
    }

    @GetMapping("deleteAll")
    public void slettAlle() {
        alleBil.clear();
    }
}
