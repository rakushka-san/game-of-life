<script setup lang="ts">
import AppFrame from '@/components/AppFrame.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppCanvasVue from '@/components/AppCanvas.vue'
</script>

<template>
	<div class="layout">
		<AppFrame>
			<AppHeader />
		</AppFrame>
		<main class="layout__main">
			<AppFrame class="canvas-container">
				<AppCanvasVue />
			</AppFrame>
		</main>
	</div>
</template>

<style lang="scss">
.layout {
	padding: 2rem;
	height: 100vh;

	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@include bp(sm) {
		padding: 1rem;
		gap: 1rem;
	}

	@include bp(xs) {
		padding: 0.5rem;
		gap: 0.5rem;
	}

	&__main {
		flex-grow: 1;
	}
}

.canvas-container {
	height: 100%;
	overflow: hidden;
}
</style>
