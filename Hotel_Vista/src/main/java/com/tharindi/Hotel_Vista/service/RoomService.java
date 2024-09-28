package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.RoomNotFoundException;
import com.tharindi.Hotel_Vista.exception.UserNotFoundException;
import com.tharindi.Hotel_Vista.model.Room;
import com.tharindi.Hotel_Vista.model.User;
import com.tharindi.Hotel_Vista.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;
    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public Room addRoom(Room room){
        return roomRepository.save(room);
    }

    public List<Room> findAllRooms(){
        return roomRepository.findAll();
    }

    public Room updateRoom(Room room){
        return roomRepository.save(room);
    }

    public Room findRoom(Long id){
        return roomRepository.findRoomById(id).orElseThrow(() -> new RoomNotFoundException("Room by id "+id+"was not found"));
    }

    public void deleteRoom(Long id){
        roomRepository.deleteById(id);
    }

}
