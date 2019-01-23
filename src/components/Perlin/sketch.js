export default p => {
  const w = 332
  const h = 332
  let t = 10
  let n = 50
  let particles = []

  p.setup = function () {
    p.createCanvas(w, h)
    p.background('#000')
    p.stroke(0, 10)

    for (var i = 0; i < n; i++) {
      particles.push({
        pos: p.createVector(p.random(w), p.random(h)),
        vel: p.createVector(p.random(w), p.random(h)),
        seed: i
      })
    }
  }

  p.draw = () => {
    particles.forEach(prtcl => {
      display(p, prtcl.pos, prtcl.vel)
      update(p, t, prtcl.pos, prtcl.vel, prtcl.seed)
    })
    t += 0.002
  }
}

const display = (p, pos, vel) => {
  p.stroke(255, 255, 255, 10)
  p.line(pos.x, pos.y, (pos.x + vel.x), (pos.y + vel.y))
}

const update = (p, t, pos, vel, seed) => {
  const w = 332
  const h = 332

  pos.x = mod((pos.x + vel.x), w)
  pos.y = mod((pos.y + vel.y), h)

  var r = window.p5.Vector.fromAngle(p.noise(seed, t) * p.TWO_PI)
  vel.x = r.x
  vel.y = r.y

  vel.add(flow(p, pos)).mult(3)
}

const flow = (p, pos) => {
  let r = p.noise(pos.x / 100, pos.y / 100) * p.TWO_PI
  return window.p5.Vector.fromAngle(r).mult(2)
}

const mod = (x, n) => {
  return ((x % n) + n) % n
}
