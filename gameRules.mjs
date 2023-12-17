export class GameRules {
	constructor(moves) {
		this.moves = moves
	}

	checkWinner(playerMove, computerMove) {
		switch (this.getResults(playerMove, computerMove)) {
			case -1:
				return 'Win'
			case 1:
				return 'Lose'
			default:
				return 'Draw'
		}
	}

	getResults(playerMove, computerMove) {
		let movesNumber = this.moves.length
		let p = movesNumber >> 1
		return Math.sign(
			((playerMove - computerMove + p + movesNumber) % movesNumber) - p
		)
	}
}
