package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.BuffetTicket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BuffetTicketRepository extends JpaRepository<BuffetTicket,Long> {
    Optional<BuffetTicket> findBuffetTicketById(Long ticketId);
}
