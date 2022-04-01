package com.mimidev.webprograming.styling;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class bilController {
    private final List<Bil> alleBil = new ArrayList<>();

    @PostMapping("/savAll")
    public void henteMotorvogn (Bil biler) {
        alleBil.add(biler);
    }
    @GetMapping("/fetchAll")
    public List<Bil> henteAlle() {
        return alleBil;
    }

    @GetMapping("delAll")
    public void dropAlle() {
        alleBil.clear();
    }
}
