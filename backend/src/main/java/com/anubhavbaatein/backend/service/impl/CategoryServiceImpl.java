package com.anubhavbaatein.backend.service.impl;

import com.anubhavbaatein.backend.model.Category;
import com.anubhavbaatein.backend.model.Experience;
import com.anubhavbaatein.backend.repository.CategoryRepository;
import com.anubhavbaatein.backend.repository.ExperienceRepository;
import com.anubhavbaatein.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ExperienceRepository experienceRepository;

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

    @Override
    public List<Category> getTopCategories() {

        Map<String, Integer> categoryExperiencesCount = new HashMap<>();
        List<Experience> experiences = experienceRepository.findAll();
        for (Experience experience : experiences) {
            for (Category category : experience.getCategories()) {
                String categoryId = category.getId();
                categoryExperiencesCount.put(categoryId, categoryExperiencesCount.getOrDefault(categoryId, 0) + 1);
            }
        }
        List<Category> categories = categoryRepository.findAll();
        categories.sort((c1, c2) -> {
            long a = categoryExperiencesCount.getOrDefault(c1.getId(), 0);
            long b = categoryExperiencesCount.getOrDefault(c2.getId(), 0);
            return Long.compare(b, a);
        });
        int maxCategories = 8;
        return categories.subList(0, Math.min(maxCategories, categories.size()));

    }
}
