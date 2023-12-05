<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useThemeStore } from '@/stores/ThemeStore'
import { Theme } from '@/enums/Theme'
import { useGameStore } from '@/stores/GameStore'

const RADIUS = 8

const themeStore = useThemeStore()
const gameStore = useGameStore()

const canvasContainer = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
	if (!(canvas.value && canvasContainer.value)) return

	canvas.value.width = canvasContainer.value.clientWidth
	canvas.value.height = canvasContainer.value.clientHeight

	const ctx = canvas.value?.getContext('2d')

	if (!ctx) return

	if (themeStore.theme === Theme.dark) {
		ctx.fillStyle = '#7faa65'
	} else if (themeStore.theme === Theme.light) {
		ctx.fillStyle = '#3e6f21'
	}

	gameStore.game.addCell(1, 0)
	gameStore.game.addCell(2, 1)
	gameStore.game.addCell(0, 2)
	gameStore.game.addCell(1, 2)
	gameStore.game.addCell(2, 2)

	const drawCells = () => {
		const cells = gameStore.game.peek()

		if (canvas.value)
			ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

		cells.forEach(cell => {
			ctx.beginPath()
			ctx.arc(2 * RADIUS * cell.x, 2 * RADIUS * cell.y, RADIUS, 0, Math.PI * 2)
			ctx.fill()
		})
	}

	drawCells()

	gameStore.setGameInterval(() => {
		gameStore.game.step()
		drawCells()
	})
})
</script>

<template>
	<div ref="canvasContainer" class="canvas">
		<canvas
			width="100%"
			height="100%"
			ref="canvas"
			class="canvas__canvas"
		></canvas>
	</div>
</template>

<style lang="scss">
.canvas {
	height: 100%;

	&__canvas {
		display: block;
		// background-color: $colorButton;
		width: 100%;
		height: 100%;
	}
}
</style>
