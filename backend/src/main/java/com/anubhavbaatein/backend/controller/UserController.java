package com.anubhavbaatein.backend.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.anubhavbaatein.backend.Request.UserReq;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.model.User;
import com.anubhavbaatein.backend.service.ExperienceService;
import com.anubhavbaatein.backend.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private ExperienceService experienceService;

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<User> getUsers() {
        try {
            List<User> users = userService.getUsers();
            return users;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable("id") String id) {
        try {
            User user = userService.getUserById(id);
            return user;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @PostMapping("/user")
    public User addUser(@RequestBody UserReq data)
    {
        System.out.println(data.getId());
        User user = new User();
        user.setId(data.getId());
        user.setCurrentCompany(data.getCurrentCompanyName());
        user.setEmail(data.getEmail());
        user.setGithub(data.getGithub());
        user.setLinkedin(data.getLinkedin());
        user.setName(data.getUserName());
        user.setPhone(data.getPhoneNumber());

        List<String> experienceIds = data.getExperiencesId();

        for (String experienceId : experienceIds) {
            Experience experience = experienceService.getExperienceById(experienceId);
            user.getExperiences().add(experience);
        }

        try {
            userService.addUser(user);
            return user;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    
    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable("id") String id, @RequestBody UserReq data) {
        User user = userService.getUserById(id);
        user.setCurrentCompany(data.getCurrentCompanyName());
        user.setEmail(data.getEmail());
        user.setGithub(data.getGithub());
        user.setLinkedin(data.getLinkedin());
        user.setName(data.getUserName());
        user.setPhone(data.getPhoneNumber());

        List<String> experienceIds = data.getExperiencesId();

        for (String experienceId : experienceIds) {
            Experience experience = experienceService.getExperienceById(experienceId);
            user.getExperiences().add(experience);
        }

        try {
            userService.updateUserById(user, id);
            return user;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    
    @DeleteMapping("/user/{id}")
    public boolean deleteUser(@PathVariable("id") String id) {
        try {
            return userService.deleteUserById(id);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}
