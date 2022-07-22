<template>
    <div class="container">
      <Category title="美食">
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      </Category>

      <Category title="游戏">
        <ul>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
      </Category>

      <Category title="电影" >
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
  .container{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
</style>

