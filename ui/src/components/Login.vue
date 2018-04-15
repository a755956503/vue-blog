<template>
  <div class="container">
    <div class="login">
      <div class="title">
        请输入密码
      </div>
      <input
        v-model="password"
        class="content"
        type="text">
      <div class="submit">
        <button
          @click="handleLogin">
          进入私人空间
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import * as Vars from '../config/var';
import * as Types from '../store/types';
import { mapMutations } from 'vuex';
export default {
  data: function() {
    return {
      password: '',
    };
  },
  mounted: function() {

  },
  components: {
    
  },
  methods: {
    ...mapMutations({
      loginSuccess: Types.LOGIN_SUCCESS,
    }),
    handleLogin(e) {
      if (this.password === Vars.password) {
        this.loginSuccess();
        this.$router.go(-1);
      }
    }
  },
  computed: {
  }
}
</script>
<style scoped lang="less">
  .container {
    width: 100vw;
    height: 100vh;
    position: relative;
    background:  #F5FFFA;
    opacity: 0.6;
    .login {
      width: 500px;
      height: 300px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: 0 0 5px 0 #ccc;
      border-radius: 10px;
      .title {
        height: 40px;
        font-size: 30px;
        margin-top: 30px;
      }
      .content {
        height: 40px;
        font-size: 30px;
        margin-top: 30px;
        transition: all 1s;
        border-radius: 5px;
        box-shadow: 0 0 10px 0 #ccc;
        border:  #F5FFFA;
      }
      .submit {
        margin-top: 30px;
        button {
          height: 40px;
          font-size: 20px;
          border-radius: 3px;
          background: #8B6508;
          color: 	#F8F8FF;
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
    }
  }
</style>