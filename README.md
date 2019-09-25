# btjs sdk

 `bingotouch.js`和`linkplugin.js` 是专门为 Link 平台包装的js接口，用于调用原生平台能力。在使用这两份js之前 请先引入 Corodva。 仅限于在 bingotouch工程或者 BUI工程中使用。
 
 
 html页面使用示例：
 
 ```javascript
 <script src="js/cordova.js"></script>
 <script src="js/bingotouch.js"></script>
 <script src="js/linkplugins.js"></script>
 
 <script>
  // 页面加载完成后执行
  window.onload = function() {
    // 等原生层面的插件加载完成后执行，所有app.link的方法需要在 deviceready 中执行
    document.addEventListener("deviceready", function() {
        app.link.getLoginInfo(function(result){
            // 获取用户信息
            alert(JSON.stringify(result));
        });
    }, false);
  };
</script>
 ```
 
 
 