$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay:true,

    });
    var newArray=
        ["验针机如何做到很强的抗干扰能力",
            "金属检测设备怎样检测食品上的金属残留",
            "检针机的工作频率要根据不同的产品而定",
            "检针机使用的特殊性在日常清洁的时候要注意些什么",
            "传输带式检针机校验工作的重要性以及校验的内容有哪些",
            "使用检针机准确的检测断针的过程中应该注意些什么",
            "服装企业对使用针的控制手段和原则以及具体的措施",
            "检针机的检测对针织物的进出口起着重要的作用",
            "操作检针机时有哪些具有要求",
            "如何保证检针机的正常运行",
            "成品衣物检查的重视程度要杜绝的一些现象",
            "正确使用手持式检针器可以有效的避免设备的损坏",
            "采用国外技术的检针机具有哪些产品特点",
            "平台式检针器可以用于家庭物品的金属检测使用",
            "连续式检针机的技术特点",
            "分享使用九点测试法进行检针机的校准工作的注意事项",
            "常见的检针机灵敏度的检测方法和步骤",
            "检针机使用的不当会影响正常的检测工作",
            "服装安全“卫士”检针机",
            "金属探测器的前世今生",
            "服装玩具厂关于断针记录表和验厂",
            "毛绒玩具生产要求及质量检验标准",
            "小小缝纫针可能引发贸易纠纷",
            "检针机在针织物整理工序中的应用",
            "几种处理检针机故障的方法",
            "金属探测器的原理与制作方法",
            "验针机的维护与保养？",
            "检针机常见故障？",
            "检针机在使用过程中常遇到情况？",
            "检针机保养",
            "日本国检测断针的标准！",
            "检针机怎样做到很强的抗干扰能力"
        ];
    var html="",page1="",page2="",page3="",page4="";
    for(var i=0;i<newArray.length;i++){
        html='<li><div><span><a href="detail.html">'+newArray[i]+'</a></span> </div> </li>';
         if(i<10){
             page1=page1+html;
         }else if(i<20){
             page2=page2+html;
         }else if(i<30){
             page3=page3+html;
         }else{
             page4=page4+html;
         }
    }

    $("#new-ul").html(page1);
    $("#page").on("click","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).html()==="1"){
            $("#new-ul").html(page1);
        }else  if($(this).html()==="2"){
            $("#new-ul").html(page2);
        }else  if($(this).html()==="3"){
            $("#new-ul").html(page3);
        }else  if($(this).html()==="4"){
            $("#new-ul").html(page4);
        }
    })
})
