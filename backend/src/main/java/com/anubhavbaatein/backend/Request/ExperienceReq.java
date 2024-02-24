package com.anubhavbaatein.backend.Request;
import java.util.ArrayList;
import java.util.List;
import com.anubhavbaatein.backend.model.Company;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExperienceReq {
    private String difficultyLevel;
    
    private String description;

    private Integer month;

    private List<String> keywords = new ArrayList<>();

    private Integer rounds;

    private String companyId;

    private String userId;

    private String jobId;

    private List<String> categories = new ArrayList<>();
}
