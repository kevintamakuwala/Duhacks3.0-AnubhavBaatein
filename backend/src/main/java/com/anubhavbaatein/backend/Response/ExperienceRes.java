package com.anubhavbaatein.backend.Response;

import java.util.ArrayList;
import java.util.List;

import com.anubhavbaatein.backend.model.Category;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.model.Job;
import com.anubhavbaatein.backend.model.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExperienceRes {
    private String id;

    private String difficultyLevel;

    private String description;

    private Integer month;

    private List<String> keywords = new ArrayList<>();
    private Integer rounds;

    private Company company;

    private User user;

    private Job job;

    private List<Category> categories = new ArrayList<>();
}
