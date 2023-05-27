import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação de componentes',
      autoria: 'Eu',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Informações trocadas',
      autoria: 'Angular',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Desde cedo fui interessado em saber como as coisas funcionavam, computadores e tecnologia no geral sempre chamavam a minha atenção. Ao iniciar na área da programação, um novo mundo se abriu pra mim. Sempre me esforcei para dar o máximo de mim sempre, independente do desafio.O caminho dentro da engenharia é tortuoso, mas segui sempre de cabeça erguida e completamente focado em alcançar os meus objetivos. Busquei conhecer linguagens de programação diferentes e melhorar o meu inglês, de maneira que me auxiliaram na minha graduação e, por consequência, no mercado de trabalho. Atualmente venho me especializando em desenvolvimento web Front- End, além de manter estudos independentes a respeito de Back - End, DevOps, Web design e Cloud Computing. Pretendo me tornar um grande profissional, alcançar grandes patamares e sempre ajudar outras pessoas a crescerem comigo, para isso busco melhorar e crescer todos os dias.',
      autoria: 'Angular',
      modelo: 'modelo3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
