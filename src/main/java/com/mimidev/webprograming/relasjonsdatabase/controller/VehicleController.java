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
    private VehicleRepository rep;

    //hente alle biler
    @GetMapping("/getAllCars")
    public List<Vehicle> getCars() {
        return rep.getAllCars();
    }

    //lagre
    @PostMapping("/saveRegistrations")
    public void saveClient(Registration registration){
        rep.saveRegistrations(registration);
    }

    //hente alle registrations
    @GetMapping("/getRegistrations")
    public List<Registration> getAllRegistrations(){
        return rep.getAllRegistrations();
    }

    //hente en og en registrations oppgave 2
    @GetMapping("/getOneRegistration")
    public Registration getOneRegistration(int id){
        return rep.getOneRegistration(id);
    }

    //for å endre
    @PostMapping("/change")
    public void change(Registration registration){
        rep.changeRegistration(registration);
    }

    //Oppgave 2 - slette en og en
    @GetMapping("/deleteOneRegistration")
    public void slettEnMotorvogn(long ssn){
        rep.deleteSingleRegistration(ssn);
    }

    //slette alle
    @DeleteMapping("/deleteRegistrations")
    public void deleteAllVehicles(){
        rep.deleteVehicles();
    }


    /*

        @Autowired
        VehicleRepository repo;



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



     */
}
