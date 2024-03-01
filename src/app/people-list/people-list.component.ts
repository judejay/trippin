import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs';
import { TrippinService } from '../trippin.service';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss',
})
export class PeopleListComponent {
  public nameFilter = new FormControl('');
  public input$ = this.nameFilter.valueChanges.pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap((name) => this.trippinService.getPeople(name ?? ''))
  );

  constructor(private trippinService: TrippinService) {}
}
