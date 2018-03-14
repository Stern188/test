import { Component } from '@angular/core';
import { MockServerResultsService } from "./mock-server-results-service";
import { PagedData } from "./model/paged-data";
import { CorporateEmployee } from "./model/corporate-employee";
import { Page } from "./model/page";

@Component({
  providers: [
    MockServerResultsService
  ],
  selector: 'app-paging-virtual',
  templateUrl: './paging-virtual.component.html',
  styleUrls: ['./paging-virtual.component.scss']
})
export class PagingVirtualComponent {
  page = new Page();
  rows = new Array<CorporateEmployee>();
  cache: any = {};

  constructor(private serverResultsService: MockServerResultsService) {
    this.page.pageNumber = 0;
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.page.size = pageInfo.pageSize;

    // cache results
    // if(this.cache[this.page.pageNumber]) return;
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;

      // calc start
      const start = this.page.pageNumber * this.page.size;

      // copy rows
      const rows = [...this.rows];

      // insert rows into new position
      rows.splice(start, 0, ...pagedData.data);

      // set rows to our new rows
      this.rows = rows;

      // add flag for results
      this.cache[this.page.pageNumber] = true;
    });
  }

}
