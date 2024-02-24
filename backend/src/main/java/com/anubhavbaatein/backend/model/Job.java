package com.anubhavbaatein.backend.model;
import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Job {
    @Id
    private String id;

    @Column(name = "job_title", length = Integer.MAX_VALUE)
    private String title;

    private String ctc;

    private String type;

    private String location;

    private String industry;

    @ManyToOne
    private Company company;

    @OneToMany(mappedBy = "job", cascade = CascadeType.ALL)
    private List<Experience> experiences = new ArrayList<>();
}
