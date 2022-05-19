<template>
<!-- model弹窗 -->
<div class="popContainer" v-show="showAlert">
    <div class="setting">
        <div class="sc-jRQAMF sc-kHOZQx ffYIDR RVASu">
            <div class="sc-hmjpBu hpCsHe">
                <div class="sc-jRQAMF sc-gKckTs sc-eLwHGX iODQYo kNJaHk grCaBj">
                    <h2 color="text" class="sc-gsDJrp sc-iwjezw dPBltW dRvZwz">Settings</h2>
                </div>
                <span @click="closePanel()">
                    <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn">
                        <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" />
                    </svg>
                </span>
            </div>
            <div class="sc-jRQAMF sc-gKckTs sc-bTfYlY hrXjK kNJaHk bMvWcO">
                <div class="sc-jRQAMF sc-gKckTs sc-bTfYlY iODQYo kNJaHk bMvWcO">
                    <div class="sc-hjGYWY gtCCOx settingBor">
                        <div font-size="20px" color="text" class="sc-gsDJrp jGdoGP">Transaction Settings</div>
                        <div class="sc-hjGYWY gtCCOx">
                            <div class="sc-hjGYWY kydmNG">
                                <div class="sc-jRQAMF sc-gjNGvZ sc-iqVVwt iODQYo bSFVWO fkPVeM">
                                    <div font-size="14px" color="text" class="sc-gsDJrp cgqpct">Slippage tolerance</div>
                                </div>
                                <div class="slider">
                                    <div class="block">
                                        <el-slider v-model="tradeSetting.spot" :step="10"></el-slider>
                                    </div>
                                </div>
                            </div>
                            <div class="sc-hjGYWY kydmNG">
                                <div class="sc-jRQAMF sc-gjNGvZ sc-iqVVwt iODQYo bSFVWO fkPVeM">
                                    <div font-size="14px" color="text" class="sc-gsDJrp cgqpct">Transaction deadline</div>
                                </div>
                                <div class="sc-jRQAMF sc-gjNGvZ sc-iqVVwt iODQYo bSFVWO fkPVeM">
                                    <input placeholder="20" scale="md" class="sc-kDThTU cnodLS" v-model="tradeSetting.minute" />
                                    <span>minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "steeingPop",
    data() {
        return {
            //暂时提示
            showAlert: false,
            //滑点
            tradeSetting: {
                spot: 10,
                minute: 20
            },
        }
    },
    methods: {

        openAlert() {
            this.showAlert = true;
        },
        // 关闭弹窗
        closePanel() {
            this.showAlert = false;
        },
    },

}
</script>

<style>
.popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: rgb(40, 13, 95);
    text-align: left;
}

.popContainer .setting .RVASu {
    overflow: hidden;
    background: rgb(255, 255, 255);
    -webkit-box-shadow: rgb(14 14 44 / 10%) 0px 20px 36px -8px,
        rgb(0 0 0 / 5%) 0px 1px 1px;
    border: 1px solid rgb(231, 227, 235);
    border-radius: 32px;
    z-index: 100;
    min-width: 320px;
    margin: auto;
    max-width: 600px;
    margin-top: 20%;
}

.popContainer .setting .dRvZwz {
    text-align: left;
}

.popContainer .setting .hpCsHe {
    -webkit-box-align: center;
    align-items: center;
    background: linear-gradient(111.68deg,
            rgb(242, 236, 242) 0%,
            rgb(232, 242, 246) 100%);
    border-bottom: 1px solid rgb(231, 227, 235);
    display: flex;
    padding: 12px 24px;
    margin-top: 0px;
}

.popContainer .setting .grCaBj {
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
}

.popContainer .setting .settingBor {
    padding: 30px 30px 50px 30px;
}

.popContainer .setting .tokenPair p {
    cursor: pointer;
}

.popContainer .setting .tokenWrap {
    padding: 10px 30px 50px 30px;
}



.hrLNMt {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}
.cOuJRo {
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.bSFVWO {
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.cnodLS {
  background-color: rgb(238, 234, 244);
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
  color: rgb(40, 13, 95);
  display: block;
  font-size: 16px;
  height: 40px;
  outline: 0px;
  padding: 0px 16px;
  width: 100%;
  margin-right: 10px;
}
.hxyIoS {
  display: inline-flex;
}
.jGdoGP,
.geCbln {
  color: rgb(40, 13, 95);
  font-weight: 600;
  line-height: 1.5;
  font-size: 20px;
}
.fkPVeM {
  width: fit-content;
}
</style>
