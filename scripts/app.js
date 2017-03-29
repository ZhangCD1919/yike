var yike = angular.module("yike", ["ngRoute"]);


// 路由设置
yike.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/today', {
        templateUrl: "./views/today.html"
    }).when("/older", {
        templateUrl: "./views/older.html"
    }).when("/author", {
        templateUrl: "./views/author.html"
    }).when("/category", {
        templateUrl: "./views/category.html"
    }).when("/settings", {
        templateUrl: "./views/settings.html"
    }).otherwise({
        redirectTo: '/today'
    })
}]);

// 导航遍历数据
yike.controller("navsCtrl", ["$scope", function ($scope) {
    $scope.navs = [
        {text: "今日一刻", icon: "icon-home", link: "#!/today"},
        {text: "往期内容", icon: "icon-file-empty", link: "#!/older"},
        {text: "热门作者", icon: "icon-pencil", link: "#!/author"},
        {text: "栏目浏览", icon: "icon-menu", link: "#!/category"},
        {text: "设置", icon: "icon-cog", link: "#!/settings"}
    ]
}]);


// 根作用域的参数
yike.run(["$rootScope", function ($rootScope) {
    // collapsed控制模块的移动
    $rootScope.collapsed = false;
    $rootScope.toggle = function () {
        $rootScope.collapsed = !$rootScope.collapsed;

        // 获取导航菜单
        var navs = document.querySelectorAll(".navs dd");
        if ($rootScope.collapsed) {
            for (var i = 0; i < navs.length; i++) {
                navs[i].style.transform = "translate(0)";
                navs[i].style.transitionDuration = 0.15 * i + "s";
                navs[i].style.transitionDelay = "0.3s";
            }
        } else {
            for (var i = 0; i < navs.length; i++) {
                navs[i].style.transform = "translate(-100%)";
                navs[i].style.transitionDuration = 0.15 * ( navs.length-i) + "s";
                navs[i].style.transitionDelay = "";
            }
        }


    }
}]);
