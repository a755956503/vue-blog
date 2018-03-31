<template>
  <div class="container" id="fullVideo" />
</template>
<script>
import Utils from '../config/utils';
export default {
  data: function() {
    return {
    height: 0,
    scrollTop: 0,
    isScrolling: false
    };
  },
  mounted: function() {
    this.initVideo();
    document.addEventListener('scroll', this.onVideoScroll);
  },
  methods: {
    initVideo() {
      const fv = document.getElementById('fullVideo');
      const osTop = fv.offsetTop;
      const osHeight = fv.offsetHeight;
      const scrollTop = document.documentElement.scrollTop;
      this.height = osTop + osHeight;
      this.scrollTop = scrollTop;
    },
    onVideoScroll() {
      console.log(`${this.height} ${this.scrollTop}`);
      const scrollTop = document.documentElement.scrollTop;
       if (!this.isScrolling) {
        this.isScrolling = true;
        if (scrollTop < this.height) {
          if (scrollTop > this.scrollTop) {
            Utils.scrollAnimation(this.height, () => {
              this.scrollTop = this.height;
              this.isScrolling = false;
            });
          } else if (scrollTop < this.scrollTop) {
            Utils.scrollAnimation(0, () => {
              this.scrollTop = 0;
              this.isScrolling = false;
            });
          } else {
            this.isScrolling = false;
          }
        } else {
          this.isScrolling = false;
        }
      }
    },
    
  }
}
</script>
<style scoped lang="less">
  .container {
    width: 100vw;
    height: 100vh;
    background: black;
  }
</style>


