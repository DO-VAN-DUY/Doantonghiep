var app = angular.module('myapp', []);
app.controller('mycontrolkhachhang', function($scope, $http) {
    $scope.hello = "Đỗ Thị Lý";
    $http({
        method: "GET",
        url: "http://127.0.0.1:8000/api/khachhang"

    }).then(function(data) {
        $scope.khachhangs = data.data;
    });
    $scope.reloadData = function() {
        $http({
            method: "GET",
            url: "http://127.0.0.1:8000/api/khachhang"

        }).then(function(data) {
            $scope.khachhangs = data.data;
            console.log(data);
        });
    }
    $scope.saveData = function() {
        if ($scope.id == 0) {
            // create
            $http({
                method: "POST",
                url: "http://127.0.0.1:8000/api/khachhang",
                data: $scope.kh,
                'content-Type': "application/json"
            }).then(function(res) {
                console.log(res.data);
            });

        } else {
            //update
            $http({
                method: "PUT",
                url: "http://127.0.0.1:8000/api/khachhang/" + $scope.id,
                data: $scope.kh,
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
                url: "http://127.0.0.1:8000/api/khachhang/" + id

            }).then(function(data) {
                $scope.message = data.data;
                $scope.reloadData();
            });
        }
    }
    $scope.showModal = function(id) {
        $('#modelId').modal('show');
        $scope.id = id;
        // alert("xin chao");
        if (id == 0) {
            //dang la them mot ban tin moi
            $scope.modalTitle = "Thêm mới bản ghi";
            if ($scope.kh) {
                $scope.kh.ten_kh = "";
                $scope.kh.email = "";
                $scope.kh.dia_chi = "";
                $scope.kh.sdt = "";
                $scope.kh.note = "";
            }
        } else {
            //dang la sua ban ghi
            $scope.modalTitle = "Sửa bản ghi";
            $http({
                method: "GET",
                url: "http://127.0.0.1:8000/api/khachhang/" + id

            }).then(function(data) {
                $scope.kh = data.data;
            });
        }
        $("#modelId").modal('show');
        // alert("xin chao");
    }
});