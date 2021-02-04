import Phaser from 'phaser'
import BounceScene from './scenes/BounceScene'
import event from './events'

function launch({
  width = 800,
  height = 600,
  parent = 'phaser-container',
  store
}) {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    width,
    height,
    parent,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 400 }
      }
    },
    scene: [BounceScene]
  })

  // replace the EventEmitter on the DataManager with our own imported EventEmitter
  game.registry.events = event

  // append the Vuex store to EventEmitter
  game.registry.events.store = store

  // if there is no pre-existing game state, initialize it
  if (!store.getters.phaser.exampleGame.bounces) {
    event.store.commit('savePhaser', {
      gameName: 'exampleGame',
      prop: 'bounces',
      value: 0
    })
  }

  return game
}

export default launch
export { launch }
