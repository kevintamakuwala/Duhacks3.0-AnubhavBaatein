package com.anubhavbaatein.backend.model;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.lang.NonNull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Company {
    @Id
    private String id;

    @NonNull
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "company" , cascade = CascadeType.ALL)
    private List<Experience> experiences = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "company" , cascade = CascadeType.ALL)
    private List<Job> jobs = new ArrayList<>();
}
