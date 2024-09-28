package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.UserNotFoundException;
import com.tharindi.Hotel_Vista.model.User;
import com.tharindi.Hotel_Vista.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    public User updateUser(User user){
        return userRepository.save(user);
    }

    public User findUser(Long id){
        return userRepository.findUserById(id).orElseThrow(() -> new UserNotFoundException("User by id "+id+"was not found"));
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }


}
