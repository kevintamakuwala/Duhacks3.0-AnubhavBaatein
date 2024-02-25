package com.anubhavbaatein.backend.controller;

import com.anubhavbaatein.backend.Request.ExperienceReq;
import com.anubhavbaatein.backend.model.*;
import com.anubhavbaatein.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173" , allowedHeaders = "*" , allowCredentials = "true")
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
    public ResponseEntity<List<Experience>> getExperience() {
        try {
            List<Experience> experience = experienceService.getExperiences();
            return new ResponseEntity<>(experience, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/experience/{id}")
    public ResponseEntity<Experience> getExperienceById(@PathVariable("id") String id) {
        try {
            Experience experience = experienceService.getExperienceById(id);
            if (experience != null) {
                return new ResponseEntity<>(experience, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<Experience>> searchExperience(@RequestParam String keyword) {
        try {
            List<Experience> experience = experienceService.searchExperiences(keyword);
            return new ResponseEntity<>(experience, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/experience/alumni/{id}")
    public ResponseEntity<List<Experience>> getAlumniExperience(@PathVariable("id") String id) {
        try {
            List<Experience> experience = experienceService.getAlumniExperiences(id);
            return new ResponseEntity<>(experience, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/experience")
    public ResponseEntity<Experience> addExperience(@RequestBody ExperienceReq data) {
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
            System.out.println(data.getUserId());
            newExperience.setUser(user);

            Job job = jobService.getJobById(data.getJobId());
            System.out.println(data.getJobId());
            newExperience.setJob(job);

            System.out.println(data.getCompanyId());
            Company company = companyService.getCompanyById(data.getCompanyId());

            newExperience.setCompany(company);

            System.out.println("Hello");

            for(Category category : newExperience.getCategories())
            {
                System.out.println(category.getId());
            }

            experienceService.addExperience(newExperience);

            return new ResponseEntity<>(newExperience, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/experience/{id}")
    public ResponseEntity<Experience> updateExperienceById(@RequestBody ExperienceReq data, @PathVariable("id") String id) {
        try {
            Experience experience = experienceService.getExperienceById(id);

            if (experience != null) {
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

                experienceService.updateExperienceById(experience, experience.getId());

                return new ResponseEntity<>(experience, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/experience/{id}")
    public ResponseEntity<Void> deleteExperienceById(@PathVariable("id") String id) {
        try {
            boolean isDeleted = experienceService.deleteExperienceById(id);
            if (isDeleted) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/experienceWithPagination/{pageNo}")
    public ResponseEntity<?>getExperienceWithPagination(@PathVariable("pageNo")String pageNo){
            int pageN = Integer.parseInt(pageNo);
            return ResponseEntity.ok(experienceService.getExperienceWithPagination(pageN));
    }
}
