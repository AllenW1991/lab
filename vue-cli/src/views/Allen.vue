<template>
  <div>
    <h1>AllenWang</h1>
    <div>
      <router-link :to="{name:'allen-info'}">Info</router-link> |
      <router-link :to="{name:'allen-youtube'}">Youtube</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
