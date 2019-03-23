export default {
	//home导航
	home:[
    		{
    			i:"fa fa-instagram",
    			name:"电影",
    			tolink:"/",
    			color:true
    		},
    		{
    			i:"fa fa-th",
    			name:"影院",
    			tolink:"/home/cinema",
    			color:false
    		},
    		{
    			i:"fa fa-shopping-basket",
    			name:"特惠",
    			tolink:"/home/shop",
    			color:false
    		},
    		{
    			i:"fa fa-user-o",
    			name:"我的",
    			tolink:"/home/user",
    			color:false
    		}
    ],
	//home/index数据
	pic:[
			{
				url:require('../../assets/img/lb/one1.png')
			},
			{
				url:require('../../assets/img/lb/two.png')
			},
			{
				url:require('../../assets/img/lb/three.png')
			},
			{
				url:require('../../assets/img/lb/four.png')
			},
			{
				url:require('../../assets/img/lb/five.png')
			},
			{
				url:require('../../assets/img/lb/six.png')
			}
	],
	//home/index/正在热播
	now: [
		{
			id:'0',
			url: require('../../assets/img/now/bxmy/13acbd020f39eeca87d03c620120954b.jpg'),
			yy:[require('../../assets/img/now/bxmy/yy/006b1f4ac19e7b7d7dfa233a4b2276a8.jpg'),require('../../assets/img/now/bxmy/yy/f70e6cc421fb793604f4c3cb0f3a1e18.jpg'),require('../../assets/img/now/bxmy/yy/7a9ba02d40e070438d48e942d2535ea7.jpg'),require('../../assets/img/now/bxmy/yy/6ab3766b4765cfa828c44aa57e9de76b.jpg')],
			banner:require('../../assets/img/now/bxmy/bd0f64f3f9bba1b7f16730ad23796493.jpg'),
			name: "波西米亚狂想曲",
			type: "剧情|音乐|传记",
			score: '8.6',
			act: ['布莱恩·辛格', '拉米·马雷克', '本·哈迪', '约瑟夫·梅泽罗'],
			country: "英国  美国",
			duration: "135",
			release:'2019-03-22',
			summary:'本片是对皇后乐队、传奇主唱弗雷迪·莫库里以及他们音乐的致敬盛宴，这是一段充满爱、痛苦、接纳和音乐的旅程。　　弗雷迪·莫库里（拉米·马雷克 饰）曾是希思罗机场的一名普通搬运工，对音乐满腔热血的他，与布莱恩·梅（格威利姆·李 饰）、罗杰·泰勒（本·哈迪 饰）、约 翰·迪肯（约瑟夫·梅泽罗 饰）组成皇后乐队。这个殿堂级乐队的从无到有，从疏离到重聚，从低谷到巅峰，仿佛就是弗雷迪一生的缩影。在最后的日子里，弗雷迪做了生命中最重要的决定——在音乐史上最伟大的“拯救生命”大型摇滚乐演唱会上，将所有热血付诸于歌声。',
			dimensional:'2D'
		},
		{
			id:'1',
			url: require('../../assets/img/now/djtc/544ae35bd95772d6b295b4c31af55131.jpg'),
			banner:require('../../assets/img/now/djtc/221b4f8e0bbc227fa59ed8ed2956ad1b.jpg'),
			yy:[require('../../assets/img/now/djtc/yy/3dc888f126aa09eb029c574ec4aa3277.jpg'),require('../../assets/img/now/djtc/yy/a93cf57cd306994db0b0e1a60082bae4.jpg'),require('../../assets/img/now/djtc/yy/096335268664820e48ad41d2a73e4114.jpg'),require('../../assets/img/now/djtc/yy/df1fa774ef74a2481051e55a3101bb8d.jpg'),require('../../assets/img/now/djtc/yy/be41e58fd97a3cc279f9cbc8c86b7ae7.jpg')],
			name: "地久天长",
			type: "剧情|家庭",
			score: '7.9',
			act:['王景春','咏梅','齐溪','杜江','王源 '],
			country: "中国大陆",
			duration: "175",
			release:'2019-03-22',
			summary:'影片讲述患难与共的两个家庭因为一场有隐情的意外被迫疏远，他们在时代洪流下历尽伤痛与不安，人生起伏跌宕，最终选择面对真相，坦荡向前的故事。　　年轻的刘耀军和沈英明两家人本是挚友，两家儿子沈浩和刘星在郊外嬉戏中，耀军的儿子刘星意外身亡，此事彻底改变了两家人的命运。刘家夫妇远赴南方。多年后，容颜已老的他们再次相聚，隐藏的真相终将因为年轻一代人的坦荡而揭开。岁月流逝，生命滚滚向前……',
			dimensional:'2D'
		},
		{
			id:'2',
			url: require('../../assets/img/now/lsh/85f4fc27c6b90d7e84295e115837728b.jpg'),
			banner:require('../../assets/img/now/lsh/cc8f853de2924d92439c06c5786d35d9.jpg'),
			yy:[require('../../assets/img/now/lsh/yy/51eda8cf5f7fb2d29edd5f6fcc0ac1cb.jpg'),require('../../assets/img/now/lsh/yy/dd42533278f342136ccce2b6d651a5e4.jpg'),require('../../assets/img/now/lsh/yy/273e6c2dbdec02af36ccabf6b55a75eb.jpg'),require('../../assets/img/now/lsh/yy/41577fcbf7511dbc8c6432d380674dd2.jpg'),require('../../assets/img/now/lsh/yy/240fcd0be7f7e51a82f52dbdb74991b3.jpg')],
			name: "老师·好",
			type: "剧情",
			score: '7.0',
			act:['于谦','汤梦佳','秦鸣悦','王广源','孙艺杨'],
			country: "中国大陆",
			duration: "100",
			release:'2019-03-22',
			summary:'1985年的南宿一中，苗宛秋老师推自行车昂首走在校园，接受着人们艳羡的目光和纷至沓来的恭维。桀傲不驯的洛小乙、温婉可人的安静、新潮前卫的关婷婷、大智若愚的脑袋、舞痴兄弟文明建设、八婆海燕、奸商耗子……三班是一个永远也不缺故事的集体。苗宛秋怎么也不会想到，他即将走进的这个三班将会成为他以及他身边这辆自行车的噩梦。三班的同学也没有想到，这位新来的老师改变了他们的一生。',
			dimensional:'2D'
		},
		{
			id:'3',
			url: require('../../assets/img/now/kbxs/e539ae100e5703d83b3913a405892ff4.jpg'),
			banner:require('../../assets/img/now/kbxs/6ea8e9b2197117833242195ba4b1589b.jpg'),
			yy:[require('../../assets/img/now/kbxs/yy/86972c7db43d79a609352d7ecb59ffbf.jpg'),require('../../assets/img/now/kbxs/yy/0ed0cdb8125b94b72973fcaba8d7d258.jpg'),require('../../assets/img/now/kbxs/yy/7b5cba5e8edf4daeb11763a2165d7ce0.jpg'),require('../../assets/img/now/kbxs/yy/7663b1515d6c6f77f5c7898d518b3cf2.jpg')],
			name: "狂暴凶狮",
			type: "喜剧|惊悚",
			score: '7.2',
			act:['迪克·麦斯 ','索菲·范·德温 ','艾比·侯斯','布里特·拉格尔'],
			country: "荷兰",
			duration: "105",
			release:'2019-03-22',
			summary:'在阿姆斯特丹，警方发现了被残忍杀害的一家人的尸体，警方对此案一时之间毫无头绪。但是阿姆斯特丹动物园的兽医Lizzie通过伤口怀疑这应该是一只大型的狮子所为。但最初Lizzie的猜测并没有受到警方的重视，直到越来越多的受害者以相同的方式被杀害，毫无疑问阿姆斯特丹已经成为了一位捕食者的狩猎场。警方指派猎人Jack和Lizzie一起对行凶的狮子进行追捕，而Lizzie的男友，一位电视台记者也在跟踪报道此案，Lizzie除了追查狮子的下落还担忧着男友的安全，而此时的狮子已经饥饿难忍……',
			dimensional:'2D'
		}
	]
};
