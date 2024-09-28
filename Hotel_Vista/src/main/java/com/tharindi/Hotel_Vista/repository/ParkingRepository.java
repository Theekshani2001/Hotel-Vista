package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.Parking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParkingRepository extends JpaRepository<Parking,Long> {
    Optional<Parking> findParkingById(Long id);
}
