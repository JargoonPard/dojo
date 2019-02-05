import { expect } from "chai";
import {} from "mocha";
import { Minesweeper } from "../src/minesweeper";

/* tslint:disable:typedef no-unused-expression */

describe("Minesweeper", () => {
    it("can be initialized without an initializer", () => {
        const game = new Minesweeper();
        expect(game).to.not.be.null;
    });

    it ("has a grid property", () => {
        const game = new Minesweeper();
        expect(game.grid).is.not.null;
    });

    it ("the grid has 16 rows", () => {
        const game = new Minesweeper();
        game.init();
        expect(game.grid.length).is.equal(16);
    });

    it ("each row in the grid has 16 columns", () => {
        const game = new Minesweeper();
        game.init();
        var i:number = 0;
        expect(game.grid.length).to.equal(16);
        game.grid.forEach(function(row){
            i++;
            expect(row.length).is.equal(16);
        });
        expect(i).to.equal(16);
    });

    it ("the grid has 256 cells", () => {
        const game = new Minesweeper();
        game.init();
        var cellCount:number = 0;

        game.grid.forEach(function(row){
            row.forEach(function(cell){
                cellCount++;
            });
        });

        expect(cellCount).to.equal(256);
    });

    describe("getMineLocations", () => {
        it ("returns 40 numbers", () => {
            const game = new Minesweeper();
            let mineLocations:Array<number> = game.getMineLocations();
            expect(mineLocations.length).to.equal(40);
        });

        it ("returns numbers between 0 and 255, inclusive", () => {
            const game = new Minesweeper();
            let mineLocations:Array<number> = game.getMineLocations();
            for (let i:number = 0; i < 40; i++) {
                expect(mineLocations[i] >=0 && mineLocations[i] <256).is.true;
            }
        });

        it ("returns unique numbers", () => {
            const game = new Minesweeper();
            let mineLocations:Array<number> = game.getMineLocations();
            expect((new Set(mineLocations)).size === mineLocations.length).is.true;
        });
    });

    it ("the grid has 40 mines", () => {
        const game = new Minesweeper();
        game.init();
        game.placeMines(game.getMineLocations());
        var mineCount:number = 0;

        game.grid.forEach(function(row){
            row.forEach(function(cell){
                mineCount += cell;
            });
        });

        expect(mineCount).to.equal(40);
    });

    describe("getAdjacentMinesCounts", () => {
        const testgrid = [
            [1,0,0,0,0],
            [0,0,1,1,0],
            [0,0,0,0,0],
            [0,1,0,0,0],
            [0,0,0,0,0]
        ];
        const expectedCounts = [
            [-1,2,2,2,1],
            [1,2,-1,-1,1],
            [1,2,3,2,1],
            [1,-1,1,0,0],
            [1,1,1,0,0]
        ];

        it("all cells have expected adjacent mine counts", () => {
            const game = new Minesweeper();
            game.init();

         //   let cnt = game.getAdjacentMinesCount(0,4, testgrid);
           // expect(cnt).to.equal(0);

            for(let i:number = 0; i< testgrid.length; i++) {
                for(let j:number = 0; j< testgrid[i].length; j++) {
                    expect(game.getAdjacentMinesCount(i,j,testgrid), "i=" + i + ", j=" + j).to.equal(expectedCounts[i][j]);
                }
            }
        });

    });
});