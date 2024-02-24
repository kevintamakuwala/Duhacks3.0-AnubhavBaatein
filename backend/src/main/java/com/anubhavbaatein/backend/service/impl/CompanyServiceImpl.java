package com.anubhavbaatein.backend.service.impl;

import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.repository.CompanyRepository;
import com.anubhavbaatein.backend.repository.ExperienceRepository;
import com.anubhavbaatein.backend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private ExperienceRepository experienceRepository;

    @Override
    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company getCompanyById(String companyId) {
        return companyRepository.findById(companyId).get();
    }

    @Override
    public Company addCompany(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public boolean deleteCompanyById(String companyId) {
        Company company = getCompanyById(companyId);
        if (company == null) return false;
        companyRepository.deleteById(companyId);
        return true;
    }


    @Override
    public Company updateCompanyById(Company company, String companyId) {
        return companyRepository.save(company);
    }

    @Override
    public Company getCompanyByName(String name) {
        return companyRepository.findByName(name).get();
    }

    @Override
    public List<Company> getTopCompanies() {
        Map<String, Integer> companyExperiencesCount = new HashMap<>();
        List<Experience> experiences = experienceRepository.findAll();
        for (Experience experience : experiences) {
            String companyId = experience.getCompany().getId();
            companyExperiencesCount.put(companyId, companyExperiencesCount.getOrDefault(companyId, 0) + 1);
        }
        List<Company> companies = companyRepository.findAll();
        companies.sort((c1, c2) -> {
            long a = companyExperiencesCount.getOrDefault(c1.getId(), 0);
            long b = companyExperiencesCount.getOrDefault(c2.getId(), 0);
            return Long.compare(b, a);
        });
        int maxCompanies = 8;
        return companies.subList(0, Math.min(maxCompanies, companies.size()));
    }
}
