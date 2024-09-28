package com.tharindi.Hotel_Vista.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
@Entity
public class Cleaning {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private LocalDate cleaningDate;
    private String cleaningStatus;//Clean, Dirty, InProgress
    private String roomType;

    public Cleaning() {
    }

    public Cleaning(Long id, LocalDate cleaningDate, String cleaningStatus, String roomType) {
        this.id = id;
        this.cleaningDate = cleaningDate;
        this.cleaningStatus = cleaningStatus;
        this.roomType = roomType;
    }

    public Cleaning(LocalDate cleaningDate, String cleaningStatus, String roomType) {
        this.cleaningDate = cleaningDate;
        this.cleaningStatus = cleaningStatus;
        this.roomType = roomType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getCleaningDate() {
        return cleaningDate;
    }

    public void setCleaningDate(LocalDate cleaningDate) {
        this.cleaningDate = cleaningDate;
    }

    public String getCleaningStatus() {
        return cleaningStatus;
    }

    public void setCleaningStatus(String cleaningStatus) {
        this.cleaningStatus = cleaningStatus;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    @Override
    public String toString() {
        return "Cleaning{" +
                "id=" + id +
                ", cleaningDate=" + cleaningDate +
                ", cleaningStatus='" + cleaningStatus + '\'' +
                ", roomType='" + roomType + '\'' +
                '}';
    }
}
