import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-resumen',
  templateUrl: './table-resumen.component.html',
  styleUrls: ['./table-resumen.component.css']
})
export class TableResumenComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['letter', 'count'];
  dataSource = new MatTableDataSource([]);
  @Input() public tableData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.tableData.sort((a: any, b: any) => {
      if (a.letter < b.letter) {
        return -1;
      }
      if (a.letter > b.letter) {
        return 1;
      }
      return 0;
    });
    this.dataSource.data = this.tableData;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
