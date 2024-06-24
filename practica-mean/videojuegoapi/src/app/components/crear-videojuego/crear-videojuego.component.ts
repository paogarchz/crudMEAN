import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Videojuego } from 'src/app/models/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-crear-videojuego',
  templateUrl: './crear-videojuego.component.html',
  styleUrls: ['./crear-videojuego.component.css']
})
export class CrearVideojuegoComponent implements OnInit {
  videojuegoForm: FormGroup;
  titulo = 'Crear videojuego';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _videojuegoService: VideojuegoService,
              private aRouter: ActivatedRoute){
    this.videojuegoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      iva: ['', Validators.required],
      codigo: ['', Validators.required],
      stock: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarVideojuego() {
    console.log(this.videojuegoForm);

    const VIDEOJUEGO: Videojuego = {
      nombre: this.videojuegoForm.get('nombre')?.value,
      precio: this.videojuegoForm.get('precio')?.value,
      iva: this.videojuegoForm.get('iva')?.value,
      codigo: this.videojuegoForm.get('codigo')?.value,
      stock: this.videojuegoForm.get('stock')?.value,
    };

    if (this.id !== null) {
      // Actualizamos videojuego
      this._videojuegoService.actualizarVideojuego(this.id, VIDEOJUEGO).subscribe(data => {
        this.toastr.info('El videojuego fue actualizado con éxito!', 'Videojuego Actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.videojuegoForm.reset();
      });
    } else {
      // Agregamos videojuego
      this._videojuegoService.guardarVideojuego(VIDEOJUEGO).subscribe(data => {
        this.toastr.success('El videojuego fue registrado con éxito!', 'Videojuego Registrado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.videojuegoForm.reset();
      });
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar videojuego';
      this._videojuegoService.obtenerVideojuego(this.id).subscribe(data => {
        this.videojuegoForm.setValue({
          nombre: data.nombre,
          precio: data.precio,
          iva: data.iva,
          codigo: data.codigo,
          stock: data.stock,
        });
      });
    }
  }
}
