package com.mimidev.webprograming.relasjonsdatabase.controller;

import com.mimidev.webprograming.relasjonsdatabase.model.Registration;
import com.mimidev.webprograming.relasjonsdatabase.model.Vehicle;
import com.mimidev.webprograming.relasjonsdatabase.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;


@RestController
public class VehicleController {

        @Autowired
        VehicleRepository repo;

        @PostMapping("/api")
        public void add(Registration registration){
            repo.addRegistrations(registration);
        }

        @GetMapping("/api/registrations")
        public List<Registration> getAllRegistrations(){
            return repo.getRegistrations();
        }

        @GetMapping("/api/cars")
        public List<Vehicle> getAllCars(){
            return repo.getCars();
        }

        //oppgave 2
        @GetMapping("/api/deleteSingleRegistration")
        public void deleteSingleRegistration(String id) {
            repo.deleteSingleRegistration(id);
        }

        @DeleteMapping("/api")
        public void deleteAll(){
            repo.deleteVehicles();
        }
}
