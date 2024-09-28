package com.tharindi.Hotel_Vista.service;

import com.tharindi.Hotel_Vista.exception.AdminNotFoundException;
import com.tharindi.Hotel_Vista.exception.RoomNotFoundException;
import com.tharindi.Hotel_Vista.model.Admin;
import com.tharindi.Hotel_Vista.model.Room;
import com.tharindi.Hotel_Vista.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final AdminRepository adminRepository;
    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }


    public Admin loginAdmin(String email,String password){
        return adminRepository.findAdminByEmailAndPassword(email,password).orElseThrow(() -> new AdminNotFoundException("Admin by email "+email+" and password "+password+" was not found"));
    }


    public Admin saveAdmin(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin fetchAdminByAdminEmail(String email){
        return adminRepository.findAdminByEmail(email);
    }

//    public Admin fetchAdminByAdminEmailAndAdminPassword(String email,String password){
//        return adminRepository.findAdminByEmailAndPassword(email,password);
//    }
}
