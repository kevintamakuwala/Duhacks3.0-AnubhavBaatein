package com.anubhavbaatein.backend.service.impl;

import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.repository.CompanyRepository;
import com.anubhavbaatein.backend.repository.JobRepository;
import com.anubhavbaatein.backend.service.CompanyService;
import com.anubhavbaatein.backend.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobServiceImpl implements JobService {
    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    @Override
    public Job getJobById(String jobId) {
        return jobRepository.findById(jobId).get();
    }

    @Override
    public Job addJob(Job job) {
        Company company = job.getCompany();

        if (company != null) {
            company.getJobs().add(job);
            companyRepository.save(company);
        }

        return jobRepository.save(job);
    }

    @Override
    public boolean deleteJobById(String jobId) {
        jobRepository.deleteById(jobId);
        return true;
    }

    @Override
    public Job updateJobById(Job job, String jobId) {
        Company company = job.getCompany();

        if (company != null) {
            company.getJobs().add(job);
            companyRepository.save(company);
        }
        return jobRepository.save(job);
    }

    @Override
    public List<Job> getJobsByTitle(String title) {
        return jobRepository.findByTitle(title);
    }

    @Override
    public List<Job> getJobsByCompany(String companyId) {
        Company company = companyRepository.findById(companyId).get();

        return jobRepository.findByCompany(company);
    }
}
