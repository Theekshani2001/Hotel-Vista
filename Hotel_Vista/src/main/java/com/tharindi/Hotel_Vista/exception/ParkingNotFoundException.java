package com.tharindi.Hotel_Vista.exception;

public class ParkingNotFoundException extends RuntimeException{
    public ParkingNotFoundException(String message) {
        super(message);
    }
}
