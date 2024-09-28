package com.tharindi.Hotel_Vista.controller;
import com.tharindi.Hotel_Vista.model.Admin;
import com.tharindi.Hotel_Vista.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;
    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }
    @PostMapping("/register")
    public Admin registerAdmin(@RequestBody Admin admin) throws Exception {
        String tempEmail=admin.getEmail();
        if(tempEmail != null && !"".equals(tempEmail)){
            Admin adminObj= adminService.fetchAdminByAdminEmail(tempEmail);
            if (adminObj != null){
                throw new Exception("Admin with "+tempEmail+" is already exists");
            }
        }


        Admin newAdmin=null;
        newAdmin=adminService.saveAdmin(admin);
        return newAdmin;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/login/{email}/{password}")

    public ResponseEntity<Admin> login(@PathVariable("email") String email, @PathVariable("password") String password){
        Admin admin=adminService.loginAdmin(email, password);
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }



}
