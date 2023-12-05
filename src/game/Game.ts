import { Cell } from '@/game/Cell'

export class Game {
	currentGeneration: Cell[] = []
	nextGeneration: Cell[] = []

	addCell(x: number, y: number) {
		const newCell = new Cell(x, y, true)

		const index = this.currentGeneration.findIndex(
			cell => cell.x === newCell.x && cell.y === newCell.y
		)

		if (index === -1) this.currentGeneration.push(newCell)
		else if (index !== -1 && !this.currentGeneration[index].isAlive)
			this.currentGeneration[index].isAlive = true
		else return

		this.addPossibles(x, y)
	}

	addPossibles(x: number, y: number) {
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if (i === 0 && j === 0) continue

				const newCell = new Cell(x + i, y + j, false)

				const index = this.currentGeneration.findIndex(
					cell => cell.x === newCell.x && cell.y === newCell.y
				)

				if (index === -1) this.currentGeneration.push(newCell)
			}
		}
	}

	addCellNext(x: number, y: number) {
		const newCell = new Cell(x, y, true)

		const index = this.nextGeneration.findIndex(
			cell => cell.x === newCell.x && cell.y === newCell.y
		)

		if (index === -1) this.nextGeneration.push(newCell)
		else if (index !== -1 && !this.nextGeneration[index].isAlive)
			this.nextGeneration[index].isAlive = true
		else return

		this.addPossiblesNext(x, y)
	}

	addPossiblesNext(x: number, y: number) {
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if (i === 0 && j === 0) continue

				const newCell = new Cell(x + i, y + j, false)

				const index = this.nextGeneration.findIndex(
					cell => cell.x === newCell.x && cell.y === newCell.y
				)

				if (index === -1) this.nextGeneration.push(newCell)
			}
		}
	}

	countNeighbours(x: number, y: number) {
		let count = 0

		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if (i === 0 && j === 0) continue

				const neighbourCell = this.currentGeneration.find(
					cell => cell.x === x + i && cell.y === y + j
				)

				if (neighbourCell?.isAlive) count++
			}
		}

		return count
	}

	step() {
		this.currentGeneration.forEach(cell => {
			if (!cell.isAlive && this.countNeighbours(cell.x, cell.y) === 3)
				this.addCellNext(cell.x, cell.y)

			if (
				cell.isAlive &&
				(this.countNeighbours(cell.x, cell.y) === 2 ||
					this.countNeighbours(cell.x, cell.y) === 3)
			)
				this.addCellNext(cell.x, cell.y)
		})

		this.currentGeneration = this.nextGeneration
		this.nextGeneration = []
	}

	peek() {
		return this.currentGeneration.filter(cell => cell.isAlive)
	}
}
