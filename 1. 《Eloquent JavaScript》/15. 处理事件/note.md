# 学习笔记

## 15.1 事件处理程序

* 好的机制是系统在事件发生时主动通知我们的代码。浏览器通过允许我们将函数注册为特定事件的处理程序来实现此目的
* window绑定指向浏览器提供的一个内置对象，它表示包含文档的浏览器窗口。调用其addEventListenner方法会注册第一个参数描述的事件发生时的第二个参数

## 15.2 事件和DOM节点

* 每个浏览器事件处理程序都在上下文中注册
* 在window对象上调用的addEventListenner方法，也可以在DOM元素和一些其他类型的对象上找到。
* 大多数类型的事件，可以通过名称为事件名前面加on的属性附加处理程序。但是一个节点只能有一个onclick属性，而addEventListenner方法允许你添加任意数量的处理程序
* removeEventListenner方法，用于删除处理程序

## 15.3 事件对象

* 事件处理函数传递了一个参数：事件对象。此对象包含有关该事件的其他信息
* 存储在事件对象中的信息因事件类型而异
* 对象的type属性始终包含标识事件的字符串，例如："click"或"mousedown"

## 15.4 传播

* 对于大多数事件类型，如果某节点具有子节点，那么在此节点上注册的处理程序也将接收在其子节点中发生的事件
* 事件向外传播：从它发生的节点向该节点父节点和文档的根目录传播
* 更具体的处理程序会首先执行，在特定节点上注册的所有处理程序都已经轮到后，在整个窗口注册的处理程序才有机会响应该事件
* 在任何时候，某个事件处理程序都可以在事件对象上调用stopPropagation方法，以防止其他处理程序进一步接收此事件
* 大多数事件对象都有一个target属性，此属性引用它们所源自的节点。可以使用此属性来确保你不会意外地处理你不想处理的节点的内容
* 也可以使用target属性为特定类型的事件构建大范围的处理网络，target属性的常用属性包括：
  * target.id
  * target.tagName
  * target.nodeName
  * target.classList
  * target.className
  * target.innerHTML
  * target.innerText
  * target.getAttribute

## 15.5 默认操作

* 许多事件都有与之关联的默认操作。对于大多数类型的事件，在默认行为发生之前会调用JavaScript事件处理程序。如果处理程序不希望发生这种常规行为，它可以在事件对象上调用preventDefault方法
* 根据浏览器的不同，某些事件根本无法截获

## 15.6 按键事件

* 当按下键盘上的键时，浏览器会触发"keydown"事件。当它被释放时，得到一个"keyup"事件
* "keydown"事件在按下按钮并保持时，可能会触发很多次
* 事件对象的key属性包含一个字符串，对于大多数键，该字符串对应按下该键时所键入的内容。
* 修改键，如SHIFT、CTRL、ALT和meta（Mac上的COMMAND），通过查看事件shiftkey、ctrlkey、altkey和metakey属性来确定这些键是否被按下
* 使用event.keyCode：
  * keycode 8 = BackSpace BackSpace
  * keycode 9 = Tab Tab
  * keycode 12 = Clear
  * keycode 13 = Enter
  * keycode 16 = Shift_L
  * keycode 17 = Control_L
  * keycode 18 = Alt_L
  * keycode 19 = Pause
  * keycode 20 = Caps_Lock
  * keycode 27 = Escape Escape
  * keycode 32 = space space
  * keycode 33 = Prior
  * keycode 34 = Next
  * keycode 35 = End
  * keycode 36 = Home
  * keycode 37 = Left
  * keycode 38 = Up
  * keycode 39 = Right
  * keycode 40 = Down
  * keycode 41 = Select
  * keycode 42 = Print
  * keycode 43 = Execute
  * keycode 45 = Insert
  * keycode 46 = Delete
  * keycode 47 = Help
  * keycode 48 = 0 equal braceright
  * keycode 49 = 1 exclam onesuperior
  * keycode 50 = 2 quotedbl twosuperior
  * keycode 51 = 3 section threesuperior
  * keycode 52 = 4 dollar
  * keycode 53 = 5 percent
  * keycode 54 = 6 ampersand
  * keycode 55 = 7 slash braceleft
  * keycode 56 = 8 parenleft bracketleft
  * keycode 57 = 9 parenright bracketright
  * keycode 65 = a A
  * keycode 66 = b B
  * keycode 67 = c C
  * keycode 68 = d D
  * keycode 69 = e E EuroSign
  * keycode 70 = f F
  * keycode 71 = g G
  * keycode 72 = h H
  * keycode 73 = i I
  * keycode 74 = j J
  * keycode 75 = k K
  * keycode 76 = l L
  * keycode 77 = m M mu
  * keycode 78 = n N
  * keycode 79 = o O
  * keycode 80 = p P
  * keycode 81 = q Q at
  * keycode 82 = r R
  * keycode 83 = s S
  * keycode 84 = t T
  * keycode 85 = u U
  * keycode 86 = v V
  * keycode 87 = w W
  * keycode 88 = x X
  * keycode 89 = y Y
  * keycode 90 = z Z
  * keycode 96 = KP_0 KP_0
  * keycode 97 = KP_1 KP_1
  * keycode 98 = KP_2 KP_2
  * keycode 99 = KP_3 KP_3
  * keycode 100 = KP_4 KP_4
  * keycode 101 = KP_5 KP_5
  * keycode 102 = KP_6 KP_6
  * keycode 103 = KP_7 KP_7
  * keycode 104 = KP_8 KP_8
  * keycode 105 = KP_9 KP_9
  * keycode 106 = KP_Multiply KP_Multiply
  * keycode 107 = KP_Add KP_Add
  * keycode 108 = KP_Separator KP_Separator
  * keycode 109 = KP_Subtract KP_Subtract
  * keycode 110 = KP_Decimal KP_Decimal
  * keycode 111 = KP_Divide KP_Divide
  * keycode 112 = F1
  * keycode 113 = F2
  * keycode 114 = F3
  * keycode 115 = F4
  * keycode 116 = F5
  * keycode 117 = F6
  * keycode 118 = F7
  * keycode 119 = F8
  * keycode 120 = F9
  * keycode 121 = F10
  * keycode 122 = F11
  * keycode 123 = F12
  * keycode 124 = F13
  * keycode 125 = F14
  * keycode 126 = F15
  * keycode 127 = F16
  * keycode 128 = F17
  * keycode 129 = F18
  * keycode 130 = F19
  * keycode 131 = F20
  * keycode 132 = F21
  * keycode 133 = F22
  * keycode 134 = F23
  * keycode 135 = F24
  * keycode 136 = Num_Lock
  * keycode 137 = Scroll_Lock
  * keycode 187 = acute grave
  * keycode 188 = comma semicolon
  * keycode 189 = minus underscore
  * keycode 190 = period colon
  * keycode 192 = numbersign apostrophe
  * keycode 210 = plusminus hyphen macron
  * keycode 211 =
  * keycode 212 = copyright registered
  * keycode 213 = guillemotleft guillemotright
  * keycode 214 = masculine ordfeminine
  * keycode 215 = ae AE
  * keycode 216 = cent yen
  * keycode 217 = questiondown exclamdown
  * keycode 218 = onequarter onehalf threequarters
  * keycode 220 = less greater bar
  * keycode 221 = plus asterisk asciitilde
  * keycode 227 = multiply division
  * keycode 228 = acircumflex Acircumflex
  * keycode 229 = ecircumflex Ecircumflex
  * keycode 230 = icircumflex Icircumflex
  * keycode 231 = ocircumflex Ocircumflex
  * keycode 232 = ucircumflex Ucircumflex
  * keycode 233 = ntilde Ntilde
  * keycode 234 = yacute Yacute
  * keycode 235 = oslash Ooblique
  * keycode 236 = aring Aring
  * keycode 237 = ccedilla Ccedilla
  * keycode 238 = thorn THORN
  * keycode 239 = eth ETH
  * keycode 240 = diaeresis cedilla currency
  * keycode 241 = agrave Agrave atilde Atilde
  * keycode 242 = egrave Egrave
  * keycode 243 = igrave Igrave
  * keycode 244 = ograve Ograve otilde Otilde
  * keycode 245 = ugrave Ugrave
  * keycode 246 = adiaeresis Adiaeresis
  * keycode 247 = ediaeresis Ediaeresis
  * keycode 248 = idiaeresis Idiaeresis
  * keycode 249 = odiaeresis Odiaeresis
  * keycode 250 = udiaeresis Udiaeresis
  * keycode 251 = ssharp question backslash
  * keycode 252 = asciicircum degree
  * keycode 253 = 3 sterling
  * keycode 254 = Mode_switch
* 按键事件发生的DOM节点取决于按下键时具有的焦点的元素，除非你给他们一个tabindex属性，否则绝大多数节点都不能有焦点
* 当用于键入文本是，使用按键事件来确定键入的内容是有问题的
* 可以键入的元素，例如：` <input>、<textarea> `，会在用户更改其内容时触发"input"事件。要获取键入的实际内容，最好从获得焦点的域直接读取它

## 15.7 指针事件

* 鼠标点击：
  * 按下鼠标按钮会触发许多事件："mousedown"、"mouseup"在按下和释放时触发。在"mouseup"事件之后，"click"事件将在包含按下和释放按钮的最特定节点上触发
  * 如果两次单机发生在一起，则在第二次单击事件后，"dblclick"（双击）事件触发
  * 要获得有关鼠标事件发生位置的精确信息，可以查看其clientX、clientY属性（相对于窗口左上角，以像素为单位的事件坐标），也可以查看pageX、pageY属性（相对于整个文档的左上角）
* 鼠标移动：
  * 每次鼠标移动都会触发"mousemove"事件，此事件可用于跟踪鼠标的位置，在实现某种形式的鼠标拖动功能时会经常用到这个事件
  * event.buttons（注意复数），告诉我们当前按下的按钮：0时没有按下按钮。按住按钮时其值是按钮代码总和（左键代码1，右键代码2，中间键代码4）。注意和event.button（没有复数）的区别
* 触摸事件：
  * 触摸交互触发特定事件类型
  * 开始触摸屏幕时"touchstart"
  * 在触摸时移动时"touchmove"
  * 停止触摸时"touchend"
  * 许多触摸屏可以同时检测多根手指，所以这些事件没有与它们相关联的单个坐标集。相反，它们的事件对象具有touches属性，此属性包含一个类似于数组的点对象，每个对象都有自己的clientX、clientY、pageX、pageY属性

## 15.8 滚动事件

* 每当滚动一个元素时，就会触发一个"scroll"事件
* 在滚动事件上调用preventDefault不会阻止滚动发生。实际上，只有在滚动发生后才会调用事件处理程序

## 15.9 焦点事件

* 当元素获得焦点时，浏览器会在其上触发"focus"事件
* 当元素失去焦点时，会出现"blur"事件
* "focus"和"blur"事件都不会传播

## 15.10 加载事件

* 页面完成加载后，"load"事件将在窗口和文档正文对象上触发。这通常用于安排需要构建整个文档的初始化操作
* 注意，遇到` <script> `标签时会立即运行标签的内容，这可能会太早了
* 加载外部文件的图像和脚本标签等元素也有一个"load"事件，指示它们引用的文件已加载
* 与焦点相关的事件一样，加载事件不会传播
* 当页面关闭或移开时，会发生"beforeunload"事件，此事件的主要用途是通过关闭文档来防止用户意外丢失工作成果
* 防止页面被关闭不是使用preventDefault方法完成的，它是通过从处理程序返回非空值来完成的。当你这样做的时候，浏览器将向用户显示一个对话框，询问是否确定要离开页面

## 15.11 事件和事件循环

* 在事件循环的上下文中，浏览器事件处理程序的行为与其他异步通知相同。它们的事件发生时进行调度，但必须等待正在运行的其他脚本运行完才能运行
* 真的想要在后台做一些耗时的事情而不冻结页面，浏览器提供了一个叫做Web worker的东西。worker是一个JavaScript进程，它在自己的时间轴上与主脚本一起运行
* 为了避免有多个线程接触相同数据的问题，worker不会与主脚本的环境共享其全局范围或任何其他数据。必须通过来回发送消息与它们进行通信，postMessage函数发送一条消息，该消息使得"message"事件在接收器中触发
* 创建工作程序的脚本通过Worker对象发送和接收消息，而工作程序通过直接在其全局范围上发送和监听来与创建它的脚本进行通信
* 只有可以表示为JSON的值才能作为消息发送，另一方将接收到它们的副本而不是值本身

## 15.12 计时器

* 通过setTimeout函数安排一个在给定毫秒数之后调用的另一个函数，若需要取消已安排的功能，通过存储setTimout返回的值并在其上调用clearTimeout来完成
* cancelAnimationFrame函数的工作方式与clearTimeout相同，在requestAnimationFrame返回值上调用它将取消该帧（假设它尚未被调用）
* setInterval和clearInterval用于设置应该每X毫秒重复一次的定时器

## 15.13 限频

* 某些类型的事件有可能连续多次快速触发（例如："mousemove"、"scroll"）。在处理此类事件时，必须小心不要做太费时间的事情
* 如果确实需要在这样的处理程序中做一些非常重要的事情，你可以使用setTimeout来确保它不会太过频繁触发。这通常被称为对此事件限频（debouncing）
