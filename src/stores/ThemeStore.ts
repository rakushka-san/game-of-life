import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { Theme } from '@/enums/Theme'

export const useThemeStore = defineStore('themeStore', () => {
	const theme = ref(Theme.dark)

	const themeInLocalStorage = localStorage.getItem('theme')
	if (themeInLocalStorage) {
		theme.value = JSON.parse(themeInLocalStorage)._value
		document.body.setAttribute('data-theme', theme.value)
	}

	watch(
		() => theme,
		state => {
			localStorage.setItem('theme', JSON.stringify(state))
		},
		{ deep: true }
	)

	const toggleTheme = () => {
		if (theme.value === Theme.dark) {
			theme.value = Theme.light
		} else if (theme.value === Theme.light) {
			theme.value = Theme.dark
		}
		document.body.setAttribute('data-theme', theme.value)
	}

	return { theme, toggleTheme }
})
