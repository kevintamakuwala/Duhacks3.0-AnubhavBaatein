package com.anubhavbaatein.backend.repository;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, String> {

    List<Job> findByTitle(String title);

    Optional<Job> findById(String id);

    List<Job> findByLocation(String location);

    List<Job> findByCompany(Company company);

}