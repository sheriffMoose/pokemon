import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() pageNo!: number;
  @Input() pageCount!: number;

  @Output() onPaginate = new EventEmitter<number>();

  isFirstPage() {
    return this.pageNo === 1;
  }

  isLastPage() {
    return this.pageNo === this.pageCount;
  }

  paginate(offset = 0, pageNo = this.pageNo) {
    this.pageNo = pageNo + offset;
    this.onPaginate.emit(this.pageNo);
  }
}
