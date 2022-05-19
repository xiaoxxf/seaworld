<template>
<div class="exchangebox">
    <div class="bottombox">
        <p class="connect">Please connect to a Wallet.</p>
        <button class="unlockbtn" @click="connectionMetemask">Content</button>
    </div>
</div>
</template>

<script>
export default {
    name: "UnContent",
    data() {
        return {
            
        };
    },
    methods: {
        //ContentMetemask
        async connectionMetemask() {
            if (ethereum && ethereum.isMetaMask) {
                try {
                    const accounts = await ethereum.enable();
                } catch (error) {
                    console.log("error:user");
                }
            } else {
                //弹出相关提醒
                alert("please install metamask");
            }
        },
    },
};
</script>

<style scoped>
.homeSecond .topnav-show .exchangebox {
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    color: rgb(40, 13, 95);
    border-radius: 24px;
    margin: auto;
    padding: 20px 0px;
}

.homeSecond .topnav-show .exchangebox .topbox {
    display: inline-flex;
    width: 100%;
    border-bottom: 1px solid rgb(231, 227, 235);
    padding-bottom: 20px;
}

.homeSecond .topnav-show .exchangebox .topbox .left_swap {
    flex: 5;
    text-align: left;
    padding-left: 20px;
}

.homeSecond .topnav-show .exchangebox .topbox .right_swap {
    flex: 1;
    text-align: right;
    padding-right: 20px;
}

.homeSecond .topnav-show .exchangebox .bottombox {}

.homeSecond .topnav-show .exchangebox .bottombox .panel {
    border-radius: 16px;
    background-color: rgb(238, 234, 244);
    box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
    margin: 20px;
    text-align: left;
    padding: 20px;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel p {
    display: inline-block;
    width: 100%;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .inquidityInput {
    display: inline-flex;
    width: 100%;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .inquidityInput input {
    display: inline-block;
    flex: 1;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .inquidityInput .right {
    display: inline-block;
    width: 100%;
    flex: 5;
    text-align: right;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .bal {
    font-size: 15px;
    color: #606266;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .bal span {
    color: rgb(213, 0, 102);
    cursor: pointer;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .left {
    float: left;
    outline: none;
    border: none;
    background-color: rgb(255 255 255 / 0%);
    font-size: 16px;
    color: rgb(40, 13, 95);
    line-height: 36px;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .right {
    cursor: pointer;
    float: right;
}

.homeSecond .topnav-show .exchangebox .bottombox .slideper {
    padding: 20px;
}

.homeSecond .topnav-show .exchangebox .bottombox .slideper span:first-child {
    float: left;
}

.homeSecond .topnav-show .exchangebox .bottombox .slideper span:last-child {
    float: right;
    color: rgb(31, 199, 212);
}

.homeSecond .topnav-show .exchangebox .bottombox .aprove {
    display: inline-flex;
    width: 100%;
}

.homeSecond .topnav-show .exchangebox .bottombox .aprove button {
    flex: 1;
}

.homeSecond .topnav-show .exchangebox .bottombox .unlockbtn {
    margin: 20px;
    background-color: rgb(31, 199, 212);
    color: white;
    width: 100%;
    border: none;
    outline: none;
    padding: 0px 24px;
    background-color: rgb(31, 199, 212);
    color: white;
    width: 94%;
    height: 48px;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 16px;
}

.homeSecond .topnav-show .exchangebox .bottombox .default {
    background-color: rgb(237, 238, 242);
    color: rgb(86, 90, 105);
}

.homeSecond .topnav-show .exchangebox .bottombox .red {
    background-color: rgb(253, 234, 241);
    color: rgb(213, 0, 102);
}

.homeSecond .topnav-show .exchangebox .bottombox .connect {
    padding: 60px;
}
</style>
