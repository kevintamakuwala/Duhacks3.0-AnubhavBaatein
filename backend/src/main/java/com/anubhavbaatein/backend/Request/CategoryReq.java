package com.anubhavbaatein.backend.Request;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructo
public class CategoryReq {

    private String categoryTitle;

    private List<String> experiences = new ArrayList<>();
    
}
