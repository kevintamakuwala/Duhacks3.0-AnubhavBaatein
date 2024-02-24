package com.anubhavbaatein.backend.service;
import com.anubhavbaatein.backend.model.Job;
import java.util.List;

public interface JobService {
    public List<Job> getJobs();

    public Job getJobById(String jobId);

    public List<Job> getJobsByCompany(String companyId);

    public Job addJob(Job job);
    
    public boolean deleteJobById(String jobId);

    public Job updateJobById(Job job, String jobId);
    
    public List<Job> getJobsByTitle(String title);
}
