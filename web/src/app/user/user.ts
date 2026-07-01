import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { User} from 'shared';
@Component({
  selector: 'app-user',
  imports: [ ReactiveFormsModule ],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserPage implements OnInit {
  
  private fb = inject(FormBuilder);
  private userService =inject(UserService);

private readonly destroyRef = inject(DestroyRef);

  users: User[] = [];

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
  });



  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService
      .getUsers().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(users => this.users = users);
  }

  createUser(): void {

    if (this.form.invalid) {
      return;
    }

    this.userService
      .createUser(this.form.getRawValue())
      .subscribe(user => {

      this.users = [...this.users, user];

      this.form.reset();


      });

  }

}