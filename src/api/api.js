import axios from "./request"
// 获取渠道列表
export const getChannelList = () => {
    return axios({
        url: "/classification/treeList/",
        method: "post",
        data: {}
    })
}
// 根据昵称和平台搜索评论内容
export const getSearchComment = (params) => {
    return axios({
        url: "/searchComment/",
        method: "post",
        data: params
    })
}