<script setup lang="ts">
import type { NuxtError } from '#app'
const { t } = useI18n();

const props = defineProps({
  error: Object as () => NuxtError
})
const router = useRouter()
const goBack = () => {
	router.go(-1)
}
</script>

<template>
	<main class="error-page flex-col-center not-found w100">
		<h2 class="h2 flex-col-center text-center">
			{{ error?.statusCode }}
			<TextHighlight />

			<div class="p1">
				{{ t('notFoundT11') }}<br />
				{{ t('notFoundT12') }}<b>{{ useRoute().path }}</b>{{ t('notFoundT13') }}<br />
				{{ t('notFoundT14') }}<br />
				<hr />
				<hr />
				<i>{{ t('notFoundT15') }}</i>
			</div>

			<InteractiveButton
				:action="goBack"
				:bg="'var(--bg50)'"
				:border-radius="'4.25rem'"
				class="font-variant go-back"
				:font-size="'2.5rem'"
				:padding="'3rem 5rem'"
			>
				{{ t('notFoundB') }}
			</InteractiveButton>
		</h2>
	</main>
</template>

<style lang="scss">
.error-page {
  height: 100vh !important;

  h2 {
    top: -7.5vh;
    font-size: 20rem;

    .text-highlight {
      top: 2rem;
    }

    .p1 {
      line-height: 3.5rem;
      font-size: 3rem;

      b {
        color: var(--bg0);
        background: var(--color0);
      }
    }

    .go-back {
      margin-top: 5rem;
    }
  }
}
</style>
