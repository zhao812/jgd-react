//获取首页用户数据
export const getHomeData = () => dispatch => {
    let url = "api/secIndex"
    console.log("getHomeData", helpAction)
    helpAction.fetchPosts("api/secIndex", url, {})

    // homeApi.getHomeData(data => {
    //     dispatch(receiveData(data))
    // })
}