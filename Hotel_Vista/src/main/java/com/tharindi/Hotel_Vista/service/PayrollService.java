package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.PayrollNotFoundException;
import com.tharindi.Hotel_Vista.model.Payroll;
import com.tharindi.Hotel_Vista.repository.PayrollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PayrollService {

    private final PayrollRepository payrollRepository;
    @Autowired
    public PayrollService(PayrollRepository payrollRepository) {
        this.payrollRepository = payrollRepository;
    }

    public Payroll addPayroll(Payroll payroll){
        return payrollRepository.save(payroll);
    }

    public List<Payroll> findAllPayrolls(){
        return payrollRepository.findAll();
    }

    public Payroll updatePayroll(Payroll payroll){
        return payrollRepository.save(payroll);
    }

    public Payroll findPayroll(Long id){
        return payrollRepository.findPayrollById(id).orElseThrow(() -> new PayrollNotFoundException("Payroll by id "+id+"was not found"));
    }

    public void deletePayroll(Long id){
        payrollRepository.deleteById(id);
    }
}
