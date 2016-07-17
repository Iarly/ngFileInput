angular.module('ng-file-input', [])
    .directive("ngFileModel", [function () {
        return {
            scope: {
                ngFileModel: "="
            },
            link: function (scope, element, attributes) {
                var regex = /data\:(.*?\;)(.*?\,)(.*)/;

                element.bind("change", function (e) {
                    var reader = new FileReader(),
                        fileInfo = e.target.files[0];
                    reader.onload = function (loadInfo) {
                        scope.$apply(function () {
                            var data = loadInfo.target
                                .result;
                            var groups = regex.exec(data);

                            scope.ngFileModel = {
                                Name: fileInfo.name,
                                Size: fileInfo.size,
                                Type: fileInfo.type,
                                LastModified: fileInfo.lastModified,
                                LastModifiedDate: fileInfo.lastModifiedDate,
                                Data: groups[3]
                            };
                        });
                    };
                    reader.readAsDataURL(fileInfo);
                });
            }
        }
    }]);