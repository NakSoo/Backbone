//Extend 사용 및 오버라이딩, 상속
var Note = Backbone.Model.extend({

    defaults: { //초기값 설정 원할시 defaults 이용
        user: 'choi',
        price: 1500,
        name: "<script>alert('xss')</script>"
    }
    ,

    initialize: function () {
        document.write("Note init<br>");
    },

    author: function () {
        document.write("Note author<br>");
    },

});

var PrivateNote = Note.extend({
    allowedToEdit: function () {
        document.write("Private allowedToEdit<br>");
    },

    author: function () {
        document.write("Private Author<br>");
    }
})

//toJSON
var Person = Backbone.Model.extend({});
var person = new Person({
    name: "choi",
    age: "25"
});

document.write(JSON.stringify(person));


//sync
var details = new Backbone.Model({
    fname: "Sachin",
    Iname: "Tendulkar"
});

Backbone.sync = function (method, model) {
    document.write(method + ": " + model.get("fname") + " " + model.get("Iname"));
}


//save, fetch, destroy 예제를 만들려고 했으나 실패...
var User = new Backbone.Model({
    urlRoot: "/inno/api",
    name: "Welcome to",
    site: "backbone.js"
});

Backbone.sync = function (method, model) {
    document.write(method + ":" + model.get('name') + "" + model.get('site'));
    model.set('id', 1);
};

User.save();
document.write("<br>");
User.save({name: "i repeat"});


//validate example
var Person2 = Backbone.Model.extend({
    defaults: {
        name: 'john',
        age: 25,
        occupation: 'working'
    },

    validate: function (attributes) {
        if (attributes.age < 25) {
            return "Person age is less than 25, please enter the correct age";
        }
        if (!attributes.name) {
            return "please enter the name";
        }
    }
});

var person2 = new Person2();

//url example
var UrlModel = Backbone.Model.extend({
    urlRoot: '/innogrid/backbonejs'
});
var myUrl = new UrlModel({id: "models"});
document.write("<br>" + myUrl.url());

//urlRoot example
var Book = Backbone.Model.extend({urlRoot: "/books"});

var solaris = new Book({id: "Solar"});
document.write("<br>" + solaris.url());

//parse() example
var myData = {
    "values": [{
        "fname": "Ratan",
        "Iname": "Tata",
        "country": "India"
    }]
};

var Person3 = Backbone.Model.extend({
    parse : function(response, options) {
        document.write(JSON.stringify(response));
    }
});

var person3 = new Person3(myData, {parse:true});

//isNew example
var Newbi = Backbone.Model.extend({
    defaults : {
        title : 'Newbi'
    }
});

var newbi = new Newbi();
document.write("<br>" + newbi.isNew());

var Newbi2 = Backbone.Model.extend({
    name: 'Aryan'
});

var newbi2 = new Newbi2();
document.write('Has name changed(before set) = ' + newbi2.hasChanged('name'));
newbi2.set('name' ,'Raj', {silent: true});
document.write('<br>Has name changed(after set) = ' + newbi2.hasChanged('name') );


//previous example
var bill = new Backbone.Model({
    name: "Bill Smith"
});

bill.on("change:name", function(model, name) {
    alert("Changed name from " + bill.previous("name") + " to " + name);
});

bill.set({name : "Bill Jones"});

//previousAttributes
var model = new Backbone.Model({
    jersey:10,
    player:'Dhoni',
    country:'India'
});
model.set('jersey', '99');
document.write("All the attributes returned by the previousAttributes() method are: ");
document.write("<br>");
document.write(JSON.stringify(model.previousAttributes()));


// var MyNote = new Note;
// MyNote.author();
// MyNote.get("price");
// MyNote.get("user");
// MyNote.set({price : 1000});
// MyNote.escape("author");
//
// var MyPrivateNote = new PrivateNote;
// MyPrivateNote.author();
// MyPrivateNote.allowedToEdit();
