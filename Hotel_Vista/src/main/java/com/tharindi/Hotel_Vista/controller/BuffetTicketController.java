package com.tharindi.Hotel_Vista.controller;

import com.tharindi.Hotel_Vista.model.BuffetTicket;

import com.tharindi.Hotel_Vista.service.BuffetTicketService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buffetTicket")
public class BuffetTicketController {

    private final BuffetTicketService buffetTicketService;
    @Autowired
    public BuffetTicketController(BuffetTicketService buffetTicketService) {
        this.buffetTicketService = buffetTicketService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<BuffetTicket>> getAllBuffetTicket(){
        List<BuffetTicket> buffetTicketList=buffetTicketService.findAllBuffetTicket();
        return new ResponseEntity<>(buffetTicketList, HttpStatus.OK);
    }


    @GetMapping("/find/{ticketId}")
    public ResponseEntity<BuffetTicket> getBuffetTicketById(@PathVariable("ticketId") Long ticketId){
        BuffetTicket buffetTicket=buffetTicketService.findBuffetTicket(ticketId);
        return new ResponseEntity<>(buffetTicket, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<BuffetTicket> addBuffetTicket(@Valid @RequestBody BuffetTicket buffetTicket){
        BuffetTicket newBuffetTicket=buffetTicketService.addBuffetTicket(buffetTicket);
        return new ResponseEntity<>(newBuffetTicket, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<BuffetTicket> updateBuffetTicket(@RequestBody BuffetTicket buffetTicket){
        BuffetTicket updateBuffetTicket=buffetTicketService.updateBuffetTicket(buffetTicket);
        return new ResponseEntity<>(updateBuffetTicket, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id){
        buffetTicketService.deleteBuffetTicket(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
