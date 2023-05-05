(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{284:function(t,e,a){"use strict";a.r(e);var _=a(14),r=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("stm32f407xx启动文件:startup_stm32f407xx.S，文件位于libraries\\STM32F4xx_HAL\\CMSIS\\Device\\ST\\STM32F4xx\\Source\\Templates\\gcc\\startup_stm32f407xx.s")]),t._v(" "),e("p",[t._v("本文主要参考两篇博客，感谢🤞")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/u010464679/article/details/52047609",target:"_blank",rel:"noopener noreferrer"}},[t._v("中容量STM32处理器启动代码的理解"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_33575901/article/details/103135465",target:"_blank",rel:"noopener noreferrer"}},[t._v("startup_stm32f407xx.s分析"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"_1-相关arm汇编指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-相关arm汇编指令"}},[t._v("#")]),t._v(" 1. 相关ARM汇编指令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("指令名称")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("指令作用")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("EQU")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("给数字常量取一个符号名，相当于C语言中的define")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("AREA")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("汇编一个新的代码段或者数据段")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("SPACE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("分配内存空间")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("PRESERVE8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("当前文件堆栈需按照8字节对齐")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("EXPORT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("声明一个具有全局属性的标号，可被外部文件使用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IMPORT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("声明一个来自外部文件的标号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DCD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("以字为单位分配内存，要求4字节对齐，并要求初始化这些内存")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("PROC")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("定义子程序，与ENDP成对使用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ENDP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表示子程序结束")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("WEAK")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("弱定义，如果外部文件定义了一个标号，则优先使用外部文件的标号，是ARM伪指令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ALIGN")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("编译器对指令或数据的存放地址进行对齐，缺省表示4字节对齐，是ARM伪指令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IF,ELSE,ENDIF")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("汇编条件分支语句，同C语言的类似")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("LDR")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("从存储器中加载字到一个寄存器中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("跳转到一个标号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("BL")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("跳转到由寄存器/标号给出的地址，并保存跳转前的下条指令至LR中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("BX")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("跳转到由寄存器/标号给出的地址，并根据寄存器的LSE确定处理器的状态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("BLX")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("跳转到由寄存器/标号给出的地址，并根据寄存器的LSE确定处理器的状态，同时保存跳转前的下条指令至LR中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("END")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("到达文件的末尾，文件结束")])])])]),t._v(" "),e("h2",{attrs:{id:"_2-startup-stm32f407xx-s"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-startup-stm32f407xx-s"}},[t._v("#")]),t._v(" 2. startup_stm32f407xx.s")]),t._v(" "),e("h3",{attrs:{id:"_2-1-文件概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-文件概要"}},[t._v("#")]),t._v(" 2.1 文件概要")]),t._v(" "),e("p",[t._v("首先，这个启动文件是针对基于GCC交叉编译工具链编译STM32F407xx系列设备的向量表，它的工作内容包括：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("设置初始的SP寄存器值")])]),t._v(" "),e("li",[e("p",[t._v("设置初始的PC寄存器值等于"),e("code",[t._v("Reset_Handler")])])]),t._v(" "),e("li",[e("p",[t._v("在没有特殊的"),e("code",[t._v("ISR(中断服务程序)")]),t._v("地址情况下，设置向量表入口")])]),t._v(" "),e("li",[e("p",[t._v("C库文件中由分支到主函数（最后调用了主函数）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("复位后，Cortex-M4处理器处于线程模式,此时处于特权的优先级，并且栈顶设置为主函数main\n")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);