import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector:'app-course-list',
    templateUrl: './course.list.component.html'
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                durtion: 120,
                rating: 5.4,
                releaseDate: new Date()
            },
            {
                id: 2,
                name: 'Angular: Forms2',
                imageUrl: '',
                price: 2000.50,
                code: 'XPS-8788',
                durtion: 250,
                rating: 3.4,
                releaseDate: new Date()
            }
        ]
    }

}