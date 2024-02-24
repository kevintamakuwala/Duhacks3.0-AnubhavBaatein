package com.anubhavbaatein.backend.service;
import com.anubhavbaatein.backend.model.Experience;
import java.util.List;

public interface ExperienceService {
    public List<Experience> getExperiences();

    public Experience getExperienceById(String experienceId);

    public Experience addExperience(Experience experience);

    public boolean deleteExperienceById(String experienceId);

    public Experience updateExperienceById(Experience experience, String experienceId);
}
