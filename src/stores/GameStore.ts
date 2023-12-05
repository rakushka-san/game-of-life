import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Speed } from '@/enums/Speed'
import { Game } from '@/game/Game'

export const useGameStore = defineStore('gameStore', () => {
	const game = ref(new Game())
	const speed = ref(Speed.med)
	const gameInterval = ref<number | null>(null)
	const gameIntervalCallback = ref<Function | null>(null)

	const changeSpeed = (newSpeed: Speed) => {
		speed.value = newSpeed

		clearGameInterval()
		if (gameIntervalCallback.value) setGameInterval(gameIntervalCallback.value)
	}

	const pause = () => {
		clearGameInterval()
	}

	const play = () => {
		if (gameIntervalCallback.value) setGameInterval(gameIntervalCallback.value)
	}

	const setGameInterval = (callback: Function) => {
		gameIntervalCallback.value = callback
		gameInterval.value = setInterval(callback, speed.value)
	}

	const clearGameInterval = () => {
		if (gameInterval.value) clearInterval(gameInterval.value)
	}

	return { game, speed, changeSpeed, pause, play, setGameInterval }
})
