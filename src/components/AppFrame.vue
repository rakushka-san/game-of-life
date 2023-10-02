<template>
	<div class="frame">
		<slot> </slot>
	</div>
</template>

<style lang="scss">
.frame {
	border-radius: 0.75rem;
	border: 1px solid $colorPrimaryBorder;
	background-color: $colorSecondaryBackground;
}
</style>
