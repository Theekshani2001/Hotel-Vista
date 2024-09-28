package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    Optional<Reservation> findReservationById(Long id);
}
