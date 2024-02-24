package com.anubhavbaatein.backend.service.impl;

import com.anubhavbaatein.backend.model.User;
import com.anubhavbaatein.backend.repository.UserRepository;
import com.anubhavbaatein.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String userId) {
        return userRepository.findById(userId).get();
    }

    

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public boolean deleteUserById(String userId) {
        userRepository.deleteById(userId);
        return true;
    }

    @Override
    public User updateUserById(User user, String userId) {
        return userRepository.save(user);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).get();
    }

    @Override
    public List<User> getAlumni() {
        return userRepository.findByIsAlumni();
    }

    @Override
    public List<User> searchAlumni(String keyword) {
        List<User> alumni = userRepository.findByIsAlumni();

        for (int i = 0; i < alumni.size(); i++) {
            if (!alumni.get(i).getName().toLowerCase().contains(keyword.toLowerCase())) {
                alumni.remove(i);
                i--;
            }
        }

        return alumni;
    }
}
