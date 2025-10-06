## LLaM3 

### Im3.py (下载， 安装， 部署， 应用)

+ 1. [https://ollama.com](https://ollama.com)
+ 下载， 安装， `ollama run llama3:8b  `
+ 默认端口：http://localhost:11434/v1

+ 2. SentenceTransformer 加载all-MiniLM-L6-v2, 手动下载
    + 1. [https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
    + 2. 代码加载
        ```
        from sentence_transformers import SentenceTransformer
        model = SentenceTransformer('all-MiniLM-L6-v2')
        ```


+ 3. function-calling : 参考openai写法: [https://platform.openai.com/docs/guides/function-calling](https://platform.openai.com/docs/guides/function-calling)


+ 4. 测试技能
图片

+ 5. 基础命令
```shell
$ ollama list
$ ollama run llama3:8b  

```
+ 6. 启动之后会有一个端口， 可以在自己的应用之中调用
+ 7. 为了集成, 工具 与Mcp 帮助我进行一些能力，比如，发邮件，查信息，查天气等功能，变成一个自己的小助手


+ 8. RAG 的作用
> 通过融合外部实时知识库，显著提升大型语言模型（LLM）生成内容的准确性、可靠性和时效性，同时减少模型幻觉并增强可解释性。‌

> 检索本地知识库

