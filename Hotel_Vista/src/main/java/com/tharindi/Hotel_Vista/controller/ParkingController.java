package com.tharindi.Hotel_Vista.controller;

import com.tharindi.Hotel_Vista.model.Parking;
import com.tharindi.Hotel_Vista.service.ParkingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/parking")
public class ParkingController {

    private final ParkingService parkingService;
    @Autowired
    public ParkingController(ParkingService parkingService) {
        this.parkingService = parkingService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Parking>> getAllParking(){
        List<Parking> parkingList=parkingService.findAllParking();
        return new ResponseEntity<>(parkingList, HttpStatus.OK);
    }


    @GetMapping("/find/{id}")
    public ResponseEntity<Parking> getParkingById(@PathVariable("id") Long id){
        Parking parking=parkingService.findParking(id);
        return new ResponseEntity<>(parking, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Parking> addParking(@Valid @RequestBody Parking parking){
        Parking newParking=parkingService.addParking(parking);
        return new ResponseEntity<>(newParking, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Parking> updateParking(@RequestBody Parking parking){
        Parking updateParking=parkingService.updateParking(parking);
        return new ResponseEntity<>(updateParking, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id){
        parkingService.deleteParking(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
