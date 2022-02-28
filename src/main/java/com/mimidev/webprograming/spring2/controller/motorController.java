package com.mimidev.webprograming.spring2.controller;

import com.mimidev.webprograming.spring2.model.Motorvogn;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class motorController {
    private final List<Motorvogn> alleBil = new ArrayList<>();

    @PostMapping("/lagreInformasjon")
    public void lagremotorvogn (Motorvogn bil) {
        alleBil.add(bil);
    }
    @GetMapping("/henteInformasjon")
    public List<Motorvogn> henteInformasjon() {
        return alleBil;
    }

    @GetMapping("slettAlle")
    public void slettAlle() {
        alleBil.clear();
    }
}
