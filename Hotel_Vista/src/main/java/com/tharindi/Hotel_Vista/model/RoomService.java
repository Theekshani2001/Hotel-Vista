package com.tharindi.Hotel_Vista.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class RoomService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private LocalDate orderDate;
    private LocalTime orderTime;
    private String itemsOrdered;
    private String orderStatus;
    private Double totalCost;
    private String userName;
    private Integer roomNumber;

    public RoomService() {
    }

    public RoomService(Long id, LocalDate orderDate, LocalTime orderTime, String itemsOrdered, String orderStatus, Double totalCost, String userName, Integer roomNumber) {
        this.id = id;
        this.orderDate = orderDate;
        this.orderTime = orderTime;
        this.itemsOrdered = itemsOrdered;
        this.orderStatus = orderStatus;
        this.totalCost = totalCost;
        this.userName = userName;
        this.roomNumber = roomNumber;
    }

    public RoomService(LocalDate orderDate, LocalTime orderTime, String itemsOrdered, String orderStatus, Double totalCost, String userName, Integer roomNumber) {
        this.orderDate = orderDate;
        this.orderTime = orderTime;
        this.itemsOrdered = itemsOrdered;
        this.orderStatus = orderStatus;
        this.totalCost = totalCost;
        this.userName = userName;
        this.roomNumber = roomNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public LocalTime getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(LocalTime orderTime) {
        this.orderTime = orderTime;
    }

    public String getItemsOrdered() {
        return itemsOrdered;
    }

    public void setItemsOrdered(String itemsOrdered) {
        this.itemsOrdered = itemsOrdered;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Integer roomNumber) {
        this.roomNumber = roomNumber;
    }

    @Override
    public String toString() {
        return "RoomService{" +
                "id=" + id +
                ", orderDate=" + orderDate +
                ", orderTime=" + orderTime +
                ", itemsOrdered='" + itemsOrdered + '\'' +
                ", orderStatus='" + orderStatus + '\'' +
                ", totalCost=" + totalCost +
                ", userName='" + userName + '\'' +
                ", roomNumber=" + roomNumber +
                '}';
    }
}
