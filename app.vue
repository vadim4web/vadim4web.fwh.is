<template>
  <div>
    <PageLoader v-show="showLoader" />
    <NuxtLayout>
      <main>
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useLoader } from '@/composables/useLoader'
const { showLoader, setShowLoader } = useLoader()
const router = useRouter()

// Слухаємо маршрутизацію для показу лоадера
router.beforeEach((to, from, next) => {
  setShowLoader(true)  // Показуємо лоадер
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    setShowLoader(false)  // Сховаємо лоадер після затримки
  }, 1755)  // Тривалість вашої анімації
})
</script>