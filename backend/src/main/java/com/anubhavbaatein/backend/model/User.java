package com.anubhavbaatein.backend.model;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class User {

    @Id
    private String id;

    private String name;

    private String phone;

    private String email;

    private String currentCompany;

    private String linkedin;

    private String github;

    private String role;

    @JsonIgnore
    @OneToMany(mappedBy = "user",cascade=CascadeType.ALL )
    private List<Experience> experiences = new ArrayList<>();
}
