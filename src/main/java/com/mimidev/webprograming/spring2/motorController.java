package com.mimidev.webprograming.spring2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class motorController {
    private final List<Motorvogn> alleBil = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagmotorvogn (Motorvogn bil) {
        alleBil.add(bil);
    }
    @GetMapping("/hentAlle")
    public List<Motorvogn> henAlle() {
        return alleBil;
    }

    @GetMapping("sletAlle")
    public void sletAlle() {
        alleBil.clear();
    }
}
