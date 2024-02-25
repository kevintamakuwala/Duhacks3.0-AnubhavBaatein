package com.anubhavbaatein.backend.repository;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, String> {

    Optional<Experience> findById(String id);

    List<Experience> findByUser(User user);

    List<Experience> findByJob(Job job);

    List<Experience> findByDifficultyLevel(String difficultyLevel);

    List<Experience> findByRounds(Integer rounds);

    List<Experience> findByMonth(String month);

    @Query("SELECT u FROM Experience u ")
    Page<Experience> getExperienceWithPagination(final Pageable pageable);

}