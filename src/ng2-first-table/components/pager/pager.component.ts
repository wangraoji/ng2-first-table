import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataSource } from '../../lib/data-source/data-source';

@Component({
  selector: 'ng2-first-table-pager',
  styleUrls: ['./pager.component.scss'],
  template: `
    <nav *ngIf="shouldShow()" class="ng2-smart-pagination-nav">
      <div class="pageBox">
          <div>当前</div>
          <input type="text" [(ngModel)]="pageInx" name="pager" class="container" (keyup)="goPage($event)">
          <div>/{{getLast()}} 页 </div> 
  
      </div>
      
      <ul class="ng2-smart-pagination pagination">
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}" (click)="getPage() === 1 ? false: serverChangePageFn(1)">
          <a class="ng2-smart-page-link page-link" href="#" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">First</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item" (click)="getPage() === 1 ? false:serverChangePageFn(getPage() - 1)">
          <a class="ng2-smart-page-link page-link" href="#" aria-label="prev">
            <span aria-hidden="true">&lsaquo;</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()"
        (click)="serverChangePageFn(page)">
          <span class="ng2-smart-page-link page-link"
          *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
          <a class="ng2-smart-page-link page-link" href="#" *ngIf="getPage() != page">{{ page }}</a>
        </li>
        <li class="ng2-smart-page-item page-item" (click)="getPage() === getLast()? false: serverChangePageFn(getPage() + 1)">
          <a class="ng2-smart-page-link page-link" href="#" aria-label="next">
            <span aria-hidden="true">&rsaquo;</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item" (click)="getPage() === getLast() ? fasle: serverChangePageFn(getLast())"
        [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link" href="#" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
})
export class PagerComponent implements OnChanges {
  // &lsaquo;
  @Input() source: DataSource;

  @Output() changePage = new EventEmitter<any>();

  // 取服务端分页配置
  @Input() serverPager: any;

  // 发射服务端分页事件
  @Output() serverChangePage = new EventEmitter<any>();

  /*
      pages：         页码
      page：          当前点击的页
      count：         数据总条数
      perPage：       当前1页展示多少条
      isServerPager:  是否服务端分页
  */
  protected pages: Array<any>;
  protected page: number;
  protected count: number = 0;
  protected perPage: number;
  protected isServerPager: boolean;

  protected dataChangedSub: Subscription;

  protected pageInx: number = 1;
  ngOnChanges(changes: SimpleChanges) {
    this.isServerPager = this.serverPager.is;
    // 如果是服务端分页就走服务端逻辑
    // 如果不是就是客户端分页
    if (this.isServerPager) {
      this.page = this.serverPager.currentPage;
      this.perPage = this.serverPager.perPage;
      this.count = this.serverPager.count;
      this.initPages();
    } else {
      if (changes.source) {
        if (!changes.source.firstChange) {
          this.dataChangedSub.unsubscribe();
        }
        this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
          this.page = this.source.getPaging().page;
          this.perPage = this.source.getPaging().perPage;
          this.count = this.source.count();
          if (this.isPageOutOfBounce()) {
            this.source.setPage(--this.page);
          }
          this.processPageChange(dataChanges);
          this.initPages();
        });
      }
    }

  }

  serverChangePageFn(pageInx: any) {
    if (this.getPage() === pageInx) {
      return false;
    }
    this.pageInx = pageInx;
    this.paginate(pageInx);
    if (this.isServerPager) {
      this.initPages();
      this.serverChangePage.emit({
        pageInx: pageInx,
        prePage: this.perPage,
      });
    }
    return false;
  }

  goPage(e: any) {
    if(e.target.value >= this.getLast()){
      e.target.value = this.getLast();
    }
    e.target.value = e.target.value.replace(/\D/g,'')
    if(e.keyCode === 13) {
      // ~~e.target.value  把  '1' 转成 1  类似  '1' * 1 = 1;
      this.serverChangePageFn(~~e.target.value);
    }
  }


  /**
   * We change the page here depending on the action performed against data source
   * if a new element was added to the end of the table - then change the page to the last
   * if a new element was added to the beginning of the table - then to the first page
   * @param changes
   */
  processPageChange(changes: any) {
    if (changes['action'] === 'prepend') {
      this.source.setPage(1);
    }
    if (changes['action'] === 'append') {
      this.source.setPage(this.getLast());
    }
  }

  shouldShow(): boolean {

    if (this.isServerPager) {
      return this.count > this.perPage;
    } else {
      return this.source.count() > this.perPage;
    }
  }

  paginate(page: number): boolean {
    this.source.setPage(page);
    this.page = page;
    this.changePage.emit({ page });
    return false;
  }

  getPage(): number {
    // console.info(this.page);
    return this.page;
  }

  getPages(): Array<any> {
    // console.info(this.pages);
    return this.pages;
  }

  getLast(): number {

    return Math.ceil(this.count / this.perPage);
  }

  isPageOutOfBounce(): boolean {
    return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
  }

  initPages() {
    const pagesCount = this.getLast();
    let showPagesCount = 4;
    showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
    this.pages = [];
    if (this.shouldShow()) {
      let middleOne = Math.ceil(showPagesCount / 2);
      middleOne = this.page >= middleOne ? this.page : middleOne;
      let lastOne = middleOne + Math.floor(showPagesCount / 2);
      lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
      const firstOne = lastOne - showPagesCount + 1;
      for (let i = firstOne; i <= lastOne; i++) {
        this.pages.push(i);
      }
    }
  }
}
