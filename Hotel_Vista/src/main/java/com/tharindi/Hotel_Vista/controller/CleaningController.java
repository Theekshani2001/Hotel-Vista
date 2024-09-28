package com.tharindi.Hotel_Vista.controller;

import com.tharindi.Hotel_Vista.model.Cleaning;
import com.tharindi.Hotel_Vista.service.CleaningService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/cleaning")
public class CleaningController {
    private final CleaningService cleaningService;
    @Autowired
    public CleaningController(CleaningService cleaningService) {
        this.cleaningService = cleaningService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Cleaning>> getAllCleaning(){
        List<Cleaning> cleaningList=cleaningService.findAllCleaning();
        return new ResponseEntity<>(cleaningList, HttpStatus.OK);
    }


    @GetMapping("/find/{id}")
    public ResponseEntity<Cleaning> getCleaningById(@PathVariable("id") Long id){
        Cleaning cleaning=cleaningService.findCleaning(id);
        return new ResponseEntity<>(cleaning, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Cleaning> addCleaning(@Valid @RequestBody Cleaning cleaning){
        Cleaning newCleaning=cleaningService.addCleaning(cleaning);
        return new ResponseEntity<>(newCleaning, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Cleaning> updateCleaning(@RequestBody Cleaning cleaning){
        Cleaning updateCleaning=cleaningService.updateCleaning(cleaning);
        return new ResponseEntity<>(updateCleaning, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id){
        cleaningService.deleteCleaning(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
