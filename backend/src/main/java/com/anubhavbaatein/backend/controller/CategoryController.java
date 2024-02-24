package com.anubhavbaatein.backend.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.anubhavbaatein.backend.Request.CategoryReq;
import com.anubhavbaatein.backend.model.Category;
import com.anubhavbaatein.backend.service.CategoryService;
import com.anubhavbaatein.backend.service.ExperienceService;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/category")
    public List<String> getCategories() {
        try {
            List<Category> categories = categoryService.getCategories();
            List<String> categoryTitles = new ArrayList<>();

            for (Category category : categories) {
                categoryTitles.add(category.getTitle());
            }

            return categoryTitles;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("/category/{id}")
    public Category getCategoryById(@PathVariable("id") String id) {
        try{
            Category category = categoryService.getCategoriesById(id);
            return category;
        }
        catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    // get category by title
    @GetMapping("/category/title/{title}")
    public Category getCategoryByTitle(@PathVariable("title") String title) {
        try {
            Category category = categoryService.getCategoryByTitle(title);
            return category;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @PostMapping("/category")
    public Category addCategory(@RequestBody CategoryReq data) {

        try {
            Category newCategory = new Category();

            String uniqueId = UUID.randomUUID().toString();
            newCategory.setId(uniqueId);
            newCategory.setTitle(data.getTitle());

            List<String> experiences = data.getExperiences();

            for (String experienceId : experiences) {
                newCategory.getExperiences().add(experienceService.getExperienceById(experienceId));
            }

            return categoryService.addCategory(newCategory);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @PutMapping("/category/{id}")
    public Category updateCategoryById(@RequestBody CategoryReq data, @PathVariable("id") String id) {
        try {
            Category category = categoryService.getCategoriesById(id);

            category.setTitle(data.getTitle());
            
            List<String> experiences = data.getExperiences();

            for (String experienceId : experiences) {
                category.getExperiences().add(experienceService.getExperienceById(experienceId));
            }

            return categoryService.updateCategoryById(category, id);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @DeleteMapping("/category/{id}")
    public boolean deleteCategoryById(@PathVariable("id") String id) {
        try {
            return categoryService.deleteCategoryById(id);
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

}
