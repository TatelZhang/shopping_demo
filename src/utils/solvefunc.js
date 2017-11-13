
// 时间处理函数
function getTime(time){
    var a = new Date();
    var b = new Date(time);
    var o;
    // console.log(a);
    var c = a - b;
    if(c/1000 <= 60){
        o = Math.round(c/1000); 
        return (o+ " 秒前");
    }else if(c/1000/60 <60){
        o = Math.round(c/1000/60);
        return (o + "分钟前");
    }else if(c/1000/60/60 < 24){
        o = Math.round(c/1000/60/60);
        return (o + "小时前");
    }else if(c/1000/60/60/24 < 30){
        o = Math.round(c/1000/60/60/24);
        return (o + "天前");
    }else if(c/1000/60/60/24/30 <12){
        o = Math.round(c/1000/60/60/24/30);
        return (o + "个月前");
    }else{
        o = Math.round(c/1000/60/60/24/30/12);
        return (o + "年前");
    }
};

// 制作分页
function makepage(curr_page, tab){
    var page_list = [];
    if(curr_page<=3){
        for(var i=1; i<6; i++){
            if(curr_page===i){
                page_list.push({
                    index: i,
                    page_path: ""
                });
            }else{
                page_list.push({
                index: i,
                page_path: `/?tab=${tab}&page=${i}`
            });
            }
        }
        page_list.push({
            index: "...",
            page_path: ""
        });
    }else if(curr_page>3){
        for(var i=curr_page-3; i<=curr_page+3; i++){
            if(curr_page-3 ===i||curr_page+3===i){
                page_list.push({
                    index: "...",
                    page_path:""
                });
            }else if(curr_page === i){
                page_list.push({
                    index: i,
                    page_path: ""
                });
            }else{
                page_list.push({
                    index: i,
                    page_path: `/?tab=${tab}&page=${i}`
                });
            }
        }
    }
    return page_list;
};

// 处理 /?k1=v1&k2=v2  返回 对象
function solve_search(str){
    /**
     * @str = /?k1=v1&k2=v2
     */
    var search_k_v = {};
    var get_string = str.split('?')[1];  // k1=v1&k2=v2
    var k_v = get_string.split("&");
    for(var item of k_v){
        item = item.split("=");
        search_k_v[item[0]] = item[1];
    }
    return search_k_v;

};

// ajax 异步请求方法
function do_ajax(url){
    return new Promise(function(solve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    solve(xhr.response);
                }else{
                    reject(xhr.status);
                }
            }
        }
    });
}

export default{
    getTime: getTime,
    makepage: makepage,
    solvekey: solve_search,
    doajax: do_ajax
}