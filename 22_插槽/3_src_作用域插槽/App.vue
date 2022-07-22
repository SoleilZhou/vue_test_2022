<template>
    <div class="container">
      <Category title="游戏">
        <template scope="{games}">
          <ul>
            <li v-for="(g,index) in games" :key="index">{{g}}</li>
          </ul>
        </template>
      </Category>

      <Category title="游戏">
        <template scope="{games}">
          <ol>
            <li style="color:grey" v-for="(g,index) in games" :key="index">{{g}}</li>
          </ol>
        </template>
      </Category>

      <Category title="游戏">
        <template scope="{games}">
          <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
        </template>
      </Category> -->
    </div>
</template>

<script scoped>
    import Category from './components/Category';
    export default{
      name: "App",
      components: {Category},
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

