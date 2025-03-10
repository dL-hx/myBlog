<script  setup>
import  {  computed  }  from  'vue'
import    {  data  }    from  '../post.data';
const  {  yearMap,postMap  }  =  data
const  yearList  =  Object.keys(yearMap).sort((a,  b)  =>  b  -  a);  //  按年份降序排序
const  computedYearMap  =  computed(()=>  {
    let  result  =  {}
    for(let  key  in  yearMap)  {
        result[key]  =  yearMap[key].map(url  =>  postMap[url])
    }
    return  result
})
console.log('computedYearMap===')
console.log(computedYearMap)
</script>

<template>
  <div class="article-container">
    <div v-for="year in yearList" :key="year">
      <div v-text="year" class="year-title"></div>
    <div v-for="(article, index2) in computedYearMap[year]" :key="index2" class="article-item">
    <div class="post-info">
        <a v-text="article.title" :href="article.url" class="post-link" target="_blank"></a>

    </div>
    <div  class="post-date">
         <span 
                v-for="(tag, index) in article.tags" 
                :key="index" 
                class="post-tag"
            >
                {{ tag }}
         </span>
        <span v-text="article.date.string"></span>
    </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.article-container {
  max-width: 1024px;
  width: 100%;
  padding: 2rem 1.5rem;
  margin: 0 auto;
}

.year-title {
  padding: 0.75rem 0 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-family: ui-serif, Georgia, serif;
}

.article-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.meta-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tags-container {
  display: flex;
  gap: 6px;
}

.post-tag {
  font-size: 0.8em;
  padding: 2px 8px;
  border-radius: 12px;
  margin-right: 8px;
  background-color: #e0e7ff;
  color: #3b82f6;
  white-space: nowrap;
}

.post-link {
  text-decoration: none !important;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
}

.post-link::before {
  content: "";
  position: absolute;
  left: -1rem;
}

.post-date {
  color: #666;
  font-size: 0.9em;
  font-family: monospace;
}
</style>


