package com.tharindi.Hotel_Vista.model;

import jakarta.persistence.*;

import java.sql.Time;
import java.time.LocalTime;
import java.util.Timer;

@Entity
public class Parking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String vehicleNumber;
    private LocalTime parkingStartTime;
    private LocalTime parkingEndTime;
    private String userName;

    public Parking() {
    }

    public Parking(Long id, String vehicleNumber, LocalTime parkingStartTime, LocalTime parkingEndTime, String userName) {
        this.id = id;
        this.vehicleNumber = vehicleNumber;
        this.parkingStartTime = parkingStartTime;
        this.parkingEndTime = parkingEndTime;
        this.userName = userName;
    }

    public Parking(String vehicleNumber, LocalTime parkingStartTime, LocalTime parkingEndTime, String userName) {
        this.vehicleNumber = vehicleNumber;
        this.parkingStartTime = parkingStartTime;
        this.parkingEndTime = parkingEndTime;
        this.userName = userName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public LocalTime getParkingStartTime() {
        return parkingStartTime;
    }

    public void setParkingStartTime(LocalTime parkingStartTime) {
        this.parkingStartTime = parkingStartTime;
    }

    public LocalTime getParkingEndTime() {
        return parkingEndTime;
    }

    public void setParkingEndTime(LocalTime parkingEndTime) {
        this.parkingEndTime = parkingEndTime;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "Parking{" +
                "id=" + id +
                ", vehicleNumber='" + vehicleNumber + '\'' +
                ", parkingStartTime=" + parkingStartTime +
                ", parkingEndTime=" + parkingEndTime +
                ", userName='" + userName + '\'' +
                '}';
    }
}
