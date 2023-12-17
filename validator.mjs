export class Validator {
	constructor(moves) {
		this.moves = moves
	}
	validateMoves() {
		const minMoves = 3
		const isOdd = this.moves.length % 2 === 1
		const uniqueMoves = new Set(this.moves)

		if (this.moves.length < minMoves) {
			return `The number of moves must be greater than or equal to ${minMoves}`
		}

		if (!isOdd) {
			return 'The number of moves must be odd'
		}

		if (uniqueMoves.size !== this.moves.length) {
			return 'All moves must be unique'
		}

		return true
	}

	validatePlayerMove(playerMove) {
		if (
			!isNaN(playerMove) &&
			Number(playerMove) > 0 &&
			Number(playerMove) <= this.moves.length
		) {
			return true
		}
		return false
	}
}
