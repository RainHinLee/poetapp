module.exports = [
	{
		title:"函数",
		body:[
			'形参不占用内存',
			'函数返回值以函数声明时指定的类型为准，数值类型自动转化为指定类型',
		]
	},
	{
		title:"内联函数",
		body:[
			'只有那些规模较小而又被频繁调用的简单函数,才适合于声明为inline 函数｡',
			"可以在声明函数和定义函数时同时写 inline,也可以只在其中一处声明 inline,效果相同,都能按内臵函数处理｡",
			"内联函数中不能包括复杂的控制语句,如循环语句和 switch 语句｡"
		]
	},	
	{
		title:"函数指针",
		body:[
			"函数指针声明：int (*fn1)(int);",
			"函数指针定义：fn1 = &handler;",
			"函数指针使用：(*fn1)(100)",
			"类成员函数指针声明：int (Person::*handler)(int);",
			"类成员函数指针定义：handler=&Person::func",
			"类成员函数指针定义：Person p; (p.*handler)(100)",
		]
	},
		
{
  title:"类常函数和常数据",
  body:[
		"常对象定义： Person const t1(12,34,46)",
		"常对象注意事项： 如果一个对象被声明为常对象，则不能调用该对象的非const型的成员函数(除了由系统自动调用的隐式的构造函数和析构函数)",
		"类常函数声明：void test() const;",
		"类常函数能被常对象调用，但只能访问常对象数据，不可修改常对象数据",
		"常成员函数可以引用const数据成员，也可以引用非const的数据成员。const数据成员可以被const成员函数引用，也可以被非const的成员函数引用",
		"常成员函数不能调用另一个非const成员函数。"
  ]
},	
	
{
  title:"类其他",
  body:[
		"类数组：Person person[2] = {Person(int,int),Person(int,int)}",
		"类拷贝构造函数声明： Person(Person const &p)",
		"指向常变量的指针变量可以指向const和非const型的变量，而指向非const，型变量的指针变量只能指向非const的变量。",
		"动态创建对象：Person *p; p = new Person(int,int);",
		"在执行new运算时，如果内存量不足，无法开辟所需的内存空间，返回一个0指针值",
		"类的数据成员中不能包括动态分配的数据",
		"类static成员函数不能使用this指针",
		"类static成员函数不能访问类非静态成员"
  ]
},	
{
  title:"友元函数",
  body:[
		"友元函数使用friend修饰",
		"友元函数可以访问类的私有成员",
		"类模板声明：template <class 类型参数名> class Person ",
		"函数模板声明： template <class 类型参数名> void function",
		"类模板使用： 类模板名<实际类型名> 对象名(实参表列);",
		"类模板外定义成员函数：template <class 虚拟类型参数>函数类型 类模板名<虚拟类型参数>::成员函数名(函数形参表列) {…}"
  ]
},

		
]


/*
{
  title:"",
  body:[
  ]
},
*/
