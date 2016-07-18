# ngFileInput
----
[![Bower version](https://badge.fury.io/bo/ngFileInput.svg)](http://badge.fury.io/bo/ngFileInput)
----
This directive help you to make a input file model to webapi services

## Installation

`> bower install ngFileInput --save`

## Usage
on application :
`angular.module("myApp", ["ng.fileInput"])`

on html :
`<input type="file" ng-file-model="myFileModel" />`

Result :
    {
        Data : "UEsDBBQABgAIAAAAI..AAAAA="
        LastModified : 1468798673594
        LastModifiedDate : "2016-07-17T23:37:53.594Z",
        Name:"RELATORIO UNIMED.xlsx",
        Size:24632,
        Type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    }
    

----
By Iarly Lana Lins | 2016
