import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpokemonComponent } from './cardpokemon.component';

describe('CardpokemonComponent', () => {
  let component: CardpokemonComponent;
  let fixture: ComponentFixture<CardpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
