package com.anubhavbaatein.backend.service.impl;

import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.model.User;
import com.anubhavbaatein.backend.repository.ExperienceRepository;
import com.anubhavbaatein.backend.repository.UserRepository;
import com.anubhavbaatein.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ExperienceRepository experienceRepository;

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
    public List<User> getTopUsers() {
        Map<String, Integer> userExperiencesCount = new HashMap<>();
        List<Experience> experiences = experienceRepository.findAll();
        for (Experience experience : experiences) {
            String userId = experience.getUser().getId();
            userExperiencesCount.put(userId, userExperiencesCount.getOrDefault(userId, 0) + 1);
        }
        List<User> users = userRepository.findAll();
        users.sort((u1, u2) -> {
            long a = userExperiencesCount.getOrDefault(u1.getId(), 0);
            long b = userExperiencesCount.getOrDefault(u2.getId(), 0);
            return Long.compare(b, a);
        });
        int maxUsers = 4;
        return users.subList(0, Math.min(maxUsers, users.size()));
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

//    @Override
//    Page<User>getAlumi(int pageNo){
//            return userRepository.getAlumniWithPagination(PageRequest.of(pageNo, 10));
//    }

    @Override
    public List<User> getAlumniWithPagination(int PageNo) {
        List<User> alumni = userRepository.findAll();

        int toIndex = ((PageNo - 1) * 12) + 12;
        if (alumni.size() < toIndex)
            toIndex = (PageNo - 1) * 12 + alumni.size() % 12;

        return alumni.subList((PageNo - 1) * 12, toIndex);
    }

    @Override
    public Map<String, String> getAnalytics() {
        // create a map to store the analytics
        Map<String, String> analytics = new HashMap<>();

        // get the total number of users
        long totalUsers = userRepository.count();
        analytics.put("totalUsers", String.valueOf(totalUsers));

        // get the total number of alumni
        long totalAlumni = userRepository.countByIsAlumni();
        analytics.put("totalAlumni", String.valueOf(totalAlumni));

        // get the total number of companies
        long totalCompanies = userRepository.count();
        analytics.put("totalCompanies", String.valueOf(totalCompanies));

        // get the total number of experiences
        long totalExperiences = experienceRepository.count();
        analytics.put("totalExperiences", String.valueOf(totalExperiences));

        return analytics;
    }
}
