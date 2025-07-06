
# D3使用

## 一 使用

可视化库。

https://www.d3js.org.cn/

https://github.com/xswei/d3js_doc



### d3.v3.min.js

https://download.csdn.net/download/qq_35812380/85360370?spm=1001.2014.3001.5501



API:

https://github.com/xswei/d3js_doc/blob/master/API_Reference/API.md#arrays-d3-array



代码文件:

https://download.csdn.net/download/qq_35812380/85362383

## 二 操作

### 2.1 操作元素, 操作svg

> .select()
>
> .selectAll()



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>D3js</title>
    <script src="./d3.min.js"></script>
</head>
<body>
<div id="box">
    <p>p元素</p>
    <p>p元素</p>
    <p>p元素</p>
</div>
<div>第二个div元素</div>
<svg width="600" height="400">
    <rect x="100" y="100" width="200" height="100" style=" stroke:red; stroke-width: 4"></rect>
</svg>
<script>
// 1. d3获取元素
console.log(d3.select('#box'))
console.log(d3.select('#box p'))
console.log(d3.selectAll('#box'))
console.log(d3.selectAll('div'))

// 2. 获取元素属性
console.log(d3.select('svg').attr('width'))


// 03 设置属性
// d3.select('rect')
//   .attr('fill', 'seagreen')
//   .attr('transform', 'translate(100, 100)')


// 04 添加删除元素
d3.select('svg').append('rect')
    .attr('x', 100)
    .attr('y', '200')
    .attr('width', '200')
    .attr('height', '100')
    .attr('fill', 'lightblue')

d3.select('svg').append('text')
    .attr('x', 100)
    .attr('y', 260)
    .attr('fill', 'red')
    .attr('font-size', 20)
    .attr('textLength', 200)
    .text('XXXX')

// 05 删除元素
d3.selectAll('rect').remove()
    
</script>
</body>
</html>
```

### 2.2 数据绑定bind data

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绑定数据</title>
    <script src="./d3.min.js"></script>
</head>
<body>

<script>
    // 文章参考
    // https://bost.ocks.org/mike/join/?_blank


    // 01 添加svg, 通过属性创建svg
    d3.select('body').append('svg')
        .attr('width', 600)
        .attr('height',400)

    // 02 绘制圆形1
    // d3.select('svg').append('circle')
    //     .attr('cx', 100)
    //     .attr('cy',100)
    //     .attr('r',10)
    //     .attr('fill','orange')
    //
    //
    // d3.select('svg').append('circle')
    //     .attr('cx', 100)
    //     .attr('cy',100)
    //     .attr('r',10)
    //     .attr('fill','orange')


    // 03 定义数据,批量创建, 数据驱动
    const data = [
        { cx: 100, cy: 100, r: 10, fill: 'orange' },
        { cx: 130, cy: 140, r: 20, fill: 'seagreen' },
        { cx: 230, cy: 240, r: 19, fill: 'lightblue' },
    ]

    d3.select('svg').selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return d.cx; })
        .attr("cy", function(d) { return d.cy; })
        .attr("r", function(d) { return d.r; })
        .attr("fill", function(d) { return d.fill; });
</script>
</body>
</html>
```



### 2.3 插入&删除元素

1. append():在选择集末尾插入元素
2. update():更新元素
3. exit():删除元素
4. enter()方法，: 新增数据,     使得在有数据，而没有足够图形元素的情况下，补充足够的元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>三种选择集</title>
  <script src="./d3.min.js"></script>
</head>

<body>
  <p></p>
  <p></p>
  <p></p>
  <script>
    //数据
    const data = [1, 2, 3, 4, 5]
    const allAp = d3.selectAll('body p')
    const update = allAp.data(data)
    update.text(d => "更新" + d)
    const enter = update.enter()
    enter.append('p').text(d => '新增' + d)

    const allAp = d3.selectAll('body p')
    const update = allAp.data(data)
    update.text(d => "更新" + d)

    const exit = update.exit()
    exit.text(d => "将要删除" + d)

   // 03 enter 
    d3.select('body').selectAll('p')
      .data(data)
      .enter()
      .append('p')
      .text(d => d)

    // 04 data datum 
    // const data = [1, 2, 3, 4, 5]
    // const data = 'XXXX'
    // const data = { name: 'lg', age: 100 }
    //
    // d3.selectAll('body p')
    //   // .data(data)
    //   .datum(data)
    //   .text(d => d.name)
  </script>
</body>

</html>
```

### 2.4 绘制静态直方图

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>绘制直方图</title>
  <script src="./d3.min.js"></script>
  <style>
    div svg {
      display: block;
      margin: 40px auto 0;
      border: 1px solid orange;
    }
  </style>
</head>

<body>
  <div id="svg"></div>
  <script>
    // 定义数据
    const width = 700
    const height = 400
    const rectStep = 40
    const rectWidth = 30
    const data = [10, 50, 280, 122, 90, 230, 250, 300]

    // 定义填充
    const margin = { left: 20, right: 20, top: 20, bottom: 20 }

    // 创建 svg 
    d3.select('#svg').append('svg')
      .attr('width', width)
      .attr('height', height)

    // 绘制矩形
    d3.select('svg').selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => margin.left + i * rectStep)
      .attr('y', d => height - d - margin.bottom)
      .attr('width', rectWidth)
      .attr('height', d => d)
      .attr('fill', 'lightblue')

    // 绘制文字
    d3.select('svg').selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('fill', '#666')
      .attr('font-size', '20')
      .attr('x', (d, i) => margin.left + i * rectStep)
      .attr('y', d => height - d - margin.bottom - 5)
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(${rectWidth / 2})`)
      .text(d => d)
  </script>
</body>

</html>
```

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-3K7FHVH8-1652424418572)(%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20220513125544496.png)\]](assets/86c1d1874c4d243ca75fb940535ae5d7.png)




### 2.5 比例尺

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>D3常见比例尺</title>
  <script src="./d3.min.js"></script>
</head>

<body>
  <script>
    // 比例尺： 线性  +  序数
    // 01 scaleLinear
    let scale = d3.scaleLinear()
    //   .domain([1, 5])
    //   .range([1, 100])
    // console.log(scale(1))
    // console.log(scale(4))
    // console.log(scale(5))
    // scale.clamp(true)
    // console.log(scale(-1))
    // console.log(scale(10))

    // 02 scaleBand
    scale = d3.scaleBand()
      .domain([1, 2, 3, 4])
      .range([0, 100])
    // console.log(scale(1))
    // console.log(scale(2))
    // console.log(scale(3))
    // console.log(scale(4))
    // console.log(scale(0))
    // console.log(scale(10))

    // 03 scaleOrdinal
    scale = d3.scaleOrdinal()
      .domain(['lg', 'syy', 'zce'])
      .range([18, 22, 40, 50])
    // console.log(scale('lg'))
    // console.log(scale('syy'))
    // console.log(scale('zce'))
    // console.log(scale('abc'))
    // console.log(scale('abcde'))

    // 04 scaleQuantize
    scale = d3.scaleQuantize().domain([0, 10]).range(['xl', 'm', 's'])
    console.log(scale(3.4))
    console.log(scale(4))
    console.log(scale(6.7))
    console.log(scale(-10))
    console.log(scale(30))

  </script>
</body>

</html>
```



### 2.6 绘制坐标轴

https://www.d3js.org.cn/document/d3-axis/#installing

1. d3.axisTop():创建顶部坐标轴
2. d3.axisRight():创建垂直右坐标轴
3. d3.axisBottom():创建底部坐标轴
4. d3.axisLeft():创建垂直居左坐标轴



```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>比例尺与坐标轴</title>
  <script src="./d3.min.js"></script>
</head>

<body>
  <div id="box"></div>
  <script>
    // 定义数据
    const width = 600
    const height = 500
    const margin = { left: 50, right: 50, bottom: 50, top: 50 }
    const kindData = ['ES6+', "NodeJS", "Vue", "React", "Angular"]
    const kindPixel = [margin.left, width - margin.right]
    const ratioData = [80, 60, 50, 20, 100]
    const ratioPixel = [height - margin.bottom, margin.top]

    // 设置画布
    d3.select('#box').append('svg')
      .attr('width', width)
      .attr('height', height)

    // 定义比例尺
    const xScale = d3.scaleBand().domain(kindData).rangeRound(kindPixel)
    // 定义坐标刻度生成器
    const xAxis = d3.axisBottom(xScale)
    // 绘制X轴具体的刻度内容
    d3.select('svg').append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .attr('font-size', 14)

    // 定义y轴比例尺
    const yScale = d3.scaleLinear().domain([0, d3.max(ratioData)]).range(ratioPixel)
    const yAxis = d3.axisLeft(yScale)
    d3.select('svg').append('g')
      .call(yAxis)
      .attr('transform', `translate(50, 0)`)
      .attr('font-size', 14)

  </script>
</body>

</html>
```

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-i82xCIcA-1652424418575)(%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20220513125521527.png)\]](assets/0f616a2e176fedb0256d4bf81a848909.png)




### 2.7 过渡

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>D3过渡</title>
  <script src="./d3.min.js"></script>
</head>

<body>
  <script>
    // 添加画布
    const svg = d3.select('body').append('svg')
      .attr('width', 600)
      .attr('height', 400)

    // 绘制图形
    const circle = d3.select('svg').append('circle')
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('r', 20)
      .attr('fill', 'seagreen')

    // transition duration delay ease 
    // 初始状态  结束状态 
    circle.attr('cx', 100).attr('cy', 100)

    // 结束状态
    circle.transition()
      .duration(3000)
      .delay(1000)
      .ease(d3.easeBounce)
      .attr('cx', 500)
      .attr('cy', 300)
  </script>
</body>

</html>
```

### 2.8 过渡直方图

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>柱状图带过渡</title>
    <script src="./d3.min.js"></script>
</head>

<body>
<script>
    // 画布大小
    const width = 600
    const height = 400

    // 1 添加画布
    const svg = d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height)

    // 2 填充
    const margin = { left: 30, right: 30, top: 20, bottom: 30 }

    // 3 准备源数据
    const data = [10, 20, 30, 40, 36, 25, 18, 5]

    // 4 绘制坐标轴（比例尺）[0, 1 , 2, 3]=>[0, 540]
    const xScale = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.left - margin.right])
        .padding(0.1)

    // 5 定义X轴的生成器
    const xAxis = d3.axisBottom(xScale)
    // 6 绘制X轴坐标
    const gx = d3.select('svg').append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${height - margin.bottom})`)

    // 7 绘制Y轴（比例尺  生成器 Y绘制）[5, 40] [30, 400]
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([height - margin.top - margin.bottom, margin.bottom])
    const yAxis = d3.axisLeft(yScale)
    const gy = d3.select('svg').append('g')
        .call(yAxis)
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // 8 绘制柱状图
    const rects = svg.selectAll('.myRect')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'myRect')
        .attr('x', (d, i) => xScale(i))
        .attr('y', d => yScale(d))
        .attr('width', xScale.bandwidth())
        .attr('height', d => yScale(0) - yScale(d))
        .attr('fill', 'orange')
        .attr('transform', `translate(0, ${margin.top})`)

    // 提供二个状态
    rects.attr('y', () => yScale(0)).attr('height', 0)
    rects.transition()
        .duration(1000)
        .delay((d, i) => i * 200)
        .ease(d3.easeBounce)
        .attr('y', d => yScale(d))
        .attr('height', d => yScale(0) - yScale(d))

    // 9 绘制文件
    const texts = svg.selectAll('myText')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'myText')
        .attr('fill', '#666')
        .attr('text-anchor', 'middle')
        .attr('x', (d, i) => xScale(i))
        .text(d => d)
        .attr('transform', `translate(${xScale.bandwidth() / 2}, ${margin.top})`)
        .attr('y', () => yScale(0))
        .transition()
        .delay((d, i) => i * 200)
        .duration(1000)
        .ease(d3.easeBounce)
        .attr('y', (d) => yScale(d) - 5)
</script>
</body>

</html>
```

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-HnlWXd5N-1652424418576)(%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20220513144056800.png)\]](assets/a3ad42fa7c915384941aab0463cce4d2.png)


### 2.9 添加交互

#### 如何添加交互?

```js
var circle = svg.append("circle");
circle.on("click",function(){
	//在此处添加交互内容
});
```

在D3中，每一个选择集都有on()函数，用于添加事件监听器。

其中，on()的第一个参数是监听的事件，第二个参数是监听到时间后响应的内容，第二个参数是一个函数。

 对于鼠标，常用事件有：

click：鼠标单击某元素时，相当于mousedown和mouseup组合在一起

mouseover：光标放在某元素上

mouseout：光标从某元素上移出来时

mousemove：鼠标被移动的时候

mousedown：鼠标按钮被按下

mouseup：鼠标按钮被松开

dblclick：鼠标双击

键盘常用的事件

keydown：当用户按下任意键时触发，按住不放会重复触发此事件。

keypress：当用户按下字符键(大小写字母、数字、加号、等号、回车等)时触发，按住不放会重复触发此事件

keyup：当用户释放键时触发

触屏常用的事件

touchstart：当触摸点被放在触摸屏上时

touchmove：当触摸点在触摸屏上移动时

touchend：当触摸点从触摸屏上拿开时

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>柱状图带交互</title>
  <style>
    html,
    body {
      width: 100%;
      margin: 0;
    }

    #tip {
      color: #fff;
      display: none;
      margin-top: 15px;
      margin-left: 15px;
      position: absolute;
      padding: 5px 10px;
      border-radius: 3px;
      background: rgba(0, 0, 0, .4);
      font: normal 14px/1em '微软雅黑';
    }
  </style>
  <script src="./d3.min.js"></script>
</head>

<body>
  <script>
    // 画布大小
    const width = 600
    const height = 400

    // 1 添加画布
    const svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height)

    // 2 填充
    const margin = { left: 30, right: 30, top: 20, bottom: 30 }

    // 3 准备源数据
    const data = [10, 20, 30, 40, 36, 25, 18, 5]

    // 4 绘制坐标轴（比例尺）[0, 1 , 2, 3]=>[0, 540]
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, width - margin.left - margin.right])
      .padding(0.1)

    // 5 定义X轴的生成器
    const xAxis = d3.axisBottom(xScale)
    // 6 绘制X轴坐标
    const gx = d3.select('svg').append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height - margin.bottom})`)

    // 7 绘制Y轴（比例尺  生成器 Y绘制）[5, 40] [30, 400]
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height - margin.top - margin.bottom, margin.bottom])
    const yAxis = d3.axisLeft(yScale)
    const gy = d3.select('svg').append('g')
      .call(yAxis)
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // 8 绘制柱状图
    const rects = svg.selectAll('.myRect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'myRect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => yScale(0) - yScale(d))
      .attr('fill', 'orange')
      .attr('transform', `translate(0, ${margin.top})`)

    // 提供二个状态
    rects.attr('y', () => yScale(0)).attr('height', 0)
    rects.transition()
      .duration(1000)
      .delay((d, i) => i * 200)
      .ease(d3.easeBounce)
      .attr('y', d => yScale(d))
      .attr('height', d => yScale(0) - yScale(d))

    // 9 绘制文件
    const texts = svg.selectAll('myText')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'myText')
      .attr('fill', '#666')
      .attr('text-anchor', 'middle')
      .attr('x', (d, i) => xScale(i))
      .text(d => d)
      .attr('transform', `translate(${xScale.bandwidth() / 2}, ${margin.top})`)
      .attr('y', () => yScale(0))
      .transition()
      .delay((d, i) => i * 200)
      .duration(1000)
      .ease(d3.easeBounce)
      .attr('y', (d) => yScale(d) - 5)

    // 自定义缓动类
    class EaseObj {
      constructor(target) {
        this.target = target
        this.pos = { x: width / 2, y: height / 2 }
        this.endPos = { x: 0, y: 0 }
        this._play = false
        this.fm = 0
        this.speed = 0.1
      }
      set animate(value) {
        if (value !== this._play) {
          if (value) {
            this.render()
          } else {
            this.cancel()
          }
          this._play = value
        }
      }

      render() {
        const { pos, endPos, speed, target } = this
        pos.x += (endPos.x - pos.x) * speed
        pos.y += (endPos.y - pos.y) * speed
        target.style('left', `${pos.x}px`)
          .style('top', `${pos.y}px`)

        this.fm = requestAnimationFrame(() => {
          this.render()
        })
      }

      cancel() {
        cancelAnimationFrame(this.fm)
      }
    }

    // 10 定义提示框元素
    const tip = d3.select('body').append('div').attr('id', 'tip')
    // 11 鼠标移上
    rects.on('mouseover', ({ clientX, clientY }, data) => {
      tip.style('left', `${clientX}px`)
        .style('top', `${clientY}px`)
        .style('display', 'block')
        .html(`
          <p>此项平均值：${data}</p>
        `)
    })

    const tipObj = new EaseObj(tip)
    rects.on('mousemove', ({ clientX, clientY }, data) => {
      tipObj.endPos = { x: clientX, y: clientY }
      tipObj.animate = true
    })

    rects.on('mouseout', () => {
      tipObj.animate = false
      tip.style('display', 'none')
    })


    // rects.on('mousemove', ({ clientX, clientY }, data) => {
    //   tip.style('left', `${clientX}px`)
    //     .style('top', `${clientY}px`)
    // })

    // rects.on('mouseout', ({ clientX, clientY }, data) => {
    //   tip.style('left', `${clientX}px`)
    //     .style('top', `${clientY}px`)
    //     .style('display', 'none')
    // })
  </script>
</body>

</html>
```

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-z7T1pAbN-1652424418577)(%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20220513144223799.png)\]](assets/8a8dbde9cfee2d28dac832fb74895778.png)


## 总结

1. **一种可视化图形技术,   不同于cavans ,dic , 通过js 库绘制图形库**
2. **数据与代码分开, 数据驱动图形绘制的思想**, 这样后面改数据,就可以驱动页面
3. 对于样式组合需要做很多调整,这次只是了解下该门技术

总结下:
这块东西是之前想看的, 但是案例
的东西就是一个了解, 如果是工作还是直接使用
echarts/ antv,v-echarts这种插件来进行快速开发
应用场景就是, 以后如果要做数据可视化发展,
智慧大屏方面的,  这块的原理就需要了解了,
对比起来手绘出来的比较好看,是原理,  实用性上还是直接插件吧

文章参考:

https://blog.csdn.net/happy_programer/article/details/119784845