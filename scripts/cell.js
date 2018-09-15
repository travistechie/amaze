// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Videos
// https://youtu.be/HyK_Q5rrcr4
// https://youtu.be/D8UgRyRnvXU
// https://youtu.be/8Ju_uxJ9v44
// https://youtu.be/_p5IH0L63wo

// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

function Cell(i, j) {
  this.i = i
  this.j = j
  this.walls = [true, true, true, true] // top , right , bottom , left
  this.visited = false
  this.morse = -1
  this.solved = false

  this.checkNeighbors = function() {
    var neighbors = []

    var top = grid[index(i, j - 1)]
    var right = grid[index(i + 1, j)]
    var bottom = grid[index(i, j + 1)]
    var left = grid[index(i - 1, j)]

    if (top && !top.visited) {
      neighbors.push(top)
    }
    if (right && !right.visited) {
      neighbors.push(right)
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom)
    }
    if (left && !left.visited) {
      neighbors.push(left)
    }

    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length))
      return neighbors[r]
    } else {
      return undefined
    }
  }
  this.highlight = function() {
    var x = this.i * w
    var y = this.j * w
    noStroke()
    fill(0, 0, 255, 100)
    rect(x, y, w, w)
  }

  this.show = function() {
    const x = this.i * w
    const y = this.j * w
    const padding = 4
    stroke(0)
    if (this.walls[0]) {
      line(x, y, x + w, y)
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w)
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w)
    }
    if (this.walls[3]) {
      line(x, y + w, x, y)
    }

    if (this.morse != -1) {
      noStroke()
      fill(250, 150, 243, 200)
      rect(
        x + padding,
        y + padding,
        w - padding * 2,
        w - padding * 2,
        padding * 5
      )
      textFont('Georgia')
      fill(0, 0, 0)
      textSize(14)
      text(this.morse, x + w / 2 - padding, y + w / 2 + padding)
    } else if (this.visited) {
      noStroke()
      fill(250, 150, 243, 50)
      rect(
        x + padding,
        y + padding,
        w - padding * 2,
        w - padding * 2,
        padding * 5
      )
    }
  }
}
