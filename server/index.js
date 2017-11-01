const mosca = require('mosca')

const settings = {
	port: 1883,
	retain: true,
	http: {
		port: 3001,
		bundle: true,
		static: './',
	},
}

const server = new mosca.Server(settings)

server.on('clientConnected', client => {
	console.log('client connected', client.id)
})

// fired when a message is received
server.on('published', (packet, client) => {
	console.log('Published', packet.payload)
})

server.on('ready', setup)

// fired when the mqtt server is ready
function setup() {
	console.log('Mosca server is up and running')
}
