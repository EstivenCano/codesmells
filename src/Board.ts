import { Tile } from '../src/models/Tile'
import { Symbol } from './models/Symbol';

export class Board {

    // Store plays from players
    private _plays: Tile[] = [];

    // Initialize the board with all cells with an empty symbol
    constructor() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this._plays.push({ X: i, Y: j, Symbol: " " } as Tile);
            }
        }
    }

    /**
     * Find the position of a tile in the board
     * @param x 
     * @param y 
     * @returns Tile
     */
    public TileAt(x: number, y: number): Tile {
        return this._plays.find((t: Tile) => t.X == x && t.Y == y)!
    }

    /**
     * Add a tile in an specific position depending of the coordinates given
     * @param symbol 
     * @param x 
     * @param y 
     */
    public AddTileAt(symbol: Symbol, x: number, y: number): void {
        this.TileAt(x, y).Symbol = symbol;
    }
}