import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokemonsService } from '../../services/pokemons.service';
import { query } from '@angular/animations';
import { SendDataService } from '../../services/send-data.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'details'];
  dataSource: MatTableDataSource<any>;
  totalPokemons: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() namePokemon = new EventEmitter<string>();

  next = '';
  previus = '';
  constructor(private pokemonServices: PokemonsService, private sendDataService: SendDataService) {
  
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
    const queryParams = url.split("/?")[1]; // Divide la URL en dos partes usando '/?' y toma la segunda parte
    console.log(queryParams);
    
   
  }
  getDataInit() {
      
    this.pokemonServices.getAllPokemons().subscribe((data: any) => {
      this.dataSource.data = data.results;
      console.log(data);
      this.previus = data.previous;
      this.next = data.next;
      this.totalPokemons = data.count
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getDataInit()

    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  pageChange(event: any) {
   
    
  }
  showDetail(name: string) {
    this.namePokemon.emit(name);
    console.log('aqui');
    
    this.sendDataService.updateData(name);

  }
}

