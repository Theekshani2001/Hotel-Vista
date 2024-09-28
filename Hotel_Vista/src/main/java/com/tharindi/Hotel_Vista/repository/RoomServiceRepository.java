package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.RoomService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomServiceRepository extends JpaRepository<RoomService,Long> {
    Optional<RoomService> findRoomServiceById(Long id);
}
