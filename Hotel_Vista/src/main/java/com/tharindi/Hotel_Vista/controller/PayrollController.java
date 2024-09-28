package com.tharindi.Hotel_Vista.controller;

import com.tharindi.Hotel_Vista.model.Employee;
import com.tharindi.Hotel_Vista.model.Payroll;
import com.tharindi.Hotel_Vista.model.Reservation;
import com.tharindi.Hotel_Vista.service.PayrollService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/payroll")
public class PayrollController {

    private final PayrollService payrollService;
    @Autowired
    public PayrollController(PayrollService payrollService) {
        this.payrollService = payrollService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Payroll>> getAllPayrolls(){
        List<Payroll> payrollList=payrollService.findAllPayrolls();
        return new ResponseEntity<>(payrollList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Payroll> getPayrollById(@PathVariable("id") Long id){
        Payroll payroll=payrollService.findPayroll(id);
        return new ResponseEntity<>(payroll, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Payroll> addPayroll(@Valid @RequestBody Payroll payroll){
        Payroll newPayroll=payrollService.addPayroll(payroll);
        return new ResponseEntity<>(newPayroll, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Payroll> updatePayroll(@RequestBody Payroll payroll){
        Payroll updatePayroll=payrollService.updatePayroll(payroll);
        return new ResponseEntity<>(updatePayroll, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id){
        payrollService.deletePayroll(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
