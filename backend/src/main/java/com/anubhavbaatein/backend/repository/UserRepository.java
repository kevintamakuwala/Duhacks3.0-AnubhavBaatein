package com.anubhavbaatein.backend.repository;
import com.anubhavbaatein.backend.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.role = 'alumni'")
    List<User> findByIsAlumni();

    @Query("SELECT COUNT(u) FROM User u WHERE u.role = 'alumni'")
    Integer countByIsAlumni();

}
