package com.anubhavbaatein.backend.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import java.util.List;
import java.util.ArrayList;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Category {
    @Id
    private String id;

    @Column(unique = true, nullable = false)
    @NonNull
    private String title;

    @JsonIgnore
    @ManyToMany
    private List<Experience> experiences = new ArrayList<>();
}