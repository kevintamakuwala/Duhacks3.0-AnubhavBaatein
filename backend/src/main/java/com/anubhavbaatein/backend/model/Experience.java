package com.anubhavbaatein.backend.model;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Experience {

    @Id
    private String id;

    private String difficultyLevel;

    private String description;

    @Min(value = 1, message = "Value must be greater than or equal to 1")
    @Max(value = 12, message = "Value must be less than or equal to 12")
    private Integer month;

    private List<String> keywords = new ArrayList<>();

    @Min(value = 1, message = "Value must be greater than or equal to 1")
    @Max(value = 10, message = "Value must be less than or equal to 10")
    private Integer rounds;

    @ManyToOne
    private Company company;

    @JsonBackReference
    @ManyToOne
    private User user;

    @ManyToOne
    private Job job;

    @ManyToMany
    private List<Category> categories = new ArrayList<>();
}