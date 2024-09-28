package com.tharindi.Hotel_Vista.repository;

import com.tharindi.Hotel_Vista.model.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PayrollRepository extends JpaRepository<Payroll,Long> {
    Optional<Payroll> findPayrollById(Long id);
}
