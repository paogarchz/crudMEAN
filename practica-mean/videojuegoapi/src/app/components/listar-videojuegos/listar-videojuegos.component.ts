import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Videojuego } from 'src/app/models/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-listar-videojuegos',
  templateUrl: './listar-videojuegos.component.html',
  styleUrls: ['./listar-videojuegos.component.css']
})
export class ListarVideojuegosComponent implements OnInit {
  listVideojuegos: Videojuego[] = [];

  constructor(private _videojuegoService: VideojuegoService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVideojuegos();
  }


  obtenerVideojuegos() {
    this._videojuegoService.getVideojuegos().subscribe(data => {
      console.log(data);
      this.listVideojuegos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarVideojuegos(id: any) {
    this._videojuegoService.eliminarVideojuego(id).subscribe(data => {
      this.toastr.error('El videojuego fue eliminado con exito' ,'videojuego Eliminado');
      this.obtenerVideojuegos();
    }, error => {
      console.log(error);
    })
  }

}
