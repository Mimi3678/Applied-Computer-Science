package com.mimidev.webprograming.relasjonsdatabase.repository;

import com.mimidev.webprograming.relasjonsdatabase.model.Registration;
import com.mimidev.webprograming.relasjonsdatabase.model.Vehicle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

        private Logger logger = LoggerFactory.getLogger(VehicleRepository.class);

        public void saveRegistrations(Registration reg){
            String sql = "INSERT INTO Registrations(ssn, name, address, characteristics, brand, type) VALUES (?, ?, ?,?,?,?)";
             db.update(sql, reg.getSsn(), reg.getName(), reg.getAddress(), reg.getCharacteristics(), reg.getBrand(),
                     reg.getType());
        }

        //hente alle registrations
        public List<Registration> getAllRegistrations(){
            String sql = "SELECT * FROM Registrations";
            return db.query(sql, new BeanPropertyRowMapper(Registration.class));
        }

        /* hente en og en registrations*/
        public Registration getOneRegistration (int id) {
            String sql = "SELECT * FROM Registrations WHERE id=?";
           List<Registration> OneRegistration = db.query(sql, new BeanPropertyRowMapper(Registration.class), id);
            return OneRegistration.get(0);
        }

        //hente alle biler
        public List<Vehicle> getAllCars() {
            String sql = "SELECT * FROM Cars";
            return db.query(sql, new BeanPropertyRowMapper(Vehicle.class));
        }


        //endre oppgave 2
    public void changeRegistration(Registration reg){
        String sql = "UPDATE Registrations SET ssn=?, name=?,address=?, characteristics =?, brand=?,type=? where id=?";
        db.update(sql,reg.getSsn(), reg.getName(), reg.getAddress(), reg.getCharacteristics(), reg.getBrand(),
                reg.getType(),reg.getId());
    }

        //Oppgave 2 - slette en og en registration
        public void deleteSingleRegistration(long ssn) {
            String sql = "DELETE FROM Registrations WHERE ssn=?";
            db.update(sql, ssn);
        }

        //slette alle
        public void deleteVehicles(){
            String sql = "DELETE FROM Registrations";
            db.update(sql);
        }
}
