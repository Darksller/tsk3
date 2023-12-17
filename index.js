import readline from 'readline-sync'
import { Validator } from './validator.mjs'
import { GameRules } from './gameRules.mjs'
import { HelpTable } from './helpTable.mjs'
import { hmac } from './hmac.mjs'

const moves = process.argv.slice(2)
const validator = new Validator(moves)
const validateResult = validator.validateMoves()
if (validateResult !== true) {
	console.log(validateResult)
	console.log('Example of a correct input:')
	console.log('node index rock blade sword')
	process.exit()
}

const computerMove = Math.floor(Math.random() * moves.length)
console.log('HMAC:\n' + (await hmac.sign(moves[computerMove])))

function printMenu(moves) {
	console.log('Available moves:')
	moves.map((move, index) => console.log(`${index + 1} - ${move}`))
	console.log('0 - exit')
	console.log('? - help')
}

printMenu(moves)

let playerMove
while (true) {
	playerMove = readline.question('Enter your move: ')
	if (validator.validatePlayerMove(playerMove)) {
		break
	}
	if (playerMove === '0') {
		process.exit()
	}
	if (playerMove === '?') {
		console.log(`The result is described from the user's point of view`)
		console.log(HelpTable.getHelpTable(moves))
	}
}

console.log('Your move: ' + moves[Number(playerMove) - 1])
console.log('Computer move: ' + moves[computerMove])

const gameRules = new GameRules(moves)
console.log(
	`Game result: ` + gameRules.checkWinner(Number(playerMove) - 1, computerMove)
)
console.log(`HMAC key:\n` + hmac.getKey())
