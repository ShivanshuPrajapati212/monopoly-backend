import { Game } from "./Game.js";
import { BUY, INIT_GAME, ROLL } from "./messages.js";


export class GameManager{
    constructor() {
        this.games = [];
        this.pendingUser = null;
        this.users = [];
    }

    addUser(socket) {
        this.users.push(socket);
        this.addHandler(socket)
    }

    removeUser(socket) {
        this.users = this.users.filter(user => user !== socket);
        // Stop the game here because the user left
    }

    addHandler(socket){
       socket.on("message", (data) => {
            try {
                const message = JSON.parse(data.toString());
    
                if (message.type === INIT_GAME) {
                    if (this.pendingUser) {
                        const game = new Game(this.pendingUser, socket);
                        this.games.push(game);
                        this.pendingUser = null;
                    } else {
                        this.pendingUser = socket;
                    }
                }
    
                if (message.type === ROLL) {
                    console.log("inside roll")
                    const game = this.games.find(game => game.player1.socket === socket || game.player2.socket === socket);
                    if (game) {
                        console.log("inside roll game")
                        game.roll(socket);
                    }
                }
                if (message.type === BUY) {
                    if(!message.noOfHouses) return;
                    console.log("inside buy")
                    const game = this.games.find(game => game.player1.socket === socket || game.player2.socket === socket);
                    if (game) {
                        console.log("inside buy game")
                        game.buy(socket, message.noOfHouses);
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }) 
    }
}