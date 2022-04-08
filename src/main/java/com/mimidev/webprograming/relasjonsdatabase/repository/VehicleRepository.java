package com.mimidev.webprograming.relasjonsdatabase.repository;

import com.mimidev.webprograming.relasjonsdatabase.model.Registration;
import com.mimidev.webprograming.relasjonsdatabase.model.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class VehicleRepository {

    //Oppgave 1
        @Autowired
        private JdbcTemplate db;

        public void addRegistrations(Registration reg){
            try {
                     db.update("insert into Registrations(ssn, name, address, characteristics, brand, type) VALUES (?, ?, ?,?,?,?)",
                             reg.getSsn(), reg.getName(), reg.getAddress(), reg.getCharacteristics(), reg.getBrand(),
                reg.getType());
            } catch (Exception e) {
                System.out.println("Noe gikk glat i repo sin addRegistrations");
            }
        }

        public List<Registration> getRegistrations(){
            try {
                return db.query("select * from Registrations", new BeanPropertyRowMapper<>(Registration.class));
            } catch (Exception e) {
                System.out.println("Noe gikk glat i repo sin getRegistration");
                return null;
            }
        }

        public List<Vehicle> getCars() {
            try {
                return db.query("select * from Cars", new BeanPropertyRowMapper<>(Vehicle.class));
            } catch (Exception e) {
                System.out.println("Noe gikk glat i repo sin getCars");
                return null;
            }
        }

        //Oppgave 2
        public void deleteSingleRegistration(String id) {
            try {
                db.update("delete from Registrations where id = ?", id);
            } catch (Exception e) {
                System.out.println("Noe gikk glat i repo sin deleteSingleRegistration");
            }
        }

        public void deleteVehicles(){
            try {
                db.update("delete from Registrations");
            } catch (Exception e) {
                System.out.println("Noe gikk glat i repo sin deleteVehicles");
            }
        }
}
