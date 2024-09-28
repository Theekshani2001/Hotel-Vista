package com.tharindi.Hotel_Vista.exception;

public class RoomServiceNotFoundException extends RuntimeException{
    public RoomServiceNotFoundException(String message) {
        super(message);
    }
}
