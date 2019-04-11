<template>
  <div>
    <i-input :value.sync="value" placeholder="请输入..." style="width: 300px"></i-input>
    <div>

    </div> 
  </div>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>