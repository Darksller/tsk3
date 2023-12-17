import crypto from 'crypto'

export class hmac {
	static generateKey() {
		return crypto.randomBytes(64).toString('hex')
	}
	static async sign(message) {
		this.key = this.generateKey()
		return crypto.createHmac('sha256', this.key).update(message).digest('hex')
	}
	static getKey() {
		return this.key
	}
}
