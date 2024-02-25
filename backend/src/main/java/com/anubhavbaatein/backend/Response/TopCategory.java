package com.anubhavbaatein.backend.Response;

import java.util.ArrayList;
import java.util.List;

import org.springframework.lang.NonNull;

import com.anubhavbaatein.backend.model.Experience;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TopCategory {

    private String id;
    private String title;
    private Integer experienceCount;
    
}
