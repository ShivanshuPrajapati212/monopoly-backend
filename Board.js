import { BUY, INVALID } from "./messages.js";

export class Board {
  constructor() {
    this.board = [
      {
        name: "GO",
      },
      {
        name: "Mediterranean Avenue",
        ownership: [null, 0],
        rents: [2, 10, 30, 90, 160, 250],
        cost: [60, 50],
        color: "Brown",
      },
      {
        name: "Community Chest",
      },
      {
        name: "Baltic Avenue",
        ownership: [null, 0],
        rents: [4, 20, 60, 180, 320, 450],
        cost: [60, 50],
        color: "Brown",
      },
      {
        name: "Income Tax",
      },
      {
        name: "Reading Railroad",
        ownership: [null],
        rents: [25, 50, 100, 200],
        cost: [200],
      },
      {
        name: "Oriental Avenue",
        ownership: [null, 0],
        rents: [6, 30, 90, 270, 400, 550],
        cost: [100, 50],
        color: "Light Blue",
      },
      {
        name: "Chance",
      },
      {
        name: "Vermont Avenue",
        ownership: [null, 0],
        rents: [6, 30, 90, 270, 400, 550],
        cost: [100, 50],
        color: "Light Blue",
      },
      {
        name: "Connecticut Avenue",
        ownership: [null, 0],
        rents: [8, 40, 100, 300, 450, 600],
        cost: [120, 50],
        color: "Light Blue",
      },
      {
        name: "Jail / Just Visiting",
      },
      {
        name: "St. Charles Place",
        ownership: [null, 0],
        rents: [10, 50, 150, 450, 625, 750],
        cost: [140, 100],
        color: "Pink",
      },
      {
        name: "Electric Company",
        ownership: [null],
        rents: [4, 10], // multiplier × dice roll
        cost: [150],
      },
      {
        name: "States Avenue",
        ownership: [null, 0],
        rents: [10, 50, 150, 450, 625, 750],
        cost: [140, 100],
        color: "Pink",
      },
      {
        name: "Virginia Avenue",
        ownership: [null, 0],
        rents: [12, 60, 180, 500, 700, 900],
        cost: [160, 100],
        color: "Pink",
      },
      {
        name: "Pennsylvania Railroad",
        ownership: [null],
        rents: [25, 50, 100, 200],
        cost: [200],
      },
      {
        name: "St. James Place",
        ownership: [null, 0],
        rents: [14, 70, 200, 550, 750, 950],
        cost: [180, 100],
        color: "Orange",
      },
      {
        name: "Community Chest",
      },
      {
        name: "Tennessee Avenue",
        ownership: [null, 0],
        rents: [14, 70, 200, 550, 750, 950],
        cost: [180, 100],
        color: "Orange",
      },
      {
        name: "New York Avenue",
        ownership: [null, 0],
        rents: [16, 80, 220, 600, 800, 1000],
        cost: [200, 100],
        color: "Orange",
      },
      {
        name: "Free Parking",
      },
      {
        name: "Kentucky Avenue",
        ownership: [null, 0],
        rents: [18, 90, 250, 700, 875, 1050],
        cost: [220, 150],
        color: "Red",
      },
      {
        name: "Chance",
      },
      {
        name: "Indiana Avenue",
        ownership: [null, 0],
        rents: [18, 90, 250, 700, 875, 1050],
        cost: [220, 150],
        color: "Red",
      },
      {
        name: "Illinois Avenue",
        ownership: [null, 0],
        rents: [20, 100, 300, 750, 925, 1100],
        cost: [240, 150],
        color: "Red",
      },
      {
        name: "B&O Railroad",
        ownership: [null],
        rents: [25, 50, 100, 200],
        cost: [200],
      },
      {
        name: "Atlantic Avenue",
        ownership: [null, 0],
        rents: [22, 110, 330, 800, 975, 1150],
        cost: [260, 150],
        color: "Yellow",
      },
      {
        name: "Ventnor Avenue",
        ownership: [null, 0],
        rents: [22, 110, 330, 800, 975, 1150],
        cost: [260, 150],
        color: "Yellow",
      },
      {
        name: "Water Works",
        ownership: [null],
        rents: [4, 10], // multiplier × dice roll
        cost: [150],
      },
      {
        name: "Marvin Gardens",
        ownership: [null, 0],
        rents: [24, 120, 360, 850, 1025, 1200],
        cost: [280, 150],
        color: "Yellow",
      },
      {
        name: "Go to Jail",
      },
      {
        name: "Pacific Avenue",
        ownership: [null, 0],
        rents: [26, 130, 390, 900, 1100, 1275],
        cost: [300, 200],
        color: "Green",
      },
      {
        name: "North Carolina Avenue",
        ownership: [null, 0],
        rents: [26, 130, 390, 900, 1100, 1275],
        cost: [300, 200],
        color: "Green",
      },
      {
        name: "Community Chest",
      },
      {
        name: "Pennsylvania Avenue",
        ownership: [null, 0],
        rents: [28, 150, 450, 1000, 1200, 1400],
        cost: [320, 200],
        color: "Green",
      },
      {
        name: "Short Line Railroad",
        ownership: [null],
        rents: [25, 50, 100, 200],
        cost: [200],
      },
      {
        name: "Chance",
      },
      {
        name: "Park Place",
        ownership: [null, 0],
        rents: [35, 175, 500, 1100, 1300, 1500],
        cost: [350, 200],
        color: "Dark Blue",
      },
      {
        name: "Luxury Tax",
      },
      {
        name: "Boardwalk",
        ownership: [null, 0],
        rents: [50, 200, 600, 1400, 1700, 2000],
        cost: [400, 200],
        color: "Dark Blue",
      },
    ];
  }

  // return the board array
  getBoard() {
    return this.board;
  }

  nonBuyable(){
    return [0, 2, 4, 7, 10, 17, 20, 22, 30, 33, 36, 38];
  }

  buyProperty(player, idx, noOfHouses) {
    if (this.board[idx].ownership[0] !== null) {
      return {
        type: INVALID,
        payload: {
          error: "Already Bought"
        }
        }
    }

    if (
      this.board[idx].cost[0] + this.board[idx].cost[1] * noOfHouses >
      player.money
    ) {
      return {
        type: INVALID,
        payload: {
          error: "Insufficient Money"
        }
        }
    }

    this.board[idx].ownership = [player.socket, noOfHouses];

    return {
      type: BUY,
      payload: {
        changeInBoard: this.board[idx],
        cost: this.board[idx].cost[0] + this.board[idx].cost[1] * noOfHouses,
      }
    };
  }

  checkRent(player, idx) {
    if (this.board[idx].ownership[0] === player.socket) {
      return "NO RENT";
    }
    if (this.board[idx].ownership[0] === null) {
      return "NO RENT";
    }

    const owner = this.board[idx].ownership[0];
    const noOfHouses = this.board[idx].ownership[1];

    return {
      ownerSocket: owner,
      rent: this.board[idx].rents[noOfHouses],
    };
  }

  sellProperty(player, idx, noOfHouses) {
    if (this.board[idx].ownership[0] !== player.socket) {
      return "BAD: Not your property";
    }
    if (noOfHouses > this.board[idx].ownership[1]) {
      return "BAD: Not many Houses";
    }
    if (noOfHouses < 0) {
      return "BAD: Not many Houses";
    }

    if (noOfHouses === 0) {
      this.board[idx].ownership[0] = null;
      this.board[idx].ownership[1] = 0;

      return {
        amount: this.board[idx].cost[0] / 2,
      };
    }
    this.board[idx].ownership[1] = this.board[idx].ownership[1] - noOfHouses;

    return {
      amount: (this.board[idx].cost[1] / 2) * noOfHouses,
    };
  }
}

// const board = new Board();

// console.log(
//   board.buyProperty({ socket: "himanshu", money: 1500, position: 0 }, 39, 2)
// );
// console.log(
//   board.checkRent({ socket: "shivanshu", money: 1500, position: 0 }, 39)
// );
// console.log(
//   board.sellProperty({ socket: "himanshu", money: 1500, position: 0 }, 39, 0)
// );

// console.log(board.getBoard()[39]);
