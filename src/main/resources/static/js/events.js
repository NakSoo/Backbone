//on이벤트
//객체 생성
var object = {};

//잘 모르겠으나 이벤트 등록에 반드시 필요
object = _.extend(object,Backbone.Events);

//이벤트 등록(이벤트 이름, 핸들러)
object.on("myFunc", function () {
    document.write("I am myFunc");
    //alert("I am myFunc");
});

//이벤트 호출(이벤트 이름으로)
object.trigger("myFunc");

document.write("<br>");
document.write("Off 관련 : ");
//off 관련
var myEvent = {};
myEvent = _.extend(myEvent, Backbone.Events);

var myFunc = function() {
    document.write("Hello world!");
}

var myFunc2 = function() {
    document.write("I am ironman");
}

myEvent.on("callMe", myFunc);
myEvent.on("callMe", myFunc2);

myEvent.trigger("callMe");
document.write("<br>");

myEvent.off("callMe", myFunc());
myEvent.trigger("callMe");

document.write("<br>");
document.write("Now is once : ");

//once 관련
var onceVar = {};
onceVar = _.extend(onceVar, Backbone.Events);
onceVar.once("one", myFunc);
onceVar.trigger("one");
document.write("<br> After: ");
onceVar.trigger("one");


document.write("<br>");
document.write("ListenTo 관련<br>");

//listenTo 관련
var listen1 = {};
var listen2 = {};

listen1 =_.extend(listen1, Backbone.Events);
listen2 =_.extend(listen2, Backbone.Events);

listen2.listenTo(listen1, "myListen", myFunc2);
listen1.trigger('myListen');


document.write("<br>");
document.write("StopListening <br>");

//stopLiestening 관련
listen2.stopListening(listen1, "myListen");
listen1.trigger("myListen");


document.write("<br>");
document.write("ListenToOnce <br>");
//listToOnce 관련
listen2.listenToOnce(listen1, "myListen", myFunc2);
listen1.trigger("myListen");
document.write("<br>");
document.write("After : ");
listen1.trigger("myListen"); //한번만 호출되고 사라짐
