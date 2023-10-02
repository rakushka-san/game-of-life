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
import AppModal from './AppModal.vue'
import IconDraw from './icons/IconDraw.vue'
import IconErase from './icons/IconErase.vue'
import IconLoad from './icons/IconLoad.vue'
import IconSave from './icons/IconSave.vue'
import { Transition, TransitionGroup, ref } from 'vue'
import { useThemeStore } from '@/stores/ThemeStore'
import { Theme } from '@/enums/Theme'

const themeStore = useThemeStore()

const isSpeedListOpen = ref(false)
const isEditListOpen = ref(false)
const isStorageListOpen = ref(false)
</script>

<template>
	<header class="header">
		<div class="header__controls">
			<AppIconButton title="Play"> <IconPlay /></AppIconButton>
			<AppIconButton title="Pause"> <IconPause /></AppIconButton>
			<div class="header__control_has-list">
				<AppIconButton
					title="Change Speed"
					@click="isSpeedListOpen = !isSpeedListOpen"
				>
					<IconSpeedMed
				/></AppIconButton>
				<Transition name="fade">
					<AppModal v-if="isSpeedListOpen" class="header__control-list">
						<AppIconButton title="Min Speed"><IconSpeedMin /></AppIconButton>
						<AppIconButton title="Low Speed"><IconSpeedLow /></AppIconButton>
						<AppIconButton title="Med Low Speed"
							><IconSpeedMedLow
						/></AppIconButton>
						<AppIconButton title="Med Speed"><IconSpeedMed /></AppIconButton>
						<AppIconButton title="Med High Speed"
							><IconSpeedMedHigh
						/></AppIconButton>
						<AppIconButton title="High Speed"><IconSpeedHigh /></AppIconButton>
						<AppIconButton title="Max Speed"><IconSpeedMax /></AppIconButton>
					</AppModal>
				</Transition>
			</div>

			<div class="header__control_has-list">
				<AppIconButton title="Edit" @click="isEditListOpen = !isEditListOpen">
					<IconEdit
				/></AppIconButton>
				<Transition name="fade">
					<AppModal v-if="isEditListOpen" class="header__control-list">
						<AppIconButton title="Draw"><IconDraw /></AppIconButton>
						<AppIconButton title="Erase"><IconErase /></AppIconButton>
					</AppModal>
				</Transition>
			</div>
		</div>
		<h1 class="header__heading">Conway's Game Of Life</h1>
		<div class="header__controls">
			<AppIconButton title="Change Theme" @click="themeStore.toggleTheme">
				<IconSun v-if="themeStore.theme === Theme.dark" />
				<IconMoon v-else-if="themeStore.theme === Theme.light" />
			</AppIconButton>
			<a href="https://github.com/rakushka-san/game-of-life" target="_blank">
				<AppIconButton title="View Code"> <IconCode /> </AppIconButton>
			</a>

			<div class="header__control_has-list">
				<AppIconButton
					title="Save&Load"
					@click="isStorageListOpen = !isStorageListOpen"
				>
					<IconFloppy />
				</AppIconButton>
				<Transition name="fade">
					<AppModal v-if="isStorageListOpen" class="header__control-list">
						<AppIconButton title="Load"><IconLoad /></AppIconButton>
						<AppIconButton title="Save"><IconSave /></AppIconButton>
					</AppModal>
				</Transition>
			</div>
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

	&__control {
		&_has-list {
			position: relative;
		}
	}

	&__control-list {
		top: 160%;
		left: 50%;
		transform: translateX(-50%);

		padding: 0.5rem;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
}
</style>
