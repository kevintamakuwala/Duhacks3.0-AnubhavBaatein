package com.anubhavbaatein.backend.Request;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobReq {
    private String title;
    
    private String ctc;

    private String type;

    private String location;

    private String industry;

    private String companyId;
}
