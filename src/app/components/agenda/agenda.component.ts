import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  compromissos: any[] = [];
  novoCompromisso = {
    id: null,
    data: '',
    horario: '',
    descricao: ''
  };

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.getCompromissos();
  }

  getCompromissos(): void {
    this.agendaService.getCompromissos().subscribe((data) => {
      this.compromissos = data;
    });
  }

  addCompromisso(): void {
    if (!this.novoCompromisso.data || !this.novoCompromisso.horario || !this.novoCompromisso.descricao) {
      alert('Preencha todos os campos!');
      return;
    }

    this.agendaService.addCompromisso(this.novoCompromisso).subscribe((data) => {
      this.getCompromissos();
      this.novoCompromisso = { id: null, data: '', horario: '', descricao: '' };
    });
  }

  removeCompromisso(id: number): void {
    this.agendaService.removeCompromisso(id).subscribe(() => {
      this.getCompromissos();
    });
  }
}
