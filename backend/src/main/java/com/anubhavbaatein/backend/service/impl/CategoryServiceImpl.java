package com.anubhavbaatein.backend.service.impl;

import com.anubhavbaatein.backend.model.Category;
import com.anubhavbaatein.backend.repository.CategoryRepository;
import com.anubhavbaatein.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoriesById(String categoryId) {
        return categoryRepository.findById(categoryId).get();
    }

    @Override
    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public boolean deleteCategoryById(String categoryId) {
        categoryRepository.deleteById(categoryId);
        return true;
    }

    @Override
    public Category updateCategoryById(Category category, String categoryId) {
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryByTitle(String name) {
        return categoryRepository.findByTitle(name).get();
    }
}
