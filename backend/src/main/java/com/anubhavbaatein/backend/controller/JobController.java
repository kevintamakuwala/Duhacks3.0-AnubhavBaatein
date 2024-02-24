package com.anubhavbaatein.backend.controller;

import com.anubhavbaatein.backend.Request.JobReq;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.service.CompanyService;
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
public class JobController {

    @Autowired
    private JobService jobService;

    @Autowired
    private CompanyService companyService;

    @GetMapping("/job")
    public ResponseEntity<List<Job>> getJobs() {
        try {
            List<Job> jobs = jobService.getJobs();
            return new ResponseEntity<>(jobs, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/job/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable("id") String id) {
        try {
            Job job = jobService.getJobById(id);
            if (job != null) {
                return new ResponseEntity<>(job, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/job/title/{title}")
    public ResponseEntity<List<Job>> getJobByTitle(@PathVariable String title) {
        try {
            List<Job> jobs = jobService.getJobsByTitle(title);
            if (jobs != null) {
                return new ResponseEntity<>(jobs, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/job")
    public ResponseEntity<Job> addJob(@RequestBody JobReq data) {
        try {
            Job newJob = new Job();
            newJob.setId(UUID.randomUUID().toString());
            newJob.setTitle(data.getTitle());
            newJob.setCtc(data.getCtc());
            newJob.setIndustry(data.getIndustry());
            newJob.setLocation(data.getLocation());
            newJob.setType(data.getType());

            Company company = companyService.getCompanyById(data.getCompanyId());
            newJob.setCompany(company);

            jobService.addJob(newJob);
            return new ResponseEntity<>(newJob, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/job/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable("id") String id, @RequestBody JobReq job) {
        try {
            Job newJob = jobService.getJobById(id);

            if (newJob != null) {
                newJob.setTitle(job.getTitle());
                newJob.setCtc(job.getCtc());
                newJob.setIndustry(job.getIndustry());
                newJob.setLocation(job.getLocation());
                newJob.setType(job.getType());

                Company company = companyService.getCompanyById(job.getCompanyId());
                newJob.setCompany(company);

                jobService.updateJobById(newJob, id);
                return new ResponseEntity<>(newJob, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/job/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable("id") String id) {
        try {
            boolean isDeleted = jobService.deleteJobById(id);
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
