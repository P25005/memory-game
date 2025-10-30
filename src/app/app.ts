import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

 //Interfície per a les cartes del joc
export interface ICard {
  id: string; 
  image: string;
  state: 'default' | 'flipped' | 'matched';
}

//Component principal de l'aplicació
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  gameState: 'welcome' | 'playing' | 'gameOver' = 'welcome';
  username = '';
  shuffleCount = 1;
  ranking: { username: string, wins: number }[] = [];


  baseCards: ICard[] = [
    { id: 'armadillo', image: 'assets/images/armadillo1.png', state: 'default' },
    { id: 'armadillo', image: 'assets/images/armadillo2.png', state: 'default' },
    { id: 'bufal', image: 'assets/images/búfal1.png', state: 'default' },
    { id: 'bufal', image: 'assets/images/búfal2.png', state: 'default' },
    { id: 'gat', image: 'assets/images/gat1.png', state: 'default' },
    { id: 'gat', image: 'assets/images/gat2.png', state: 'default' },
    { id: 'linx', image: 'assets/images/linx1.png', state: 'default' },
    { id: 'linx', image: 'assets/images/linx2.png', state: 'default' },
    { id: 'mofeta', image: 'assets/images/mofeta1.png', state: 'default' },
    { id: 'mofeta', image: 'assets/images/mofeta2.png', state: 'default' },
    { id: 'os_rentador', image: 'assets/images/ós_rentador1.png', state: 'default' },
    { id: 'os_rentador', image: 'assets/images/ós_rentador2.png', state: 'default' },
    { id: 'os', image: 'assets/images/os1.png', state: 'default' },
    { id: 'os', image: 'assets/images/os2.png', state: 'default' },
    { id: 'ovella', image: 'assets/images/ovella1.png', state: 'default' },
    { id: 'ovella', image: 'assets/images/ovella2.png', state: 'default' },
    { id: 'tigre', image: 'assets/images/tigre1.png', state: 'default' },
    { id: 'tigre', image: 'assets/images/tigre2.png', state: 'default' },
    { id: 'tortuga', image: 'assets/images/tortuga1.png', state: 'default' },
    { id: 'tortuga', image: 'assets/images/tortuga2.png', state: 'default' },
  ];
  gameCards: ICard[] = [];
  flippedCards: ICard[] = [];
  matchedCount = 0;
  isChecking = false;


  startGame(): void {
    this.setupGame();
    this.gameState = 'playing';
    this.isChecking = true;

    this.gameCards.forEach(card => card.state = 'flipped');

    setTimeout(() => {
      this.gameCards.forEach(card => card.state = 'default');
      this.isChecking = false;
    }, 30000);
  }
  //Configura el joc barrejant les cartes segons el nombre de vegades especificat
  setupGame(): void {
    let cardsToShuffle = [...this.baseCards];
    for (let i = 0; i < this.shuffleCount; i++) {
      cardsToShuffle = this.shuffleCards(cardsToShuffle);
    }
    this.gameCards = cardsToShuffle;
  }

  //Algoritme de Fisher per barrejar les cartes
  shuffleCards(cards: ICard[]): ICard[] {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  //Detecta cuan es clica la carta
  onCardClicked(clickedCard: ICard): void {
    if (this.isChecking || clickedCard.state === 'flipped' || clickedCard.state === 'matched') {
      return;
    }
    clickedCard.state = 'flipped';
    this.flippedCards.push(clickedCard);

    if (this.flippedCards.length === 2) {
      this.isChecking = true;
      this.checkForMatch();
    }
  }
  //comprova si les cartes girades són iguals
  checkForMatch(): void {
    const [card1, card2] = this.flippedCards;
    if (card1.id === card2.id) {
      card1.state = 'matched';
      card2.state = 'matched';
      this.matchedCount++;
      this.flippedCards = [];
      this.isChecking = false;

      if (this.matchedCount === this.baseCards.length / 2) {
        this.saveAndShowRanking();
      }
    } else {
      setTimeout(() => {
        card1.state = 'default';
        card2.state = 'default';
        this.flippedCards = [];
        this.isChecking = false;
      }, 2000);
    }
  }

  //Guarda i mostra el rànquing
  saveAndShowRanking(): void {
    const storedRanking = localStorage.getItem('memoryGameRanking');
    let rankingData = storedRanking ? JSON.parse(storedRanking) : [];

    const playerIndex = rankingData.findIndex((player: any) => player.username === this.username);
    if (playerIndex > -1) {
      rankingData[playerIndex].wins++;
    } else {
      rankingData.push({ username: this.username, wins: 1 });
    }

    rankingData.sort((a: any, b: any) => b.wins - a.wins);
    localStorage.setItem('memoryGameRanking', JSON.stringify(rankingData));

    this.ranking = rankingData;
    this.gameState = 'gameOver';
  }
  //Reinicia el joc
  resetGame(): void {
    this.matchedCount = 0;
    this.flippedCards = [];
    this.gameCards = [];
    this.gameState = 'welcome';
  }
}