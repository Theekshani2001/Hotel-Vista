package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.BuffetTicketNotFoundException;
import com.tharindi.Hotel_Vista.model.BuffetTicket;
import com.tharindi.Hotel_Vista.repository.BuffetTicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuffetTicketService {

    private final BuffetTicketRepository buffetTicketRepository;
    @Autowired
    public BuffetTicketService(BuffetTicketRepository buffetTicketRepository) {
        this.buffetTicketRepository = buffetTicketRepository;
    }

    public BuffetTicket addBuffetTicket(BuffetTicket buffetTicket){
        return buffetTicketRepository.save(buffetTicket);
    }

    public List<BuffetTicket> findAllBuffetTicket(){
        return buffetTicketRepository.findAll();
    }

    public BuffetTicket updateBuffetTicket(BuffetTicket buffetTicket){
        return buffetTicketRepository.save(buffetTicket);
    }

    public BuffetTicket findBuffetTicket(Long ticketId){
        return buffetTicketRepository.findBuffetTicketById(ticketId).orElseThrow(() -> new BuffetTicketNotFoundException("Buffet Ticket by id "+ticketId+"was not found"));
    }

    public void deleteBuffetTicket(Long id){
        buffetTicketRepository.deleteById(id);
    }
}
