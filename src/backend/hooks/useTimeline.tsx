import gamesData from '../../data/games.json';
import { urls } from '../../assets/images/games/index-games';

export default function useTimeline() {
  // Custom hook logic can be added here 
    for (let i = 0; i < gamesData.games.length; i++) {
        gamesData.games[i].image = urls[i];
    }

    return gamesData.games;
}