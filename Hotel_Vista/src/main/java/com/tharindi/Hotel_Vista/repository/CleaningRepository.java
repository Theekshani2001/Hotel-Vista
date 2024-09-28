package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.Cleaning;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CleaningRepository extends JpaRepository<Cleaning,Long> {
    Optional<Cleaning> findCleaningById(Long id);
}
