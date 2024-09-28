package com.tharindi.Hotel_Vista.model;

import jakarta.persistence.*;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;

    private String roomType;
    private Integer roomCapacity;
    private String roomRate;
    private String roomStatus; //Available, Occupied, Dirty, OutOfService
    private Integer floorNumber;




    public Room() {
    }

    public Room(Long id, String roomType, Integer roomCapacity, String roomRate, String roomStatus, Integer floorNumber) {
        this.id = id;
        this.roomType = roomType;
        this.roomCapacity = roomCapacity;
        this.roomRate = roomRate;
        this.roomStatus = roomStatus;
        this.floorNumber = floorNumber;

    }

    public Room(String roomType, Integer roomCapacity, String roomRate, String roomStatus, Integer floorNumber) {
        this.roomType = roomType;
        this.roomCapacity = roomCapacity;
        this.roomRate = roomRate;
        this.roomStatus = roomStatus;
        this.floorNumber = floorNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public Integer getRoomCapacity() {
        return roomCapacity;
    }

    public void setRoomCapacity(Integer roomCapacity) {
        this.roomCapacity = roomCapacity;
    }

    public String getRoomRate() {
        return roomRate;
    }

    public void setRoomRate(String roomRate) {
        this.roomRate = roomRate;
    }

    public String getRoomStatus() {
        return roomStatus;
    }

    public void setRoomStatus(String roomStatus) {
        this.roomStatus = roomStatus;
    }

    public Integer getFloorNumber() {
        return floorNumber;
    }

    public void setFloorNumber(Integer floorNumber) {
        this.floorNumber = floorNumber;
    }



    @Override
    public String toString() {
        return "Room{" +
                "roomNumber=" + id +
                ", roomType='" + roomType + '\'' +
                ", roomCapacity=" + roomCapacity +
                ", roomRate='" + roomRate + '\'' +
                ", roomStatus='" + roomStatus + '\'' +
                ", floorNumber=" + floorNumber +
                '}';
    }
}
