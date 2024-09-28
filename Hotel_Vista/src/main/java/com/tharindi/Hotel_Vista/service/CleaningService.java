package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.CleaningServiceNotFoundException;
import com.tharindi.Hotel_Vista.model.Cleaning;
import com.tharindi.Hotel_Vista.repository.CleaningRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CleaningService {

    private final CleaningRepository cleaningRepository;
    @Autowired
    public CleaningService(CleaningRepository cleaningRepository) {
        this.cleaningRepository = cleaningRepository;
    }

    public Cleaning addCleaning(Cleaning cleaning){
        return cleaningRepository.save(cleaning);
    }

    public List<Cleaning> findAllCleaning(){
        return cleaningRepository.findAll();
    }

    public Cleaning updateCleaning(Cleaning cleaning){
        return cleaningRepository.save(cleaning);
    }

    public Cleaning findCleaning(Long id){
        return cleaningRepository.findCleaningById(id).orElseThrow(() -> new CleaningServiceNotFoundException("Cleaning Service by id "+id+"was not found"));
    }

    public void deleteCleaning(Long id){
        cleaningRepository.deleteById(id);
    }
}
