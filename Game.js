import { Board } from "./Board.js";
import { INIT_GAME, INVALID, MOVE } from "./messages.js";

function getRandomInteger(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changePosition(number, currentPosition){
    if(number+currentPosition>39){
        return number + currentPosition - 40
        
    }
    return number + currentPosition
}

export class Game {
  constructor(socket1, socket2) {
    this.player1 = {
      socket: socket1,
      money: 1500,
      position: 0,
    };
    this.player2 = {
      socket: socket2,
      money: 1500,
      position: 0,
    };
    this.board = new Board();
    this.count = 0;
    this.player1.socket.send(
      JSON.stringify({
        type: INIT_GAME,
        payload: {
          name: "Player 1",
        },
      })
    );
    this.player2.socket.send(
      JSON.stringify({
        type: INIT_GAME,
        payload: {
          name: "Player 2",
        },
      })
    );
  }

  roll(socket) {
    if (socket !== this.player1.socket && socket !== this.player2.socket) {
      return;
    }

    try {
      const min = 1;
      const max = 6;
      const randomInt1 = getRandomInteger(min, max);
      const randomInt2 = getRandomInteger(min, max);

      if (socket === this.player1.socket) {
        if (this.count % 2 !== 0) {
          this.player1.socket.send(
            JSON.stringify({
              type: INVALID,
              payload: "not your turn",
            })
          );
          return
        }

        this.player1.position = changePosition(randomInt1 + randomInt2, this.player1.position);
        this.player2.socket.send(
          JSON.stringify({
            type: MOVE,
            payload: {
              name: "Player 1",
              position: this.player1.position,
              roll: [randomInt1, randomInt2],
            },
          })
        );
        this.player1.socket.send(
          JSON.stringify({
            type: MOVE,
            payload: {
              name: "Player 1",
              position: this.player1.position,
              roll: [randomInt1, randomInt2],
            },
          })
        );
        this.count += 1;
      }
      if (socket === this.player2.socket) {
        if (this.count % 2 === 0) {
          this.player2.socket.send(
            JSON.stringify({
              type: INVALID,
              payload: "not your turn",
            })
          );
          return;
        }
        this.player2.position = changePosition(randomInt1 + randomInt2, this.player2.position);
        this.player1.socket.send(
          JSON.stringify({
            type: MOVE,
            payload: {
              name: "Player 2",
              position: this.player2.position,
              roll: [randomInt1, randomInt2],
            },
          })
        );
        this.player2.socket.send(
          JSON.stringify({
            type: MOVE,
            payload: {
              name: "Player 2",
              position: this.player2.position,
              roll: [randomInt1, randomInt2],
            },
          })
        );
        this.count += 1;
      }

      return [randomInt1, randomInt2];
    } catch (error) {
      console.log(error);
    }
  }

  buy(socket, noOfHouses){
    if (socket !== this.player1.socket && socket !== this.player2.socket) {
      return;
    }
    try {
        
    } catch (error) {
        console.log(error);
    }
  }
}
