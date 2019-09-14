//extends  example
var Dog = Backbone.Model.extend({
    defaults : {
        name : 'puppy',
        age : 3
    }
});

var Pet = Backbone.Collection.extend({
    model : Dog
});

var dog1 = new Dog({
   name : 'left',
   age : 2
});

var dog2 = new Dog({
    name : 'right',
    age : 4
});

var myPet = new Pet([dog1, dog2]);
document.write("My Pet is " + JSON.stringify(myPet.models) + "<br>");

//model example
var Book = Backbone.Model.extend({
   defaults : {
       title : 'computer',
       author : 'nak'
   }
});

var PublicDocument = Book.extend({
    defaults : {
        authorizor : 'public'
    }
});

var PrivateDocument = Book.extend({
    defaults : {
        authorizor : 'private'
    }
});


var Library = Backbone.Collection.extend({
   model : Book
});

var Library2 = Backbone.Collection.extend({  //여기 부분은 나중에 다시 해 보기...
    model : function(model, options) {
        switch (model.type) {
            case 'Book' :
                return new PrivateDocument();
            case 'Library':
                return new PublicDocument();
        }
    }
});

var myBook = new Book();
var myLibrary2 = new Library2([myBook]);
document.write(myLibrary2 + "<br>");

//modelId
var Library3 = Backbone.Collection.extend({
    modelId : function(attrs) {
        return attrs.type + attrs.id;
    }
});

var library3 = new Library3([
    {type : 'dvd' , id:1},
    {type : 'vhs', id:1}
]);

var dvdId = library3.get('dvd1').id;
var vhsId = library3.get('vhs1').id;
//alert('dvd: ' + dvdId + ', vhs: '  + vhsId);

//add example
var addLibrary = new Library([]);

var book1 = new Book();
var book2 = new Book();
var book3 = new Book();

addLibrary.add(book1);
addLibrary.add([book2, book3]);

document.write("<br> Add Libarary is " + addLibrary.length);

//comparator
var Person = Backbone.Model.extend();
var person1 = new Person({name : "nak", id:3, job : "student"});
var person2 = new Person({name : "soo", id:1, job : "student"});
var person3 = new Person({name : "choi", id:2, job : "professor"});

var People = Backbone.Collection.extend({model : Person, comparator : 'name'});
var people = new People();
//myVal.comparator = 'name';
people.add([person1, person2, person3]);

document.write("<br> The sorted(based on name order of collection", JSON.stringify(people));

//pluck example
var names = people.pluck("id");
//var names = myVal.pluck("name");
document.write("<br>Pluck :" + JSON.stringify(names));

//where example
var jobs = people.where({job : "student"});
document.write("<br>Where :" + JSON.stringify(jobs));

//findWhere example
var jobs2 = people.findWhere({job: "student"});
document.write("<br>Where :" + JSON.stringify(jobs2));

//url example
var Notes = Backbone.Collection.extend({
    url : "/notes"
});

//또는
var Notes2 = Backbone.Collection.extend({
    url : function() {
        return this.document.url() + '/notes2';
    }
});

//clone example
//var cloneNote = Notes.clone();

var Library4 = Backbone.Collection.extend({
    model: Book
});

var nypl = new Library4;

var othello = nypl.create({
    url : "/books",
    title: "Othello",
    author: "William Shakespeare"
});

document.write("<br>" + othello);