package com.mimidev.webprograming.spring3;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class carController {
    public final List<Motor> alleBil = new ArrayList<>();
    public final List<Car> bilRegister = new ArrayList<>();

    public carController() {
        Car car1 = new Car("Toyota", "B5");
        bilRegister.add(car1);
        Car car2 = new Car("Toyota", "Xs4");
        bilRegister.add(car2);
        Car car3 = new Car("Toyota", "Xs");
        bilRegister.add(car3);
        Car car4 = new Car("Audi", "A9");
        bilRegister.add(car3);
        Car car5 = new Car("Audi", "A0");
        bilRegister.add(car5);
        Car car6 = new Car("Audi", "A8");
        bilRegister.add(car6);
    }

    //trenger en ny mapping for å hente disse bilene
    @GetMapping("/getCars")
    public List<Car> hentCars() {
        return bilRegister;
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
