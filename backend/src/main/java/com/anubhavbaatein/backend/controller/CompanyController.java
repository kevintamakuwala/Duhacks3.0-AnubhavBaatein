package com.anubhavbaatein.backend.controller;

import com.anubhavbaatein.backend.Request.CompanyReq;
import com.anubhavbaatein.backend.Response.CompanyRes;
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

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://anubhav-baatein.vercel.app/" , allowedHeaders = "*", allowCredentials = "true")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @Autowired
    private JobService jobService;

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/company")
    public ResponseEntity<List<CompanyRes>> getCompanies() {
        List<CompanyRes> response= new ArrayList<>();
        try {
            List<Company> companies = companyService.getCompanies();

            for(Company company : companies)
            {
                CompanyRes t = new CompanyRes();

                t.setId(company.getId());
                t.setName(company.getName());
                t.setJobs(company.getJobs());
                t.setExperiences(company.getExperiences());

                response.add(t);
            }

            return new ResponseEntity<>(response, HttpStatus.OK);
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
    public ResponseEntity<String> addCompany(@RequestBody CompanyReq data) {
        try {
            Company company = new Company();
            company.setId(UUID.randomUUID().toString());
            company.setName(data.getName());

            Company temp = companyService.addCompany(company);
            return new ResponseEntity<>(temp.getId(), HttpStatus.OK);
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

    @GetMapping("/top-companies")
    public ResponseEntity<List<Company>> getTopCompanies() {
        return ResponseEntity.ok(companyService.getTopCompanies());
    }

}
