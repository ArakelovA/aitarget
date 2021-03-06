import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookListComponent} from './book-list.component';
import {BookCardModule} from '../book-card/book-card.module';



@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BookCardModule
  ], exports: [BookListComponent]
})
export class BookListModule { }
