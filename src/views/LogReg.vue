<template>
  <div
    class="modal fade"
    id="LogReg"
    tabindex="-1"
    aria-labelledby="LogReg"
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

}
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
    display:contents;
}

</style>