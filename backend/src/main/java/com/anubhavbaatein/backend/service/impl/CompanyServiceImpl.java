package com.anubhavbaatein.backend.service.impl;

import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.repository.CompanyRepository;
import com.anubhavbaatein.backend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

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


}
