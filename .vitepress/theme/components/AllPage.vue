<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue"; // 新增引用
import { data } from "../post.data";

const { tagMap, yearMap, postMap } = data;
console.log(tagMap)

const tags = Object.keys(tagMap);

const computedTagMap = computed(() => {
  let result = {};
  for (let key in tagMap) {
    result[key] = tagMap[key].map((url) => postMap[url]);
  }
  return result;
});

const currentTag = ref(null);
function onTagClick(newTag) {
  currentTag.value = currentTag.value === newTag ? null : newTag;
}

const yearList = Object.keys(yearMap).sort((a, b) => b - a); //  按年份降序排序
// const computedYearMap = computed(() => {
//   let result = {};
//   for (let key in yearMap) {
//     result[key] = yearMap[key].map((url) => postMap[url]);
//   }
//   return result;
// });

const selectedTag = ref(null) // 改为单个值存储选中标签

const computedYearMap = computed(() => {
  let result = {};

  // 获取所有文章并过滤
  const allPosts = Object.values(postMap).filter(post => {
    return !selectedTag.value || post.tags.includes(selectedTag.value)
  });

  // 按年份重新分组
  allPosts.forEach((post) => {
    const year = new Date(post.date.string).getFullYear();
    if (!result[year]) {
      result[year] = [];
    }
    result[year].push(post);
  });

  return result;
});

// 添加设备检测逻辑

const isMobile = ref(false); // 改为响应式 ref

// 窗口变化处理函数
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768; // 示例：改为 768px 以下视为移动端
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<template>
  <div class="article-container">
   <div class="tag-container">
    <label 
      v-for="(tag, i) in tags" 
      :key="i"
      class="tag-item"
      :class="{ selected: selectedTag === tag }"
    >
      <input 
        type="radio" 
        v-model="selectedTag"
        :value="tag"
        class="checkbox-input"
        @click="selectedTag = selectedTag === tag ? null : tag"  
      >
      <span>{{ tag }}</span>
      <span class="tag-count">{{ computedTagMap[tag].length }}</span>
    </label>
  </div>

    <div v-for="year in yearList" :key="year">
      <div v-text="year" class="year-title"></div>
      <div
        v-for="(article, index2) in computedYearMap[year]"
        :key="index2"
        class="article-item"
        :class="{ vertical: isMobile }"
      >
        <div class="post-info">
          <a
            v-text="article.title"
            :href="article.url"
            class="post-link"
            target="_blank"
          ></a>
        </div>
        <div class="post-date">
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
.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tag-item {
  display: block;
  padding: 4px 8px;
  /* color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  border: 1px solid var(--vp-button-brand-bg); */
  cursor: pointer;
  /* border-radius: 16px; */
  /* transition: all 0.2s ease; */
}

.tag-item:hover {
  /* color: var(--vp-c-brand); */
  /* transform: translateY(-2px); */
}

.tag-count {
  margin-left: 8px;
  color: skyblue;
  font-weight: bold;
}


.tag-count.selected {
  /* color: var(--vp-button-brand-bg) !important; */
}


/* 选中状态样式 */
.tag-item.selected {
  /* color: var(--vp-button-brand-bg) !important;
  border: 1px solid var(--vp-button-brand-bg) !important; */
  /* background: var(--vp-button-brand-text) !important; */
}

/* ----- */
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

.article-item.vertical {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
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


