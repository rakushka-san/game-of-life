<script setup lang="ts">
import AppFrame from './AppFrame.vue'
</script>

<template>
	<AppFrame class="modal">
		<slot> </slot>
	</AppFrame>
</template>

<style lang="scss">
.modal {
	position: absolute;
}
</style>
