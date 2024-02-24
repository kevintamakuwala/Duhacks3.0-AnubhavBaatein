package com.anubhavbaatein.backend.service;
import com.anubhavbaatein.backend.model.Company;
import java.util.List;

public interface CompanyService {
    public List<Company> getCompanies();

    public Company getCompanyById(String companyId);
    
    public Company addCompany(Company company);

    public boolean deleteCompanyById(String companyId);
    
    public Company updateCompanyById(Company company, String companyId);

    public Company getCompanyByName(String name);
}
