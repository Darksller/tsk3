import AsciiTable from 'ascii-table'
import { GameRules } from './gameRules.mjs'

export class HelpTable {
	static getHelpTable(moves) {
		const gameRules = new GameRules(moves)
		const table = new AsciiTable()
		table.setHeading('↓ User/PC →', ...moves)
		moves.forEach(playerMove => {
			let row = [playerMove]
			moves.forEach(computerMove => {
				row.push(
					gameRules.checkWinner(
						moves.indexOf(playerMove),
						moves.indexOf(computerMove)
					)
				)
			})

			table.addRow(...row)
		})
		return table.toString()
	}
}
