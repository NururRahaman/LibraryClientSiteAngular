import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Category } from './category.model';
import { CategoryService } from './category.service';

import { from, Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dataSaved = false;
  categoryForm: any;

  allCategory: Observable<any> = this.categoryService.getAllCategory();
  // allCategory: Observable<Category[]>;
  // allCategory!: Observable<Category[]>;
  // allCategory:any;

  categoryIdUpdate = null;
  message = "";

  constructor(private formBuilder: FormBuilder, private routes: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      categoryName: ['', [Validators.required]],
      isActive: [false]
    });
    this.loadAllCategory();
  }

  loadAllCategory() {
    this.allCategory = this.categoryService.getAllCategory();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const category = this.categoryForm.value;
    this.createCategory(category);
    this.categoryForm.reset();
  }

  loadCategoryToEdit(categoryId: any) {
    this.categoryService.getCategoryById(categoryId).subscribe(category => {
      this.message = "";
      this.dataSaved = false;
      this.categoryIdUpdate = category.categoryId;
      this.categoryForm.get('categoryName').setValue(category['categoryName']);
      this.categoryForm.get('isActive').setValue(category['isActive']);
    });
  }

  createCategory(category: Category) {
    if (this.categoryIdUpdate == null) {
      this.categoryService.createCategory(category).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllCategory();
        this.categoryIdUpdate = null;
        this.categoryForm.reset();
      }
      )
    }
    else {
      category.categoryId = this.categoryIdUpdate;
      this.categoryService.updateCategory(this.categoryIdUpdate, category).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Update Successfully.";
        this.loadAllCategory();
        this.categoryIdUpdate = null;
        this.categoryForm.reset();

      });
    }
  }

  deleteCategory(id: string) {
    if (confirm("Are You Sure To Delete This?")) {
      this.categoryService.deleteCategoryById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllCategory();
        this.categoryIdUpdate = null;
        this.categoryForm.reset();
      })
    }
  }

  resetForm() {
    this.categoryForm.reset();
    this.message = "";
    this.dataSaved = false;
  }

}

