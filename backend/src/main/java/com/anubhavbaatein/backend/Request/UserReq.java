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
@NoArgsConstructor
public class UserReq {

    private String id;

    private String name;

    private String phone;

    private String email;

    private String currentCompany;

    private String linkedin;

    private String github;

    private String role;

    private List<String> experiencesId = new ArrayList<>();
}
