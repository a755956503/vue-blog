<template>
  <div>
    <div class="top">
      <full-video />
      <div class="header">
        <div class="img" />
        <p>
          情不知所起，一往而深
        </p>
        <p>
          翻一座山，做一个梦，等一个人
        </p>
      </div>
    </div>
    <div class="main">
      <blog-list/>
    </div>
  </div>
</template>
<script>
import FullVideo from '../base/FullVideo';
import BlogList from '../base/BlogList';
export default {
  components: {
    FullVideo,
    BlogList
  }
}
</script>
<style scoped lang="less">
.top{
  position: relative;
  .header {
    @length: 400px;
    position: absolute;
    width: 100%;
    height: @length;
    top: 50%;
    animation: going 1s ease-in-out;
    transform: translateY(-0.3 * @length);
    .img{
      @length: 100px;
      width: @length;
      height: @length;
      border-radius: @length / 2;
      background: white;
      background-image: url('../assets/header.png');
      background-size: cover;
      margin-left: 50%;
      transform: translateX(-0.5 * @length);
      margin-bottom: 30px;
    }
    p{
      margin-bottom: 20px;
      color: white;
    }
    @keyframes going {
        from {
          transform: translateY(-0.3 * @length + 100px);
          opacity: 0;
        }
        to {
          transform: translateY(-0.3 * @length);
          opacity: 1;
        }
      }
  }
}
.main{
  width: 100vw;
  height: 100vh;
}
</style>


