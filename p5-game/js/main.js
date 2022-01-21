const game = new Game();

function preload() {
	game.preload()
}

function setup() {
	createCanvas(600, 600)
	game.setup()
}

function draw() {
	game.draw()
}

function keyPressed() {
	// if we press space the player jumps
	if (keyCode === 32) {
		game.player.jump()
	}
}