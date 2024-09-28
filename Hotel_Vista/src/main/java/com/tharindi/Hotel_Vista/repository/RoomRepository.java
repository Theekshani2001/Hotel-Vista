package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room,Long> {
    Optional<Room> findRoomById(Long id);
}
