<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type:text/html; charset=utf-8');
date_default_timezone_set("Asia/Shanghai");
?>

<div style="margin-top: 5px;">
  <div ng-click="toDetail(good._id)" ng-repeat="good in hots">
    <div>
      <img src="{{good.goods_img}}" width="100%">
    </div>
    <div class="row">
      <div class="col col-66">
        <h3 ng-bind="good.goods_brief"></h3>
        <div>
          <i style="color: #838383;float: left">规格:{{good.specs}}</i>
          <b style="color: #d85d70;float: right;margin-right: 30px;">已销售{{good.sales}}箱</b>
        </div>
      </div>
      <div class="col col-33 padding">
        <button class="button button-assertive" style="float:right;width: 100px;">立即采购</button>
      </div>
    </div>
  </div>
</div>
