


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



export interface Commentary {
  id: number;
  commentary: string;
}

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  data = [

    {
      id: 1,
      title: 'From the vault: Five famous wins against Fulham',
      img: '/henry-fulham-2002.avif',
      shortArticle: `We return to Premier League action with a clash against Fulham, 
          and another London derby as the Cottagers make the trip from the west 
          of the capital to our corner of the north.`,
      article: `What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.`,
      createdAt: '30 Mar 2025'

    },
    {
      id: 2,
      title: 'Andrea Berta joins Arsenal as Sporting Director',
      img: '/IMG_35.avif',
      shortArticle: `We are delighted to announce that Andrea Berta is joining the club as Sporting Director.`,
      article: `What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.
      What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.`,
      createdAt: '30 Mar 2025'

    },
    {
      id: 3,
      title: 'Rice up for PL Player of the Month for March',
      img: '/Declan_Rice.avif',
      shortArticle: `Declan Rice has been shortlisted for the Premier League's Player of the Month award for March.`,
      article: `What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.
      What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.`,
      createdAt: '27 Mar 2025'

    },
    {
      id: 4,
      title: 'Arsenal Diary: What’s in store this week',
      img: '/Martin_Odegaard.avif',
      shortArticle: `There’s plenty of football taking place across our men’s and academy 
          sides this week, while members of our women’s squad head off on international duty.`,
      article: `What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.`,
      createdAt: '31 Mar 2025'

    },
    {
      id: 5,
      title: 'Hat-trick of assists for Odegaard',
      img: '/Martin_Odegaard_Norway.avif',
      shortArticle: `Martin Odegaard was right at the heart of the action as Norway 
          defeated Israel 4-2 in World Cup Qualifying Group I on Tuesday. `,
      article: `What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.
      What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.`,
      createdAt: '26 Mar 2025'

    },

  ]




//   getArticles(): Observable<IArticle[]> {
//     return of(this.data);
//   }

//   getArticleById(id: number) {
//     return of(this.data.find(article => article.id === id));
//   }
// }




} 
