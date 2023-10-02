<script setup lang="ts">
import AppIconButton from '@/components/AppIconButton.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPause from '@/components/icons/IconPause.vue'
import IconSpeedMin from '@/components/icons/IconSpeedMin.vue'
import IconSpeedLow from '@/components/icons/IconSpeedLow.vue'
import IconSpeedMedLow from '@/components/icons/IconSpeedMedLow.vue'
import IconSpeedMed from '@/components/icons/IconSpeedMed.vue'
import IconSpeedMedHigh from '@/components/icons/IconSpeedMedHigh.vue'
import IconSpeedHigh from '@/components/icons/IconSpeedHigh.vue'
import IconSpeedMax from '@/components/icons/IconSpeedMax.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconSun from './icons/IconSun.vue'
import IconCode from './icons/IconCode.vue'
import IconFloppy from './icons/IconFloppy.vue'
import IconMoon from './icons/IconMoon.vue'
</script>

<template>
	<header class="header">
		<div class="header__controls">
			<AppIconButton> <IconPlay /></AppIconButton>
			<AppIconButton> <IconPause /></AppIconButton>
			<AppIconButton> <IconSpeedMed /></AppIconButton>
			<AppIconButton> <IconEdit /></AppIconButton>
		</div>
		<h1 class="header__heading">Conway's Game Of Life</h1>
		<div class="header__controls">
			<AppIconButton>
				<IconSun v-if="true" />
				<IconMoon v-else />
			</AppIconButton>
			<AppIconButton> <IconCode /> </AppIconButton>
			<AppIconButton> <IconFloppy /> </AppIconButton>
		</div>
	</header>
</template>

<style lang="scss">
.header {
	padding: 1.25rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	&__heading {
		font-weight: 500;
		font-size: 1.5rem;
	}

	&__controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
	}
}
</style>
