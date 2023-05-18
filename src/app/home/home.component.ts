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

  imgCollection: Array<object> = [];


  ngOnInit(): void{
    let arvore = new Arvore();
    for (let i =0; i < 20; i++){
      let ramdonNumber = Math.floor(Math.random() * 100);
      arvore.adicionarNo(ramdonNumber, undefined);
    }
    console.log(arvore.getNoRaiz());

    this.imgCollection = [
      {
        image: 'https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/8551c7cb9ffa4963855c752b712f2edc.jpg',
        thumbImage: 'https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/8551c7cb9ffa4963855c752b712f2edc.jpg',
        alt: 'Image 1',
        title: 'Image 1'
      }, {
        image: 'https://hoteldezdejulho.manaus.br/wp-content/uploads/2019/04/WhatsApp-Image-2018-10-10-at-09.11.52-1024x682.jpeg',
        thumbImage: 'https://hoteldezdejulho.manaus.br/wp-content/uploads/2019/04/WhatsApp-Image-2018-10-10-at-09.11.52-1024x682.jpeg',
        title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/ad/e4/94.jpg',
        thumbImage: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/ad/e4/94.jpg',
        title: 'Image 3',
        alt: 'Image 3'
      }, {
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/8c/43/3d.jpg',
        thumbImage: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/8c/43/3d.jpg',
        title: 'Image 4',
        alt: 'Image 4'
      }, {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/c6/44/85/caption.jpg?w=1200&h=-1&s=1',
        thumbImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/c6/44/85/caption.jpg?w=1200&h=-1&s=1',
        title: 'Image 5',
        alt: 'Image 5'
      }, {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/40/32/3e/img-20181028-130505165.jpg?w=1000&h=-1&s=1',
        thumbImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/40/32/3e/img-20181028-130505165.jpg?w=1000&h=-1&s=1',
        title: 'Image 6',
        alt: 'Image 6'
      }, {
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/8f/eb/7a.jpg',
        thumbImage: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/8f/eb/7a.jpg',
        title: 'Image 7',
        alt: 'Image 7'
      }, {
        image: 'hhttps://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/8f/eb/7a.jpg',
        thumbImage: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/8f/eb/7a.jpg',
        title: 'Image 8',
        alt: 'Image 8'
      }
  ];
  }

  maxImages = 4;
  currentImageIndex = 0;

  onNextButtonClick(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imgCollection.length;
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


