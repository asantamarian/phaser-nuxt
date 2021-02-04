import { Scene } from 'phaser'
import background from '../assets/background.png'
import ball from '../assets/ball.png'
import bounceMp3 from '../assets/bounce.mp3'
import bounceOgg from '../assets/bounce.ogg'

export default class BounceScene extends Scene {
  constructor() {
    super({ key: 'BounceScene' })
  }

  preload() {
    this.load.image('background', background)
    this.load.image('ball', ball)
    this.load.audio('bounce', [bounceMp3, bounceOgg])
  }

  create() {
    this.add.image(400, 300, 'background')

    const ball = this.physics.add.image(400, 200, 'ball')
    ball.setCollideWorldBounds(true)
    ball.body.onWorldBounds = true
    ball.setBounce(1)
    ball.setVelocity(300, 50)

    this.sound.add('bounce')
    this.physics.world.on('worldbounds', () => {
      this.registry.events.emit('bounce')
      this.sound.play('bounce', { volume: 0.6 })
    })
  }
}
