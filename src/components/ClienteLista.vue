<template>
  <li>
    {{ cliente.nombre }}
    <button @click="$emit('remove', cliente.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    cliente: {
      type: Object,
      required: true
    }
  }
}
</script>