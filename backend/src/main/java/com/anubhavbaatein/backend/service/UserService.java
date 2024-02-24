package com.anubhavbaatein.backend.service;
import com.anubhavbaatein.backend.model.User;
import java.util.List;

public interface UserService {
    public List<User> getUsers();

    public User getUserById(String userId);
    
    public User addUser(User user);
    
    public boolean deleteUserById(String userId);

    public User updateUserById(User user, String userId);
    
    public User getUserByEmail(String email);

    public List<User> getTopUsers();
}
