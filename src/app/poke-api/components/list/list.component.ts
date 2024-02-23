import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonsService } from '../../services/pokemons.service';
import { SendDataService } from '../../services/send-data.service';
import {
  PokeApiResponse,
  Result,
} from '../../interfaces/PokeApiResponse.interface';
import { Subscription } from 'rxjs';
import { Status } from '../../interfaces/Status.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'details'];
  dataSource: MatTableDataSource<Result>;
  totalPokemons: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() namePokemon = new EventEmitter<string>();
  subscription!: Subscription;
  status: Status = {
    data: false,
    loading: true,
    error: false,
  };
  isMobile: boolean = false;
  arrayCount = [ {
    letter: 'A',
    count: 1
  }
  ];

  constructor(
    private pokemonServices: PokemonsService,
    private sendDataService: SendDataService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    const breakpoints = [
      Breakpoints.XSmall,
      Breakpoints.Small,
    ];

    this.breakpointObserver.observe(breakpoints).subscribe((result) => {
      if (result.matches) {
        this.isMobile = true;
        console.log('Estamos en pantalla md o más pequeña');
      } else {
        this.isMobile = false;
        console.log('Estamos en pantalla lg o más grande');
      }
    });
  }
  getDataInit() {
    this.status.data = false;
    this.status.loading = true;
    this.subscription = this.pokemonServices.getAllPokemons().subscribe(
      (data: PokeApiResponse) => {
        data.results.forEach(pokemon => {
          const firstLetter = pokemon.name[0].toUpperCase();
          const obj = {
            letter: firstLetter,
            count: 1
          }
          const index = this.arrayCount.findIndex((data) => data.letter === firstLetter);
          if (index !== -1) {
            this.arrayCount[index].count++;
          } else {
            this.arrayCount.push({
              letter: firstLetter,
              count: 1
            });
          }       
        });

        setTimeout(() => {
          console.log(this.arrayCount);
          
          
        }, 5000);
        this.dataSource.data = data.results;
        console.log(data);
        this.totalPokemons = data.count;
        this.status.data = true;
        this.status.loading = false;
      },
      (error) => {
        this.status.error = true;
        this.status.loading = false;
      },
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getDataInit();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showDetail(name: string) {
    this.sendDataService.updateData(name);
    if(this.isMobile) {
      this.openDialog()
    } else {
      this.namePokemon.emit(name);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '90%'
    });
  }
}
