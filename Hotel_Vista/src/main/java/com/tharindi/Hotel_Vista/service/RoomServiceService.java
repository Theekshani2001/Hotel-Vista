package com.tharindi.Hotel_Vista.service;


import com.tharindi.Hotel_Vista.exception.RoomServiceNotFoundException;
import com.tharindi.Hotel_Vista.model.RoomService;
import com.tharindi.Hotel_Vista.repository.RoomServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceService {

    private final RoomServiceRepository roomServiceRepository;
    @Autowired
    public RoomServiceService(RoomServiceRepository roomServiceRepository) {
        this.roomServiceRepository = roomServiceRepository;
    }

    public RoomService addRoomService(RoomService roomService){
        return roomServiceRepository.save(roomService);
    }

    public List<RoomService> findAllRoomServices(){
        return roomServiceRepository.findAll();
    }

    public RoomService updateRoomService(RoomService roomService){
        return roomServiceRepository.save(roomService);
    }

    public RoomService findRoomService(Long id){
        return roomServiceRepository.findRoomServiceById(id).orElseThrow(() -> new RoomServiceNotFoundException("Room Service by id "+id+"was not found"));
    }

    public void deleteRoomService(Long id){
        roomServiceRepository.deleteById(id);
    }
}
