package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    Optional<Employee> findEmployeeById(Long id);
}
