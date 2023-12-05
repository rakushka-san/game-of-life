export class Cell {
	private _x: number = 0
	private _y: number = 0
	private _isAlive: boolean = false

	constructor(x?: number, y?: number, isAlive?: boolean) {
		if (x !== undefined) this._x = x
		if (y !== undefined) this._y = y
		if (isAlive !== undefined) this._isAlive = isAlive
	}

	get x() {
		return this._x
	}

	get y() {
		return this._y
	}

	get isAlive() {
		return this._isAlive
	}

	set isAlive(value: boolean) {
		this._isAlive = value
	}
}
