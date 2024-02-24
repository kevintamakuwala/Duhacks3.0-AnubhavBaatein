package com.anubhavbaatein.backend.controller;
import java.util.List;
import java.util.UUID;
import com.anubhavbaatein.backend.Request.CompanyReq;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.service.CompanyService;
import com.anubhavbaatein.backend.service.ExperienceService;
import com.anubhavbaatein.backend.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @Autowired
    private JobService jobService;

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/company")
    public List<Company> getCompanies() {
        try {
            List<Company> companies = companyService.getCompanies();
            return companies;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("/company/{id}")
    public Company getCompanyById(@PathVariable("id") String id) {
        try {
            Company company = companyService.getCompanyById(id);
            return company;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("/company/name/{name}")
    public Company getCompanyByName(@PathVariable("name") String name) {
        try {
            Company company = companyService.getCompanyByName(name);
            return company;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @PostMapping("/company")
    public Company addCompany(@RequestBody CompanyReq data) {
        System.out.println(data.getName());
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

        try {
            companyService.addCompany(company);
            return company;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @PutMapping("/company/{id}")
    public Company updateCompanyById(@RequestBody CompanyReq data, @PathVariable("id") String id) {
        try {
            Company company = companyService.getCompanyById(id);

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

            return companyService.updateCompanyById(company, id);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @DeleteMapping("/company/{id}")
    public boolean deleteCompanyById(@PathVariable("id") String id) {
        try {
            return companyService.deleteCompanyById(id);
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }
}
