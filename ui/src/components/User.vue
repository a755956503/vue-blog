<template>
  <div>
    user
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  created: function() {
    if (this.isLogin === 'loginout') {
      this.$router.push('login');
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  components: {
    
  }
}
</script>
<style scoped lang="less">

</style>
