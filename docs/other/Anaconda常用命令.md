
## 创建环境

conda create -n 环境名 python=版本号

```bash
conda create -n myTrader 
python=3.12
```

## 列出所有环境
查看已经下载的环境
```bash
conda env list
```
![img_4.png](assets/Anaconda%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/img_4.png)


## 列出已下载的包
查看已经下载的包
```bash
conda list
```
![img_3.png](assets/Anaconda%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/img_3.png)


## 激活环境

 环境名
```bash
conda activate myTrader
```
![img_1.png](assets/Anaconda%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/img_1.png)

如果遇到这个报错
+ 1. 先运行
```bash
conda init 
```

+ 2. 重新打开终端cmd
+ 3. 重新运行命令
```bash
conda activate myTrader
```

![img_2.png](assets/Anaconda%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/img_2.png)


## 退出环境 
conda deactivate
```bash
conda deactivate
``` 

## 删除环境

conda remove -n 环境名 --all
```bash
conda remove -n myTrader --all
```
会删除`env_dirs`目录中的环境，不会删除`pkgs_dirs`中的包,

所以说`pkgs_dirs`中的包，是包的拷贝，方便下次安装使用，不用再次下载


## 下载包

使用 conda 命令
####  基本安装
conda install 包名
####  指定版本安装
conda install 包名=版本号
$ conda install numpy
####  指定版本安装，例如安装 1.24.3 版本
$ conda install numpy=1.24.3

下载的包会在`pkgs_dirs`目录下


####  基本删除命令
conda uninstall 包名

示例：删除 numpy 包
$ conda uninstall numpy
只会删除环境中的包，不会删除`pkgs_dirs`中的包


## 项目实际用法
:::tip
项目实际用法
+ **创建环境**
conda create -n myTrader
+ **激活环境**
conda activate myTrader
+ **安装需要的包（例如numpy）**
conda install numpy

+ **在vscode 或者pycharm中，设置环境为我们的虚拟环境`myTrader`**

+ **然后删除环境**
conda remove -n myTrader --all
![img_5.png](assets/Anaconda%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/img_5.png)

:::


![img_8.png](assets/Anaconda%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/img_8.png)

![img_6.png](assets/Anaconda%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/img_6.png)


![img_9.png](assets/Anaconda%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/img_9.png)