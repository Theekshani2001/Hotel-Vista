package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.EmployeeNotFoundException;
import com.tharindi.Hotel_Vista.model.Employee;
import com.tharindi.Hotel_Vista.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> findAllEmployee(){
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee findEmployee(Long id){
        return employeeRepository.findEmployeeById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee by id "+id+"was not found"));
    }

    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }
}
