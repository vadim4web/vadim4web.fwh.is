<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed, onMounted } from 'vue'
import { usePreferredLanguages } from '@vueuse/core'

const { setLocale, locale } = useI18n()
const showOptions = ref(false)
const selectedLanguage = ref(locale.value)

// Отримуємо мови, які віддаються перевазі користувачем через usePreferredLanguages
const preferredLanguages = usePreferredLanguages()

// Визначаємо мови для вибору
const availableLanguages = ref([
  { code: 'en', flag: '/flags/en.webp', name: 'English' },
  { code: 'uk', flag: '/flags/uk.webp', name: 'Українська' }
])

// Сортуємо мови так, щоб вибрана була на першому місці
const sortedLanguages = computed(() => {
  return [...availableLanguages.value].sort(l =>
    l.code === selectedLanguage.value ? -1 : 1
  )
})

const changeLanguage = lang => {
  setLocale(lang) // Змінюємо мову
  selectedLanguage.value = lang
  sessionStorage.setItem('lang', lang)
}

const toggleMenu = () => {
  showOptions.value = !showOptions.value
}

const closeMenu = () => {
  showOptions.value = false
}

// При завантаженні встановлюємо мову згідно з мовою користувача
onMounted(() => {
  const userLang = preferredLanguages[0] || 'en-US' // Оскільки у нас може бути тільки одна мова
  const langToSet = userLang.includes('ru') || userLang.includes('uk') ? 'uk' : 'en'
  setLocale(langToSet) // Встановлюємо мову в I18n
})
</script>

<template>
  <div
    class="lang-swither-wrapper flex-center rel"
    role="button"
    tabindex="0"
    :title="$t('toggleLangTip')"
  >
    <menu
      class="lang-switcher select flex-col-center hideO abs"
      :class="{ open: showOptions, close: !showOptions }"
      @click="toggleMenu"
      v-click-outside="closeMenu"
    >
      <li
        v-for="lang in sortedLanguages"
        :key="lang.code"
        class="select-option rel"
        :style="{ 'z-index': lang.code !== selectedLanguage ? 0 : 1 }"
        @click="changeLanguage(lang.code)"
      >
        <img
          :src="lang.flag"
          :alt="lang.name"
          class="select-option-img"
        />
      </li>
    </menu>
  </div>
</template>

<style lang="scss" scoped>
.lang-swither-wrapper {
  width: 20vmin;
  height: 10vmin;

  * {
    cursor: pointer !important;
  }
}

.lang-switcher {
  top: 1.25vmin;
}

.select {
  justify-content: space-between;

  &::after {
    content: '';
    z-index: -1;
    top: 0;
    width: 7.5vmin;
    background: #80808080;
    border-radius: 3.75vmin;
  }

  &-option {
    width: 7.5vmin;
    height: 7.5vmin;

    &::after {
      content: '';
      z-index: 1;
      top: 0;
      left: 0;
      width: 7.5vmin;
      height: 7.5vmin;
      border-radius: 3.75vmin;
      box-shadow: inset 0 0 0.5rem 0.166rem #80808080;
      backdrop-filter: saturate(0.8);
    }

    &-img {
      width: 7.5vmin;
      height: 7.5vmin;
      object-fit: cover;
      -webkit-object-fit: cover;
      -moz-object-fit: cover;
      border-radius: 50%;
      filter: contrast(1.05) brightness(1.05);
    }
  }

  &.close,
  &.close::after {
    height: 7.5vmin;
  }

  &.open,
  &.open::after {
    height: 17vmin;
  }
}
</style>
