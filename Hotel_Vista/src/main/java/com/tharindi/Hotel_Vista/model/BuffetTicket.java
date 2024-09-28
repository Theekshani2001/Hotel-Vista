package com.tharindi.Hotel_Vista.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
@Entity
public class BuffetTicket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;

    private LocalDate issueDate;
    private String ticketType;//Adult, Child
    private Double price;
    private String userName;

    public BuffetTicket() {
    }

    public BuffetTicket(Long id, LocalDate issueDate, String ticketType, Double price, String userName) {
        this.id = id;
        this.issueDate = issueDate;
        this.ticketType = ticketType;
        this.price = price;
        this.userName = userName;
    }

    public BuffetTicket(LocalDate issueDate, String ticketType, Double price, String userName) {
        this.issueDate = issueDate;
        this.ticketType = ticketType;
        this.price = price;
        this.userName = userName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
    }

    public String getTicketType() {
        return ticketType;
    }

    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "BuffetTicket{" +
                "id=" + id +
                ", issueDate=" + issueDate +
                ", ticketType='" + ticketType + '\'' +
                ", price=" + price +
                ", userName='" + userName + '\'' +
                '}';
    }
}
