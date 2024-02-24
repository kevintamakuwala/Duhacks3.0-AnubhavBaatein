package com.anubhavbaatein.backend.controller;

import com.anubhavbaatein.backend.Request.UserReq;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.model.User;
import com.anubhavbaatein.backend.service.ExperienceService;
import com.anubhavbaatein.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
public class UserController {

    @Autowired
    private ExperienceService experienceService;

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public ResponseEntity<List<User>> getUsers() {
        try {
            List<User> users = userService.getUsers();
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) {
        try {
            User user = userService.getUserById(id);
            if (user != null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/alumni")
    public ResponseEntity<List<User>> getAlumni() {
        try {
            List<User> alumni = userService.getAlumni();
            return new ResponseEntity<>(alumni, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/search/alumni")
    public ResponseEntity<List<User>> searchAlumni(@RequestBody String keyword) {
        try {
            List<User> alumni = userService.searchAlumni(keyword);
            return new ResponseEntity<>(alumni, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/user")
    public ResponseEntity<User> addUser(@RequestBody UserReq data) {
        System.out.println(data.getId());
        try {
            User user = new User();
            user.setId(data.getId());
            user.setCurrentCompany(data.getCurrentCompany());
            user.setEmail(data.getEmail());
            user.setGithub(data.getGithub());
            user.setLinkedin(data.getLinkedin());
            user.setName(data.getName());
            user.setPhone(data.getPhone());
            user.setRole(data.getRole());
            List<String> experienceIds = data.getExperiencesId();

            for (String experienceId : experienceIds) {
                Experience experience = experienceService.getExperienceById(experienceId);
                user.getExperiences().add(experience);
            }

            userService.addUser(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") String id, @RequestBody UserReq data) {
        try {
            User user = userService.getUserById(id);
            if (user != null) {
                user.setCurrentCompany(data.getCurrentCompany());
                user.setEmail(data.getEmail());
                user.setGithub(data.getGithub());
                user.setLinkedin(data.getLinkedin());
                user.setName(data.getName());
                user.setPhone(data.getPhone());
                user.setRole(data.getRole());
                List<String> experienceIds = data.getExperiencesId();

                for (String experienceId : experienceIds) {
                    Experience experience = experienceService.getExperienceById(experienceId);
                    user.getExperiences().add(experience);
                }

                userService.updateUserById(user, id);
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") String id) {
        try {
            boolean isDeleted = userService.deleteUserById(id);
            if (isDeleted) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/top-users")
    public ResponseEntity<List<User>> getTopUsers() {
        return ResponseEntity.ok(userService.getTopUsers());
    }

    @GetMapping("/alumniWithPagination")
    public Repository<?>getAlumniWithPagination(int pageNo){
            return ResponseEntity.ok(userService.getAlumniWithPagination(pageNo));
    }
}
