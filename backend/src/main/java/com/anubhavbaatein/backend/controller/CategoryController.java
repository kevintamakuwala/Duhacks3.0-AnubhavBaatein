package com.anubhavbaatein.backend.controller;

import com.anubhavbaatein.backend.Request.CategoryReq;
import com.anubhavbaatein.backend.Response.TopCategory;
import com.anubhavbaatein.backend.model.Category;
import com.anubhavbaatein.backend.model.Company;
import com.anubhavbaatein.backend.service.CategoryService;
import com.anubhavbaatein.backend.service.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://anubhav-baatein.vercel.app/"  , allowedHeaders = "*" , allowCredentials = "true")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/category")
    public ResponseEntity<List<String>> getCategories() {
        try {
            List<Category> categories = categoryService.getCategories();
            List<String> categoryTitles = new ArrayList<>();
            for (Category category : categories) {
                categoryTitles.add(category.getTitle());
            }
            return new ResponseEntity<>(categoryTitles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") String id) {
        try {
            Category category = categoryService.getCategoriesById(id);
            if (category != null) {
                return new ResponseEntity<>(category, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // get category by title
    @GetMapping("/category/title/{title}")
    public ResponseEntity<Category> getCategoryByTitle(@PathVariable("title") String title) {
        try {
            Category category = categoryService.getCategoryByTitle(title);
            if (category != null) {
                return new ResponseEntity<>(category, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/category")
    public ResponseEntity<Category> addCategory(@RequestBody CategoryReq data) {
        try {
            Category newCategory = new Category();

            String uniqueId = UUID.randomUUID().toString();
            newCategory.setId(uniqueId);
            newCategory.setTitle(data.getTitle());

            categoryService.addCategory(newCategory);
            return new ResponseEntity<>(newCategory, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/category/{id}")
    public ResponseEntity<Category> updateCategoryById(@RequestBody CategoryReq data, @PathVariable("id") String id) {
        try {
            Category category = categoryService.getCategoriesById(id);
            if (category != null) {
                category.setTitle(data.getTitle());

                categoryService.updateCategoryById(category, id);
                return new ResponseEntity<>(category, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/category/{id}")
    public ResponseEntity<Void> deleteCategoryById(@PathVariable("id") String id) {
        try {
            boolean isDeleted = categoryService.deleteCategoryById(id);
            if (isDeleted) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/top-categories")
    public ResponseEntity<List<TopCategory>> getTopCategories() {
        return ResponseEntity.ok(categoryService.getTopCategories());
    }

}
