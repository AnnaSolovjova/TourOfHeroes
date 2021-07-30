import { Injectable } from '@angular/core';
import { Heroes } from './mock-heroes'
import { Hero } from './hero'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('Message: Heroes are fetched');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // TODO: error handling
    const hero = Heroes.find(h => h.id === id)!;
    this.messageService.add(`Message: Hero ${id} is fetched`);
    return of(hero);
  }
}
