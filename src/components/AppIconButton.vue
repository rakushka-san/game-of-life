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

	& svg {
		width: 1.25rem;
		height: 1.25rem;

		@include bp(sm) {
			width: 1rem;
			height: 1rem;
		}
	}

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
