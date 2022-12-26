import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { order } from 'src/app/list-of-orders/Models/order';
registerLocaleData(localeFr, 'pl');


@Component({
  selector: 'app-orders',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class OrdersComponent implements AfterViewInit {

  displayedColumns: string[] = ['Zamówienie', 'Data', 'Cena', 'Klient'];
  dataSource: MatTableDataSource<order>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() {
    const orders = this.orders;
    this.dataSource = new MatTableDataSource(orders);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  orders: order[] = [
    {
      id: 9801,
      czyZrealizowane: true,
      nazwa: 'Kolczyk Srebrny Bermuda Small',
      ilosc: 1,
      data: new Date("2022-07-06T12:12:12Z"),//godzina i minuta
      cena: 124.99,
      faktura: '94/07/2022',
      nabywca: {
        nazwa: 'Wahid Bekier',
        mail: 'Wahid@fastsoop.pl',
        telefon: 784864807
      }
    },
    {
      id: 9779,
      czyZrealizowane: true,
      nazwa: 'Doris Gold',
      ilosc: 1,
      data: new Date("2022-04-01T12:02:12Z"),
      cena: 303.99,
      faktura: '92/07/2022',
      nabywca: {
        nazwa: 'Moja Firma',
        mail: 'saafan@fastsoop.pl',
        telefon: 784864807

      }
    },
    {
      id: 9771,
      czyZrealizowane: true,
      nazwa: 'Kolczyk Wendy Pink Large 9mm',
      ilosc: 2,
      data: new Date("2022-07-05T04:33:12Z"),//godzina i minuta
      cena: 33.99,
      faktura: '70/07/2022',
      nabywca: {
        nazwa: 'Dagmara Klimas',
        mail: 'Dagmarad@fastsoop.pl',
        telefon: 784864807
      }
    }

  ]



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


}
