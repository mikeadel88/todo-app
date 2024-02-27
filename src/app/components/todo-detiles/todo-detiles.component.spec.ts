import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetilesComponent } from './todo-detiles.component';

describe('TodoDetilesComponent', () => {
  let component: TodoDetilesComponent;
  let fixture: ComponentFixture<TodoDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDetilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
