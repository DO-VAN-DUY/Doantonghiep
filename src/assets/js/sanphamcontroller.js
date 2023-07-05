var app = angular.module('myapp', []);
app.controller('mycontrolsanpham', function($scope, $http) {


    $scope.doc = function(text) {
        return $sce.trustAsHtml(text);
    }

    $scope.hello = "Đỗ Thị Lý";
    $http({
        method: "GET",
        url: "http://127.0.0.1:8000/api/sanpham"

    }).then(function(data) {
        $scope.sps = data.data;
    });
    $scope.reloadData = function() {
        $http({
            method: "GET",
            url: "http://127.0.0.1:8000/api/sanpham"

        }).then(function(data) {
            $scope.sps = data.data;
            console.log(data);
        });
    }
    $scope.saveData = function() {
        if ($scope.id == 0) {
            // create
            $http({
                method: "POST",
                url: "http://127.0.0.1:8000/api/sanpham",
                data: $scope.sp,
                'content-Type': "application/json"
            }).then(function(res) {
                console.log(res.data);
            });

        } else {
            //update
            $http({
                method: "PUT",
                url: "http://127.0.0.1:8000/api/sanpham/" + $scope.id,
                data: $scope.sp,
                'content-Type': "application/json"
            }).then(function(res) {
                console.log(res.data);
            });
        }
        $("#modelId").modal('hide');
        $scope.reloadData();
    }
    $scope.deleteClick = function(id) {
        var hoi = confirm("Bạn có muốn xóa không?");
        if (hoi) {
            $http({
                method: "DELETE",
                url: "http://127.0.0.1:8000/api/sanpham/" + id

            }).then(function(data) {
                $scope.message = data.data;
                $scope.reloadData();
            });
        }
    }
    $scope.showModal = function(id) {
        $scope.id = id;
        // alert("xin chao");
        if (id == 0) {
            //dang la them mot ban tin moi
            $scope.modalTitle = "Thêm mới đồ uống thành công";
            if ($scope.sp) {
                $scope.sp.id_loai = "";
                $scope.sp.id_ncc = "";
                $scope.sp.anh = "";
                $scope.sp.ten = "";
                $scope.sp.mota = "";
                $scope.sp.giaban = "";
                $scope.sp.giakm = "";
                $scope.sp.soluong = "";
                $scope.sp.ghichu = "";
                $scope.sp.trangthai = "";
            }
        } else {
            //dang la sua ban ghi
            $scope.modalTitle = "Sửa đồ uống thành công";
            $http({
                method: "GET",
                url: "http://127.0.0.1:8000/api/sanpham/" + id

            }).then(function(data) {
                $scope.sp = data.data;
            });
        }
        $("#modelId").modal('show');
        // alert("xin chao");
    }
});


angular.module('myapp').filter('cut', function() {
    return function(value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace !== -1) {
                //Also remove . and , so its gives a cleaner result.
                if (value.charAt(lastspace - 1) === '.' || value.charAt(lastspace - 1) === ',') {
                    lastspace = lastspace - 1;
                }
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});