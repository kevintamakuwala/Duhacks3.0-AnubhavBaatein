package com.anubhavbaatein.backend.controller;

import com.anubhavbaatein.backend.Request.CompanyReq;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.service.CompanyService;
import com.anubhavbaatein.backend.service.ExperienceService;
import com.anubhavbaatein.backend.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173" , allowedHeaders = "*" , allowCredentials = "true")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @Autowired
    private JobService jobService;

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/company")
    public ResponseEntity<List<Company>> getCompanies() {
        try {
            List<Company> companies = companyService.getCompanies();
            return new ResponseEntity<>(companies, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/company/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable("id") String id) {
        try {
            Company company = companyService.getCompanyById(id);
            if (company != null) {
                return new ResponseEntity<>(company, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/company/name/{name}")
    public ResponseEntity<Company> getCompanyByName(@PathVariable("name") String name) {
        try {
            Company company = companyService.getCompanyByName(name);

            if (company != null) {
                return new ResponseEntity<>(company, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/company")
    public ResponseEntity<Company> addCompany(@RequestBody CompanyReq data) {
        try {
            Company company = new Company();
            company.setId(UUID.randomUUID().toString());
            company.setName(data.getName());

            List<String> jobIds = data.getJobsId();
            List<String> experienceIds = data.getExperiencesId();

            for (String jobId : jobIds) {
                Job job = jobService.getJobById(jobId);
                company.getJobs().add(job);
            }

            for (String experienceId : experienceIds) {
                Experience experience = experienceService.getExperienceById(experienceId);
                company.getExperiences().add(experience);
            }

            companyService.addCompany(company);
            return new ResponseEntity<>(company, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping("/company/{id}")
    public ResponseEntity<Company> updateCompanyById(@RequestBody CompanyReq data, @PathVariable("id") String id) {
        try {
            Company existingCompany = companyService.getCompanyById(id);

            if (existingCompany != null) {
                existingCompany.setName(data.getName());

                List<String> jobIds = data.getJobsId();
                List<String> experienceIds = data.getExperiencesId();

                for (String jobId : jobIds) {
                    Job job = jobService.getJobById(jobId);
                    existingCompany.getJobs().add(job);
                }

                for (String experienceId : experienceIds) {
                    Experience experience = experienceService.getExperienceById(experienceId);
                    existingCompany.getExperiences().add(experience);
                }

                Company updatedCompany = companyService.updateCompanyById(existingCompany, id);
                return new ResponseEntity<>(updatedCompany, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/company/{id}")
    public ResponseEntity<Void> deleteCompanyById(@PathVariable("id") String id) {
        try {
            boolean isDeleted = companyService.deleteCompanyById(id);
            if (isDeleted) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
