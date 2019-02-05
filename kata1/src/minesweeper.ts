const GRID_SIZE : number = 16;
export class Minesweeper {
    grid: number[][]= new Array<Array<number>>(GRID_SIZE);

    init = () => {
        for (let i:number = 0; i < GRID_SIZE; i++) {
            this.grid[i] = new Array<number>(GRID_SIZE);
            for(let j:number = 0; j < GRID_SIZE; j++) {
                this.grid[i][j] = 0;
            }
        }
    }

    getMineLocations = ():Array<number> => {
        let mineCount:number = 0;
        let arrMineLocs:Array<number> = new Array<number>(40);
        while (mineCount < 40) {
            let rand:number = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
            if (arrMineLocs.indexOf(rand) === -1) {
                arrMineLocs[mineCount] = rand;
                mineCount++;

            }
        }
        return arrMineLocs;
    }

    placeMines = (mineLocations: Array<number>)=> {
        for(let i:number = 0; i < mineLocations.length; i++) {
            const row: number = Math.floor(mineLocations[i] / GRID_SIZE);
            const col: number = mineLocations[i] % GRID_SIZE;
            this.grid[row][col] = 1;
        }
    }

    getAdjacentMinesCount = (row:number, column:number, grid:Array<Array<number>>):number => {
        if (grid[row][column] === 1) {
            return -1;
        }
        let count:number = 0;
        if(row > 0) {
            count += column > 0 ? grid[row - 1][column - 1] : 0;
            count += grid[row - 1][column];
            count += column < grid[row].length-1 ? grid[row - 1][column + 1] : 0;
        }

        count += column > 0 ? grid[row][column - 1] : 0;
        count += column < grid[row].length-1 ? grid[row][column + 1] : 0;

        if(row < grid.length - 1) {
            count += column > 0 ? grid[row + 1][column - 1] : 0;
            count += grid[row + 1][column];
            count += column < grid[row].length-1 ? grid[row + 1][column + 1] : 0;
        }

        return count;
    }
}