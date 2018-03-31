<template>
  <div class="list" @click="up">
    <div v-for="(item, index) in initData" class="list_container">
      <div
        @click="toggle(index, $event)"
        class="list_item">
        <div class="title">
          <img src="../assets/bg.jpeg" alt="">
          <p>{{item.title}}</p>
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="toggle">
          <span>查看更多</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import * as x from '../config/request';
import { mapActions, mapState } from 'vuex';
import Utils from '../config/utils';
export default {
  data: function() {
    return {
      a: 1,
      toggleIndex: -1
    };
  },
  created: async function() {
    // const result = await Request.get('/blog/list');
    // console.log(x.default);// 3
    console.log('created' + this.a);
    this.getInitData();
  },
  mounted: function() {
    // this.a = 2;
  },
  updated: function() {
    console.log(this.a);
  },
  methods: {
    ...mapActions([
      'getInitData',
    ]),
    up() {
      console.log('click');
      this.a = this.a + 1;
    },
    toggle(index, e) {
      if (this.toggleIndex === index) {
        this.toggleIndex = -1;
        // const item = document.getElementsByClassName('list_item')[index];
        const content = e.currentTarget.getElementsByClassName('content')[0];
        content.className = "content";
      } else {
        let set = 20;
        if (this.toggleIndex !== -1) {
          const oldItem = document.getElementsByClassName('list_item')[this.toggleIndex];
          const oldContent = oldItem.getElementsByClassName('content')[0];
          oldContent.className = "content";
          if (this.toggleIndex < index) {
            set += 200;
          }
        }
        const item = e.currentTarget;
        const content = item.getElementsByClassName('content')[0];
        const offsetTop = item.offsetTop - set;
        Utils.scrollAnimation(offsetTop, null, 5);
        content.className = "content content_active";
        this.toggleIndex = index;
      }
    }
  },
  computed: {
    ...mapState({
      initData: 'initData'
    })
  },
  watch: {
    initData(val) {
      this.a = val;
    }
  }
}
</script>
<style scoped lang="less">
  .list{
    width: 100%;
    @item: 100px;
    .list_container {
      margin-top: 50px;
      .list_item {
        width: 80vw;
        margin-left: 10vw;
        overflow: hidden;
        box-shadow: 0 0 5px 0 #ccc;
        margin-bottom: 10px;
        .title {
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
          img{
            width: 100%;
            height: 200px;
            transition: all 1s;
          }
          p {
            position: absolute;
            bottom: 10px;
            left: 20px;
            color: #fff;
            font-size: 20px;
            transition: all 1s;
          }
        }
        .content {
          height: 100px;
          overflow: hidden;
          padding: 10px;
          transition: all 1s;
        }
        .content_active {
          height: 300px;
          overflow: scroll;
        }
        .toggle {
          height: 40px;
          position: relative;
          span {
            position: absolute;
            right: 10px;
            bottom: 5px;
            font-size: 16px;
            color: #8B6508;

            &:hover {
              color: #C5C1AA;
            }
          }
        }

        &:hover {
          box-shadow: 0 0 30px 0 #ccc;
          cursor: pointer;
          .title {
            img {
              width: 120%;
              height: 240px;
            }
            p {
              font-size: 24px;
              left: 30px;
            }
          }
        }
      }
      

    }
  }
</style>