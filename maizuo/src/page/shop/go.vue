<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in list" :key="index"><img :src="item.img" alt=""></div>
            </div>
        </div>
        <div class="jg">
          <div class="jgz">
            <span class="sp1">￥</span><span class="sp2">9</span><span class="sp3">.9</span><span class="sp4">￥12.9</span>
          </div>
          <div class="jgy">
            <div class="count">已拼955件 · 2人成团</div>
            <div class="overdue">距结束：6天</div>
          </div>
        </div>
        <div class="master">小熊安迪卡通指甲钳</div>
        <div class="slave">轻巧便携 锋利耐用 加固轴头</div>
        <div class="zt">
          <div class="ztq">
            <span><i class="fa fa-check-circle-o fa-lg"></i>包邮</span>
            <span><i class="fa fa-check-circle-o fa-lg"></i>假一罚十</span>
            <span><i class="fa fa-check-circle-o fa-lg"></i>7天退换货</span>
          </div>
        </div>
        <div class="xx">
          <div class="xxx">
            规格:
            <span>x1</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="xx xx1">
          <div class="xxx">
            配送至:
            <span>请选择配送范围<span class="bt">(必填)</span></span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="zit">
          <span>—</span><span class="ziti">商品详情</span><span>—</span>
        </div>
        <div class="zhu">
          <div v-for="(item,index) in arr" :key="index">
            <img :src="item.img" alt="">
          </div>
        </div>
        <div class="zit">
          <span>—</span><span class="ziti">预定流程及须知</span><span>—</span>
        </div>
        <div class="dik">
          <img src="../../assets/img/ly/41.png" alt="">
        </div>




        <div class="bottom"></div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'
export default {
  data() {
    return {
      list:[
        {img:require('@/assets/img/ly/lun1.png')},
        {img:require('@/assets/img/ly/lun2.jpg')},
        {img:require('@/assets/img/ly/lun3.jpg')},
        {img:require('@/assets/img/ly/lun4.jpg')},
        {img:require('@/assets/img/ly/lun5.jpg')}
      ],
      arr:[
        {img:require('@/assets/img/ly/31.jpg')},
        {img:require('@/assets/img/ly/32.jpg')},
        {img:require('@/assets/img/ly/33.jpg')},
        {img:require('@/assets/img/ly/34.jpg')},
        {img:require('@/assets/img/ly/35.jpg')},
        {img:require('@/assets/img/ly/36.jpg')},
        {img:require('@/assets/img/ly/37.jpg')},
        {img:require('@/assets/img/ly/38.jpg')},
        {img:require('@/assets/img/ly/39.jpg')},
        {img:require('@/assets/img/ly/40.jpg')}
      ]
    }
  },
    mounted(){
	        var mySwiper = new Swiper('.swiper-container', {
	          autoplay:true,
	          loop:true
	        })
	    }
}
</script>
<style lang="scss">
	/*轮播设置*/
	.swiper-container{
		img{
			display: block;
			width: 100%;
		}
  }
  .swiper-slide{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .jg{
    width: 100%;
    display: flex;
    background: url("../../assets/img/ly/30.png") no-repeat;
    color: #fff;
    margin-bottom: .6rem;
    .jgz{
      display: inline-block;
      width: 50%;
      .sp1{
        margin-left: .2rem;
        font-size: .7rem;
        line-height: 1.65rem;
      }
      .sp2{
        font-size: .9rem;
        line-height: 1.65rem;
      }
      .sp3{
        font-size: .65rem;
        line-height: 1.65rem;
      }
      .sp4{
        font-size: .45rem;
        margin-left: .3rem;
        text-decoration: line-through;
      }
    }
    .jgy{
      text-align: right;
      display: inline-block;
      width: 50%;
      .count{
        padding-right: .3rem;
        font-size: .35rem;
        line-height: .82rem;
      }
      .overdue{
        padding-right: .3rem;
        font-size: .35rem;
        line-height: .83rem;
      }
    }
  }
  .master{
    font-size: .5rem;
    padding: 0 .5rem;
  }
  .slave{
    font-size: .4rem;
    color: #797d82;
    padding: 0 .5rem;
    margin-top: .3rem;
    padding-bottom: .5rem;
    border-bottom: .01rem #f4f4f4 solid;
  }
  .zt{
    font-size: 16px;
    width: 100%;
    border-bottom: .3rem solid #f4f4f4;
    .ztq{
      padding: .4rem;
      span{
        font-size: .4rem;
        margin-right: .5rem;
        i{
          font-size: .5rem;
          padding-right: .3rem;
          color: rgb(192, 49, 49);
        }
      }
    }
  }
  .xx{
    font-size: 16px;
    width: 100%;
    border-bottom: .01rem solid #f4f4f4;
    .xxx{
      padding: .3rem;
      font-size: .4rem;
      color: #999;
      span{
        margin-left: .5rem;
        color: #666;
      }
      i{
        float: right;
        line-height: .6rem;
      }
    }
  }
  .xx1{
    border-bottom: .5rem solid #f4f4f4;
    .xxx{
      span{
        .bt{
          color: #c03131;
        }
      }
    }
  }
  .zit{
    width: 100%;
    text-align: center;
    span{
      font-size: .4rem;
      color: #ccc;
    }
    .ziti{
      color: #999;
    }
  }
  .zhu{
    font-size: 16px;
    width: 100%;
    div{
      line-height: 0;
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
  .dik{
    width: 100%;
    img{
      width: 100%;
    }
  }




  .bottom{
    width: 100%;
    height: 1.45rem;
  }
</style>

