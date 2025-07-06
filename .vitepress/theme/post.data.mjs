import { createContentLoader } from 'vitepress'
import { execSync } from 'child_process' // 新增导入
import { statSync } from 'fs'

import { resolve } from 'path'

import tagDic from '../tags.mjs'

const tagKeys = Object.keys(tagDic);

// @TODO: 同步获取,在数量大的时候会缓慢
const getGitTimestamp = (filePath) => {
    try {
        // 获取文件首次提交时间
        const output = execSync(
            `git log --format=%cI -- "${filePath}"`,  // 移除 --reverse 参数
            { encoding: 'utf-8' }
        ).trim().split('\n')[0];
        return output ? new Date(output) : new Date();
    } catch (e) {
        return new Date();
    }
};
export default createContentLoader(["docs/*/*.md", "docs/**/*.md"], {
    transform(raw) {
        const postMap = {};
        const yearMap = {};
        const tagMap= {};

        console.log('raw', raw)
        const posts=raw
            .map(({url,frontmatter}) => {
                // console.log('frontmatter',frontmatter)
                // console.log('url',url)
                let url1 = url.replace(".html", ".md").replace("/docs", "docs")
                const gitDate = getGitTimestamp(url1)
                const pad = n => n.toString().padStart(2, '0')

                // 获取文件物理路径
                const filePath = resolve( './', url1)
                // 获取文件状态信息
                  const stats = statSync(filePath)
                //   console.log('gitDate',gitDate)

                const tempTagKey = url.split("/")[2];

                let tags= tagKeys.includes(tempTagKey) ? [tagDic[tempTagKey]]: [tempTagKey];

                // 找到 url 最后一个 / 之后的内容
                let title = url.substring(url.lastIndexOf("/") + 1)
                //    判断有没有.html后缀,如果有就去掉
                title = title.replace(".html", "")
                if(frontmatter?.tags) {
                    tags= [...tags, ...frontmatter.tags];
                }
              
                const result = {
                    title: title,
                    url,
                    // date: formatDate(frontmatter.date),
                    // date:  {
                    //     "time": 1713052800000,
                    //     "string": '2024-01-01'
                    // },
                    date: {
                        "time": stats.mtimeMs,
                         "string": `${gitDate.getFullYear()}-${pad(gitDate.getMonth()+1)}-${pad(gitDate.getDate())} ` +
                                `${pad(gitDate.getHours())}:${pad(gitDate.getMinutes())}`
                    },
                    abstract: frontmatter.abstract,
                    tags,
                };
                postMap[result.url] = result;
                return result;
            })
            .sort((a, b) => b.date.time - a.date.time);

        posts.forEach((item) => {
            const year = new Date(item.date.string).getFullYear();
            if (!yearMap[year]) {
                yearMap[year] = [];
            }
            yearMap[year].push(item.url);
            item.tags.forEach((tag) => {
                if(!tagMap[tag]){
                    tagMap[tag] = []
                }
                tagMap[tag].push(item.url)
            })
        });
        return {
            yearMap,
            postMap,
            tagMap,
        };
    },
});

