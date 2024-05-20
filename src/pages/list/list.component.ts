import { Component, Input, inject, numberAttribute } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NamedAPIResource, NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import { DetailsComponent } from '../details/details.component';
import { AppService } from './../../app/app.service';
import { PaginatorComponent } from './paginator/paginator.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, DetailsComponent, PaginatorComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  appService = inject(AppService);

  @Input() list!: NamedAPIResourceList;
  @Input() selected!: Pokemon;
  showAsModal = false;

  @Input({ transform: (value: string) => numberAttribute(value, 1) }) public pageNo!: number;
  @Input({ transform: (value: string) => numberAttribute(value, 10) }) public pageSize!: number;


  router = inject(Router);

  getPageCount() {
    return Math.ceil(this.list.count / this.pageSize);
  }

  onPaginate(pageNo: number) {
    this.router.navigate(['/list', pageNo]);
  }

  onSelect(item: NamedAPIResource) { }

}
