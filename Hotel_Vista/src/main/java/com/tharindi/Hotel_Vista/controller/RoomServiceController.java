package com.tharindi.Hotel_Vista.controller;

import com.tharindi.Hotel_Vista.model.RoomService;
import com.tharindi.Hotel_Vista.model.User;
import com.tharindi.Hotel_Vista.service.RoomServiceService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/roomServiceOrder")
public class RoomServiceController {
    private final RoomServiceService roomServiceService;
    @Autowired
    public RoomServiceController(RoomServiceService roomServiceService) {
        this.roomServiceService = roomServiceService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<RoomService>> getAllRoomServices(){
        List<RoomService> roomServiceList=roomServiceService.findAllRoomServices();
        return new ResponseEntity<>(roomServiceList, HttpStatus.OK);
    }


    @GetMapping("/find/{id}")
    public ResponseEntity<RoomService> getRoomServiceById(@PathVariable("id") Long id){
        RoomService roomService=roomServiceService.findRoomService(id);
        return new ResponseEntity<>(roomService, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<RoomService> addRoomService(@Valid @RequestBody RoomService roomService){
        RoomService newRoomService=roomServiceService.addRoomService(roomService);
        return new ResponseEntity<>(newRoomService, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<RoomService> updateRoomService(@RequestBody RoomService roomService){
        RoomService updateRoomService=roomServiceService.updateRoomService(roomService);
        return new ResponseEntity<>(updateRoomService, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id){
        roomServiceService.deleteRoomService(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
