<template>
  <div class="container">
    <div class="title">
      <input
        v-model="title"
        type="text">
    </div>
    <div class="content">
      <textarea
        v-model="content">
      </textarea>
    </div>
    <div class="submit">
        <button
          @click="handleSubmit">
          立即发布
        </button>
      </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data: function() {
    return {
      title: '',
      content: '',
    }
  },
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
    
  },
  methods: {
    ...mapActions([
      'addArticle'
    ]),
    handleSubmit() {
      const article = {
        title: this.title,
        content: this.content,
      };
      this.addArticle({ article });
    }
  },
}
</script>
<style scoped lang="less">
  .container {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30px;
    background:  #F5FFFA;
    .title {
      input {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        font-size: 30px;
        padding-left: 20px;
        color: #A0522D;
        box-shadow: 0 0 5px 0 #ccc;
        border: #ccc;
      }
    }
    .content {
      margin-top: 30px;
      textarea {
        box-shadow: 0 0 10px 0 #ccc;
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
        font-size: 20px;
        height: 500px;
        border: #ccc;
      }
    }
    .submit {
        margin-top: 30px;
        text-align: right;
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
</style>
