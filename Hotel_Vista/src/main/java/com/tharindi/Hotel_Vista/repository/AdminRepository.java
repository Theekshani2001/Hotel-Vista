package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@EnableJpaRepositories
@Repository
public interface AdminRepository extends JpaRepository<Admin,Long> {
    Optional<Admin> findAdminById(Long id);

    public Admin findAdminByEmail(String email);

    Optional<Admin> findAdminByEmailAndPassword(String email,String password);
}
