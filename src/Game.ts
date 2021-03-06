import { Symbol } from "./models/Symbol";
import { Board } from "./Board";

export class Game {
    private _lastSymbol: string = ' ';
    private _board: Board = new Board();

    public Play(symbol: Symbol, x: number, y: number): void {
        //if first move
        if (this._lastSymbol == ' ') {
            //if player is X
            if (symbol == 'O') {
                throw new Error("Invalid first player");
            }
        }
        //if not first move but player repeated
        else if (symbol == this._lastSymbol) {
            throw new Error("Invalid next player");
        }
        //if not first move but play on an already played tile
        else if (this._board.TileAt(x, y).Symbol != ' ') {
            throw new Error("Invalid position");
        }

        // update game state
        this._lastSymbol = symbol;
        this._board.AddTileAt(symbol, x, y);
    }

    public Winner(): string {
        //if the positions in first row are taken
        if (this._board.TileAt(0, 0)!.Symbol != ' ' &&
            this._board.TileAt(0, 1)!.Symbol != ' ' &&
            this._board.TileAt(0, 2)!.Symbol != ' ') {
            //if first row is full with same symbol
            if (this._board.TileAt(0, 0)!.Symbol ==
                this._board.TileAt(0, 1)!.Symbol &&
                this._board.TileAt(0, 2)!.Symbol == this._board.TileAt(0, 1)!.Symbol) {
                return this._board.TileAt(0, 0)!.Symbol;
            }
        }

        //if the positions in first row are taken
        if (this._board.TileAt(1, 0)!.Symbol != ' ' &&
            this._board.TileAt(1, 1)!.Symbol != ' ' &&
            this._board.TileAt(1, 2)!.Symbol != ' ') {
            //if middle row is full with same symbol
            if (this._board.TileAt(1, 0)!.Symbol ==
                this._board.TileAt(1, 1)!.Symbol &&
                this._board.TileAt(1, 2)!.Symbol ==
                this._board.TileAt(1, 1)!.Symbol) {
                return this._board.TileAt(1, 0)!.Symbol;
            }
        }

        //if the positions in first row are taken
        if (this._board.TileAt(2, 0)!.Symbol != ' ' &&
            this._board.TileAt(2, 1)!.Symbol != ' ' &&
            this._board.TileAt(2, 2)!.Symbol != ' ') {
            //if middle row is full with same symbol
            if (this._board.TileAt(2, 0)!.Symbol ==
                this._board.TileAt(2, 1)!.Symbol &&
                this._board.TileAt(2, 2)!.Symbol ==
                this._board.TileAt(2, 1)!.Symbol) {
                return this._board.TileAt(2, 0)!.Symbol;
            }
        }
        return ' ';
    }
}