import { Component, Input, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  nameColums = ['Nombre','Precio Neto','Precio Unidad','Diferencia Precio Unidad','Media Volumen de Venta/Mes']
  displayedColumns  = ['Name','PrecioNeto','PrecioUnidad','DiferenciaPrecioUnidad','MediaVolumenVentaMes'];
  data = [
    {

        Name:'Producto de la competencia 1',
        PrecioNeto:'50g',
        PrecioUnidad:'0.46 MXN',
        DiferenciaPrecioUnidad:'0.003 MXN',
        MediaVolumenVentaMes:'1,000 Unidades'

    },
    {

      Name:'Producto de la competencia 2',
      PrecioNeto:'50g',
      PrecioUnidad:'0.46 MXN',
      DiferenciaPrecioUnidad:'0.003 MXN',
      MediaVolumenVentaMes:'1,000 Unidades'

  },
  {

    Name:'Producto de la competencia 3',
    PrecioNeto:'50g',
    PrecioUnidad:'0.46 MXN',
    DiferenciaPrecioUnidad:'0.003 MXN',
    MediaVolumenVentaMes:'1,000 Unidades'

}
]
columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: MatTableDataSource<any> ;

  @Input() InputFilter: boolean = false;

  @ViewChild(MatPaginator , { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor() {


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


