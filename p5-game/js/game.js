class Game {
	constructor() {
		this.backgroundImages
		this.score = 0
		//
	}

	setup() {
		this.player = new Player()
		this.background = new Background()
		this.obstacles = []
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
			{ src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
			{ src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
			{ src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 },
			{ src: loadImage('assets/background/plx-5.png'), x: 0, speed: 4 },
		]
		this.playerImage = loadImage('assets/player/bb8.gif')
		this.coinImage = loadImage('assets/coins/tile000.png')
	}

	draw() {
		clear()
		this.background.draw()
		this.player.draw()
		// we want to do sth every x frames -> frameCount (set by P5)

		if (frameCount % 60 === 0) {
			// console.log(frameCount)
			// we add coins to the obstacles array
			this.obstacles.push(new Obstacle(this.coinImage))
			console.log(this.obstacles)
		}

		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

		this.obstacles = this.obstacles.filter(obstacle => {
			// console.log(this)
			// also id the coin leaves the screen we remove it from the array
			if (obstacle.collision(this.player) || obstacle.x < 0) {
				return false
			} else {
				return true
			}
		})

	}
}
