<template>
  <div class="bg-gray-900 py-6">
  <div class="container px-6 py-4 mx-auto bg-gray-900  border border-gray-600">
    <h1 class="text-center text-white text-xl font-semibold md:text-3xl mt-5">新型コロナウイルス国内感染状況</h1>
  <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mt-4">
    <!-- Card 1 -->
    <div class=" bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 lg:mx-12">
         <div class="text-center my-5">
            <h1 id="name" class="text-xl md:text-2xl font-semibold mb-2">対策病床使用率(参考)※</h1>
            <p class="text-gray-800 mt-2 text-xl md:text-xl">61.63%</p>
            <p class="text-gray-800 mt-5 bg-red-900 mx-2 md:mx-10 md:text-xl">ステージ４</p>
            <nuxt-link to="/data/bedusage">
            <p class="mt-5 underline text-blue-600 md:text-xl">都道府県ごとの病床使用率</p>
            </nuxt-link>
         </div>
    </div>
    <!-- Card 2 -->
    <div class="p-4 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 lg:mx-12">
         <div class="text-center">
            <h1 class="text-xl font-semibold mb-2 md:text-2xl mt-3">累計感染者数</h1>
            <p class="text-gray-800 mt-3 text-xl">{{infectionData.totalInfection.toLocaleString()}}人</p>
            <p class="text-gray-800 mt-3 md:text-xl">前日比：+{{infectionData.comparison_yesterday.toLocaleString()}}人</p>
            <p class="text-gray-800 mt-3 md:text-xl">前週比：+{{infectionData.comparison_oneWeek.toLocaleString()}}人</p>
         </div>
    </div>
    <!-- Card 3 -->
      <div class="p-4 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 lg:mx-12">
         <div class="text-center">
            <h4 id="name" class="text-xl font-semibold mb-2 md:text-2xl mt-3">累計死亡者数</h4>
            <p class="text-gray-800 mt-3 text-xl">{{deathData.totalDeath.toLocaleString()}}人</p>
            <p class="text-gray-800 mt-3 md:text-xl">前日比：+{{deathData.comparison_yesterday.toLocaleString()}}人</p>
            <p class="text-gray-800 mt-2 md:text-xl">前週比：+{{deathData.comparison_oneWeek.toLocaleString()}}人</p>
         </div>
    </div>
    <!-- Card 4 -->
      <div class="p-4 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 lg:mx-12">
         <div id="body" class="text-center">
            <h4 id="name" class="text-xl font-semibold mb-2 mt-3 md:text-2xl">PCR検査陽性率</h4>
            <p id="job" class="text-gray-800 text-xl mt-2">{{pcrData.positive_rate}}%</p>
            <p id="job" class="text-gray-800 mt-2 md:text-xl">前日：{{pcrData.positive_rate_yesterday}}%</p>
            <p id="job" class="text-gray-800 mt-2 md:text-xl">前週：{{pcrData.positive_rate_oneWeekAgo}}%</p>
         </div>
    </div>
  </div>
  <div class="text-center mt-5">
    <h1 class="text-xl">感染者数 更新日：2021-08-29</h1>
    <h2 class="text-xs mt-1 md:text-lg">※対策病床使用率(参考) = 現在患者 / 新型コロナ対策病床数</h2>
    <a href="https://corona.go.jp/dashboard/" class="text-xs underline text-blue-600 md:text-lg">新型コロナウイルス感染症対策オープンデータ使用</a>
    <p class="text-xs">DATA: <a href="https://www.stopcovid19.jp/" class="underline text-blue-600 md:text-lg">新型コロナウイルス対策ダッシュボードを使用</a></p>
  </div> 
</div>
</div>
</template>

<script>
export default{
  props:{
    infectionData:{
      type: Object,
      default: () => {}
    },
    deathData:{
      type:Object,
      default:() => {}
    },
    pcrData:{
      type:Object,
      default:() => {}
    }
  }
}

</script>