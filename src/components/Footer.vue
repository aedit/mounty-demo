<template>
  <footer>
    <span class="footer__text">
      Developed by
      <a href="http://aedit.me" target="_blank" rel="noopener noreferrer">
        Udit Sen
      </a>
    </span>
    <span>
      Page:
      <input
        :value="pageNo"
        type="number"
        min="1"
        :max="totalPages"
        @keyup.enter="$emit('pageChange', $event.target.value)"
      />
      of {{ totalPages || '' }}
    </span>
  </footer>
</template>

<script>
export default {
  props: ['totalPages', 'pageNo']
}
</script>
