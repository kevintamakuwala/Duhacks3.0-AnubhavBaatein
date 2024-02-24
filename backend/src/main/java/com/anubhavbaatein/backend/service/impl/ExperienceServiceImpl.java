package com.anubhavbaatein.backend.service.impl;

import com.anubhavbaatein.backend.model.Category;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.model.User;
import com.anubhavbaatein.backend.repository.CategoryRepository;
import com.anubhavbaatein.backend.repository.CompanyRepository;
import com.anubhavbaatein.backend.repository.ExperienceRepository;
import com.anubhavbaatein.backend.repository.JobRepository;
import com.anubhavbaatein.backend.repository.UserRepository;
import com.anubhavbaatein.backend.service.ExperienceService;
import com.anubhavbaatein.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExperienceServiceImpl implements ExperienceService {
    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Experience> getExperiences() {
        return experienceRepository.findAll();
    }

    @Override
    public Experience getExperienceById(String experienceId) {
        return experienceRepository.findById(experienceId).get();
    }

    @Override
    public Experience addExperience(Experience experience) {

        User user = experience.getUser();

        Company company = experience.getCompany();

        Job job = experience.getJob();

        List<Category> categories = experience.getCategories();

        if (user != null) {
            user.getExperiences().add(experience);
            userRepository.save(user);
        }

        if (company != null) {
            company.getExperiences().add(experience);
            companyRepository.save(company);
        }

        if (job != null) {
            job.getExperiences().add(experience);
            jobRepository.save(job);
        }

        if (categories != null && categories.size() > 0) {
            for (Category category : categories) {
                category.getExperiences().add(experience);
            }
            categoryRepository.saveAll(categories);
        }

        return experienceRepository.save(experience);
    }
    
    @Override
    public Experience updateExperienceById(Experience experience, String experienceId) {
        
        User user = experience.getUser();
        
        Company company = experience.getCompany();
        
        Job job = experience.getJob();
        
        List<Category> categories = experience.getCategories();
        
        if (user != null) {
            user.getExperiences().add(experience);
            userRepository.save(user);
        }
        
        if (company != null) {
            company.getExperiences().add(experience);
            companyRepository.save(company);
        }
        
        if (job != null) {
            job.getExperiences().add(experience);
            jobRepository.save(job);
        }
        
        if (categories != null && categories.size() > 0) {
            for (Category category : categories) {
                category.getExperiences().add(experience);
            }
            categoryRepository.saveAll(categories);
        }
        
        return experienceRepository.save(experience);
    }
    
    @Override
    public boolean deleteExperienceById(String experienceId) {
        experienceRepository.deleteById(experienceId);
        return true;
    }
}
