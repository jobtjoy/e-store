import { ProductDataService } from '@core/index';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Product } from '@core/products/product';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Product>();
  loading = true;
  subscriptions = [];
  displayedColumns = ['imgUrl', 'name', 'price', 'action'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productDataService: ProductDataService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.productDataService
        .getAllProducts()
        .subscribe(products => this.onDataLoad(products))
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onDataLoad(products) {
    this.loading = false;
    this.dataSource.sort = this.sort;
    this.dataSource.data = products;
  }
}
