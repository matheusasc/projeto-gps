import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";




@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    public router: Router) {
  }

  ngOnInit(): void{
    let arvore = new Arvore();
    for (let i =0; i < 20; i++){
      let ramdonNumber = Math.floor(Math.random() * 100);
      arvore.adicionarNo(ramdonNumber, undefined);
    }
    console.log(arvore.getNoRaiz());
  }

  public navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}

export class No {
  value: number;
  noEsquerdo: undefined | No;
  noDireito: undefined | No;

  constructor(value: number, noEsquerdo: undefined | No, noDireito: undefined | No){
    this.value = value;
    this.noEsquerdo = noEsquerdo;
    this.noDireito = noDireito;
  }
}

export class Arvore{
  noRaiz: No | undefined;

  insertNoRaiz(value:number){
    this.noRaiz = {
      value: value,
      noDireito: undefined,
      noEsquerdo: undefined
    }
  }

  getNovoNo(value:number){
    return {
      value: value,
      noDireito: undefined,
      noEsquerdo: undefined
    }
  }

  public adicionarNo(value:number, no: No | undefined) {
    let noAtual: No | undefined;
    if (no === undefined){
      if (this.noRaiz === undefined) {
        this.insertNoRaiz(value);
        return;
      }
      noAtual = this.noRaiz;
    } else {
      noAtual = no;
    }

    if (value < noAtual.value){
      if (noAtual.noEsquerdo === undefined){
        noAtual.noEsquerdo = this.getNovoNo(value);
        return;
      }
      this.adicionarNo(value, noAtual.noEsquerdo);
    } else {
      if (noAtual.noDireito === undefined){
        noAtual.noDireito = this.getNovoNo(value);
        return;
      }
      this.adicionarNo(value, noAtual.noDireito)
    }
  }

  getNoRaiz (){
    return this.noRaiz;
  }
}


