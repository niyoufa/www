
$(function(){

    //格式化字符串
    String.format = function(src){
        if (arguments.length == 0) return null;
        var args = Array.prototype.slice.call(arguments, 1);
        return src.replace(/\{(\d+)\}/g, function(m, i){
            return args[i];
        });
    };

    pager = null;//分页字段
    tag_select = '<select class="tag" style="float:right;"><option value="0">标签</option><option value="1">python</option></select>'

    var my_share_list_url = "http://localhost:8500/api/link/list" ;
    var root_url = "http://localhost:8500" ;

    var query_params = {};
    query_params["page"] = 1;
    getMyShares(query_params);

    $("#mid .newbie-app button").click(function(){
        alert("敬请期待！");
    });

    $("#mid .search button").click(function(){
        searchMyShare(1);
    });

    function getMyShares(query_params){
        $.get(my_share_list_url,query_params,function(data){
            if(data["response"]["success"] != 1){
                alert(data["response"]);
                return;
            }else{
                links = data["response"]["data"];
                pager = data["response"]["pager"];
                initPageUI(pager);
                console.log(pager);
                $("#mid .articels").empty();
                for(var i=0,len=links.length;i<len;i++){
                    $("#mid .articels").append(String.format(''+
                        '<div class="articel">'+
                            '<h5 style="display:none;">{3}</h5>'+
                            '<a href={0} target="blank"><span class="title">{1}</span></a>'+tag_select+
                            '<br>'+
                            '<span class="source">{2}</span>'+
                        '</div>'
                    ,links[i]["href"],links[i]["title"],links[i]["source"],links[i]["_id"]))
                }

                $(".articel .title").click(function(){
                    var _id = $(this).parents(".articel").find("h5").text();
                    $.get(root_url + "/api/link/count",{"_id":_id},function(data){
                        if(data["response"]["success"] != 1){
                            alert(data["response"]);
                            return;
                        }else{
                            return;
                        }
                    },"json");
                });

                $(".tag").change(function(){
                    alert("tag");
                });
            }
        });
    }

    function initPageUI(){
        if(pager["enable"] == true){
            if(pager["page"] == 1){
                $(".pre").attr("disabled","block");
            }else{
                $(".pre").removeAttr("disabled");
            }
            if(pager["has_more"] == false){
                $(".next").attr("disabled","block");
            }else{
                $(".next").removeAttr("disabled");
            }
            $("#pagination").show();
        }else{
            $("#pagination").hide();
        }
    }

    function searchMyShare(page){
        var keyword = $("#mid .search input").val();
        var query_params = {}
        query_params["keyword"] = keyword;
        query_params["page"] = page;
        getMyShares(query_params);
    }

    $(".pre").click(function(){

        if(pager["page"] >= 1){
            searchMyShare(pager["page"]-1);
        }
    });

    $(".next").click(function(){
        if(pager["has_more"]){
            searchMyShare(pager["page"]+1);
        }
    });

    $("#mid .search input").blur(function(){
        searchMyShare(1)
    });

});