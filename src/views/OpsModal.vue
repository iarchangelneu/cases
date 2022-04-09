<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">header</slot>
        </div>
        <div class="modal-body">
          <slot name="body">body</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">footer</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<style scoped>

.modal-dialog{
   min-width:49.01vw;
}
.modal-content {
  background: #281F27;
  border-radius: 20px;
}
.modal-header, .modal-footer{
    border-bottom: 0;
    border-top:0;
}
.modal-footer{
    display: contents ;
}
</style>