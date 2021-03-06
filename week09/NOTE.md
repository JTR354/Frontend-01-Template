# 第9周学习记录

## [CSS Property(作业地址)](https://www.processon.com/view/link/5eccafdd1e08530a9b1f1d3d)

## 动画与绘制
### Animation
- @keyframes定义
- animation使用
  + animation-name 时间曲线
  + animation-duration 动画的时长
  + animation-timing-function 动画的时间曲线
  + animation-delay 动画开始前的延迟
  + animation-iteration-count 动画的播放次数
  + animation-direction 动画的方向
### Transition
- transition使用
  + transition-property 要更变换的属性
  + transition-duration 变换的时长
  + transition-timing-function 时间曲线
  + transition-delay 延迟

### cubic-bezier

- [webgl教程](https://webglfundamentals.org/)
- [openGL教程](https://learnopengl-cn.github.io/)
- [贝赛尔曲线](https://cubic-bezier.com/)

## 渲染与颜色
### 颜色
- CMYK与RGB
- HSL与HSV
### 形状
- border
- box-shadow
- border-radius
- data uri+svg


## HTML

### HTML定义: XML与SGML
- [DTD](http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd)
- [namespace](http://www.w3.org/1999/xhtml)
### HTML标签-语义
- [tree-construction](https://html.spec.whatwg.org/multipage/parsing.html#tree-construction)
### HTML语法
#### 合法元素
- Element: <tagname>...</tagname>
- Text: text
- Comment: <!--comments-->
- DocumentType: <!Doctype html>
- ProcessingInstruction: <?a 1?>
- CDATA: <![CDATA[]]>


[ProcessingInstruction](https://www.w3school.com.cn/xmldom/dom_processinginstruction.asp)

[CDATA](https://www.w3school.com.cn/xml/xml_cdata.asp)
术语 CDATA 指的是不应由 XML 解析器进行解析的文本数据（Unparsed Character Data）。

```
/**
所有 XML 文档中的文本均会被解析器解析。
只有 CDATA 区段（CDATA section）中的文本会被解析器忽略。
*/
<script>
<![CDATA[
function matchwo(a,b)
{
if (a < b && a < 0) then
  {
  return 1;
  }
else
  {
  return 0;
  }
}
]]>
</script>
```

#### 字符引用
- \&#161; 【&#161;】
- \&amp; 【&amp;】
- \&lt; 【&lt;】
- \&gt; 【&gt;】
- \&quot; 【&quot;】
- \&apos; 【&apos;】

### DOM
#### Node节点
- Node
  + Element: 元素型节点,跟标签相对应
    - HTMLElement
    - SVGElement
  + Document: 文档根节点
  + CharacterData: 字符数据
    - Text文本节点
      + CDATASection: CDATA节点
    - Comment:注解
    - ProcessingInstruction: 处理信息
  + DocumentFragment: 文档判断
  + DocumentType: 文档类型

#### 导航类操作
- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling

#### 修改类操作
- appendChild
- insertBefore
- removeChild
- replaceChild

`tips: DOM节点默认只有一个父节点，如果一个节点被2次插入到其他元素之下，会自动把第一次的remove掉`
`tips: 修改操作会实时改变导航类API中的结果`

#### 高级操作
- compareDocumentPosition 是一个用于比较两个节点中关系的函数
- contains 检查一个节点是否包含另一个节点的函数
- isEqualNode 检查两个节点是否完全相同,(每个子节点是否完全一样)
- isSameNode 检查两个节点是否是同一个几点,实际上在JavaScript中可以用"==="
- cloneNode 复制一个节点,如果传入参数true,则会连同子元素做深拷贝

### Event
- 捕获
- 冒泡

## Browser API
- DOM
  + DOM Tree
  + Events
  + Range
  + Traversal (废弃)
- CSSOM
- BOM
- Web Animation
- Crypto
- ...