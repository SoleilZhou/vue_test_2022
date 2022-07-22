<template>
    <div class="container">
      <Category title="美食">
        <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        <a slot="footer" href="http://www.atguigu.com">更多美食</a>
      </Category>

      <Category title="游戏">
        <ul slot="center">
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
        <div slot="footer" class="foot">
          <a href="http://www.atguigu.com">单机游戏</a>
          <a href="http://www.atguigu.com">网络游戏</a>
        </div>
      </Category>

      <Category title="电影" >
        <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <template v-slot:footer>
          <div class="foot">
            <a href="http://www.atguigu.com">经典</a>
            <a href="http://www.atguigu.com">热门</a>
            <a href="http://www.atguigu.com">推荐</a>
          </div>
          <h4>欢迎前来观影</h4>
        </template>
      </Category>
    </div>
</template>

<script scoped>
    import Category from './components/Category';
    export default{
      name: "App",
      components: {Category},
      data(){
        return{
          foods:['火锅','烧烤','小龙虾','牛排'],
          games:['QQ飞车','神庙逃亡','崩坏3','超级玛丽'],
          films:['《请以你的名字呼唤我》','《小妇人》','《盛夏未来》','《我的姐姐》']
        }
      }
    }
</script>

<style>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>

