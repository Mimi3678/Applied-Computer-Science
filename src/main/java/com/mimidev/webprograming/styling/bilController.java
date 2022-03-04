package com.mimidev.webprograming.styling;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class bilController {
    private final List<Bil> alleBil = new ArrayList<>();

    @PostMapping("/save")
    public void lagremotorvogn (Bil biler) {
        alleBil.add(biler);
    }
    @GetMapping("/getAll")
    public List<Bil> hentAlle() {
        return alleBil;
    }

    @GetMapping("deleteAll")
    public void slettAlle() {
        alleBil.clear();
    }
}
