package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.EmployeeNotFoundException;
import com.tharindi.Hotel_Vista.exception.ParkingNotFoundException;
import com.tharindi.Hotel_Vista.model.Employee;
import com.tharindi.Hotel_Vista.model.Parking;
import com.tharindi.Hotel_Vista.repository.ParkingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParkingService {
    private final ParkingRepository parkingRepository;
    @Autowired
    public ParkingService(ParkingRepository parkingRepository) {
        this.parkingRepository = parkingRepository;
    }

    public Parking addParking(Parking parking){
        return parkingRepository.save(parking);
    }

    public List<Parking> findAllParking(){
        return parkingRepository.findAll();
    }

    public Parking updateParking(Parking parking){
        return parkingRepository.save(parking);
    }

    public Parking findParking(Long id){
        return parkingRepository.findParkingById(id).orElseThrow(() -> new ParkingNotFoundException("Parking Vehicle by id "+id+"was not found"));
    }

    public void deleteParking(Long id){
        parkingRepository.deleteById(id);
    }
}
