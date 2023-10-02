<template>
	<div class="icon-button">
		<slot> </slot>
	</div>
</template>

<style lang="scss">
.icon-button {
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	& path {
		stroke: $colorButton;
		transition: stroke 0.2s ease;
	}

	&:hover {
		& path {
			stroke: $colorButtonHover;
		}
	}
}
</style>
