package com.tharindi.Hotel_Vista.model;


import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String email;
    private String address;
    private String phone;
    private String idNumber;





    public User() {
    }

    public User(Long id, String name, String email, String address, String phoneNumber, String idNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phoneNumber;
        this.idNumber = idNumber;
    }

    public User(String name, String email, String address, String phoneNumber, String idNumber) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phoneNumber;
        this.idNumber = idNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phone;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phone = phoneNumber;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", phoneNumber='" + phone + '\'' +
                ", idNumber='" + idNumber + '\'' +
                '}';
    }
}