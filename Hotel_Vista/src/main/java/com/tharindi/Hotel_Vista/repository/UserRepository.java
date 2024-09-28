package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findUserById(Long id);
}
