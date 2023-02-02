<template>
  <div class="home">
    <Transition name="toast">
      <Toast v-if="showToast" />
    </Transition>
    <Todos @badValue="triggerToast" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Toast from '../components/Toast'
import Todos from '../components/Todos'

export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false)

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }

    return { showToast, triggerToast }
  }
}
</script>

<style>
.toast-leave-to {
  transform: translateY(-60px);
}

.toast-enter-active {
  animation: wooble 0.7s ease-out;
}

.toast-leave-active {
  transition: all 0.5s ease-out;
}

@keyframes wooble {
  0% {transform: translateY(-60px); opacity: 0;}
  50% {transform: translateY(0); opacity: 1;}
  60% {transform: translateX(-8px);}
  65% {transform: translateX(8px);}
  70% {transform: translateX(-8px);}
  75% {transform: translateX(8px);}
  80% {transform: translateX(-4px);}
  90% {transform: translateX(-4px);}
  100% {transform: translateX(0);}
}

</style>