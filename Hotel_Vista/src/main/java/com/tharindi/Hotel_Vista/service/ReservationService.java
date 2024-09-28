package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.ReservationNotFoundException;
import com.tharindi.Hotel_Vista.exception.RoomNotFoundException;
import com.tharindi.Hotel_Vista.model.Reservation;
import com.tharindi.Hotel_Vista.model.Room;
import com.tharindi.Hotel_Vista.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;
    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public Reservation addReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }

    public List<Reservation> findAllReservations(){
        return reservationRepository.findAll();
    }

    public Reservation updateReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }

    public Reservation findReservation(Long id){
        return reservationRepository.findReservationById(id).orElseThrow(() -> new ReservationNotFoundException("Reservation by id "+id+"was not found"));
    }

    public void deleteReservation(Long id){
        reservationRepository.deleteById(id);
    }
}
