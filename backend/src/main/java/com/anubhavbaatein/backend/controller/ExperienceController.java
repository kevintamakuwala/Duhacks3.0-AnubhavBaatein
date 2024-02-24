package com.anubhavbaatein.backend.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.anubhavbaatein.backend.Request.ExperienceReq;
import com.anubhavbaatein.backend.model.Category;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.model.User;
import com.anubhavbaatein.backend.service.CategoryService;
import com.anubhavbaatein.backend.service.CompanyService;
import com.anubhavbaatein.backend.service.ExperienceService;
import com.anubhavbaatein.backend.service.JobService;
import com.anubhavbaatein.backend.service.UserService;

@RestController
@RequestMapping("/api")
public class ExperienceController {

    @Autowired
    private ExperienceService experienceService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private UserService userService;

    @Autowired
    private JobService jobService;

    @Autowired
    private CompanyService companyService;

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        try {
            List<Experience> experience = experienceService.getExperiences();
            return experience;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }
    
    @GetMapping("/experience/{id}")
    public Experience getExperienceById(@PathVariable("id") String id) {
        try {
            Experience experience = experienceService.getExperienceById(id);
            return experience;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }
    
    @PostMapping("/experience")
    public Experience addExperience(@RequestBody ExperienceReq data) {
        try {
            Experience newExperience = new Experience();
            String uniqueId = UUID.randomUUID().toString();
            newExperience.setId(uniqueId);
            newExperience.setDescription(data.getDescription());
            newExperience.setKeywords(data.getKeywords());
            newExperience.setDifficultyLevel(data.getDifficultyLevel());
            newExperience.setRounds(data.getRounds());
            newExperience.setMonth(data.getMonth());

            List<String> categories = data.getCategories();

            List<Category> categoryList = new ArrayList<>();
            for (String category : categories) {
                Category temp = categoryService.getCategoryByTitle(category);
                categoryList.add(temp);
            }
            newExperience.setCategories(categoryList);

            User user = userService.getUserById(data.getUserId());
            newExperience.setUser(user);

            Job job = jobService.getJobById(data.getJobId());
            newExperience.setJob(job);

            Company company = companyService.getCompanyById(data.getCompanyId());
            newExperience.setCompany(company);

            return experienceService.addExperience(newExperience);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @PutMapping("/experience/{id}")
    public Experience updateExperienceById(@RequestBody ExperienceReq data, @PathVariable("id") String id) {
        try {
            Experience experience = new Experience();
            experience.setDescription(data.getDescription());
            experience.setKeywords(data.getKeywords());
            experience.setDifficultyLevel(data.getDifficultyLevel());
            experience.setRounds(data.getRounds());
            experience.setMonth(data.getMonth());

            List<String> categories = data.getCategories();

            List<Category> categoryList = new ArrayList<>();
            for (String category : categories) {
                Category temp = categoryService.getCategoryByTitle(category);
                categoryList.add(temp);
            }
            experience.setCategories(categoryList);

            User user = userService.getUserById(data.getUserId());
            experience.setUser(user);

            Job job = jobService.getJobById(data.getJobId());
            experience.setJob(job);

            Company company = companyService.getCompanyById(data.getCompanyId());
            experience.setCompany(company);

            return experience;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @DeleteMapping("/experience/{id}")
    public boolean deleteExperienceById(@PathVariable("id") String id) {
        try {
            boolean deleted = experienceService.deleteExperienceById(id);
            return deleted;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }
    
}
