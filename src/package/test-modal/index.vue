<!--
 * @Author: liuxiaoni
 * @Date: 2022-07-05 11:05:34
 * @LastEditors: liuxiaoni
 * @LastEditTime: 2022-07-05 17:36:40
 * @Description: 
-->
<template>
  <div class="modal"
       v-if="visible">
    <div class="modal__marsk">
      <div class="modal__content">
        <div class="modal__content--title">
          <slot name="title">
            <h1>提示</h1>
          </slot>
        </div>
        <div class="modal__content--body">
          <slot name="body">
            <p>是否删除?</p>
          </slot>
        </div>
        <div class="modal__content--footer">
          <slot name="footer">
            <button class="primary" @click="comfirm">确定</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
     name:"modal",//组件名
    //属性校验模式
    props: {
      visible: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    methods: {
      comfirm() { //点击确定按钮的时候发射事件出去
        this.$emit('on-hidden')
      }
    }
}
</script>


<style  >
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .modal__marsk {
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal__content {
    width: 300px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
  }

  .modal__content div {
    margin: 20px 0;
  }
  .primary {
    outline: none;
    border: 0;
    width: 150px;
    height: 30px;
    background: linear-gradient(90deg, #1596fb, #002dff);
    border-radius: 0.28571429rem;
    display: block;
    color: #fff;
    cursor: pointer;
  }

</style>
