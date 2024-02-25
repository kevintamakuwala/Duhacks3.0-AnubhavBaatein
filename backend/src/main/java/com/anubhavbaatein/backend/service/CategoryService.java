package com.anubhavbaatein.backend.service;
import com.anubhavbaatein.backend.Response.TopCategory;
import com.anubhavbaatein.backend.model.Category;
import java.util.List;

public interface CategoryService {
    public List<Category> getCategories();

    public Category getCategoriesById(String categoryId);
    
    public Category addCategory(Category category);

    public boolean deleteCategoryById(String categoryId);

    public Category updateCategoryById(Category category, String categoryId);
    
    public Category getCategoryByTitle(String name);

    public List<TopCategory> getTopCategories();
}
