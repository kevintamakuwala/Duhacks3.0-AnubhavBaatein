package com.anubhavbaatein.backend.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.anubhavbaatein.backend.Request.JobReq;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.service.CompanyService;
import com.anubhavbaatein.backend.service.JobService;

@RestController
@RequestMapping("/api")
public class JobController {

    @Autowired
    private JobService jobService;

    @Autowired
    private CompanyService companyService;

    @GetMapping("/job")
    public List<Job> getJobs() {
        try {
            List<Job> jobs = jobService.getJobs();
            return jobs;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("/job/{id}")
    public Job getJobById(@PathVariable("id") String id) {
        try {
            Job job = jobService.getJobById(id);
            return job;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("/job/title/{title}")
    public List<Job> getJobByTitle(@PathVariable String title) {
        try {
            List<Job> job = jobService.getJobsByTitle(title);
            return job;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @PostMapping("/job")
    public Job addJob(@RequestBody JobReq data) {
        try {
            Job newJob = new Job();
            newJob.setTitle(data.getTitle());
            newJob.setCtc(data.getCtc());
            newJob.setIndustry(data.getIndustry());
            newJob.setLocation(data.getLocation());
            newJob.setType(data.getType());

            Company company = companyService.getCompanyById(data.getCompanyId());
            newJob.setCompany(company);

            jobService.addJob(newJob);
            return newJob;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @PutMapping("/job/{id}")
    public Job updateJob(@PathVariable("id") String id, @RequestBody JobReq job) {
        try {
            Job newJob = new Job();
            newJob.setTitle(job.getTitle());
            newJob.setCtc(job.getCtc());
            newJob.setIndustry(job.getIndustry());
            newJob.setLocation(job.getLocation());
            newJob.setType(job.getType());

            Company company = companyService.getCompanyById(job.getCompanyId());
            newJob.setCompany(company);

            jobService.updateJobById(newJob, id);
            return newJob;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @DeleteMapping("/job/{id}")
    public boolean deleteJob(@PathVariable("id") String id) {
        try {
            jobService.deleteJobById(id);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }
    
}
