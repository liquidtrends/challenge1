Handlebars.registerHelper('english', function(value) {
    if (value == true) {
        return new Handlebars.SafeString(
    "<span class='glyphicon glyphicon-ok'></span>"
  );
    } else {
         return new Handlebars.SafeString(
    "<span class='glyphicon glyphicon-ban-circle'></span>"
  );
    }
});


Handlebars.registerHelper('pop-num', function(value) {
    if (value > 100000) {

    } else if (value > 5000000 ) {

    } else {

    }
});


var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

var data = { countries: [
    {code: "BY", CountryName: "Belarus", Population: 9685000, English: false},
    {code: "BZ", CountryName: "Belize", Population: 314522, English: true},
    {code: "CA", CountryName: "Canada", Population: 33679000, English: true},
    {code: "CC", CountryName: "Cocos [keeling] Islands", Population: 628, English: true},
    {code: "CD", CountryName: "Democratic Republic of the Congo", Population: 70916439, English: false},
    {code: "CF", CountryName: "Central African Republic", Population: 4844927, English: false},
    {code: "CG", CountryName: "Republic of the Congo", Population: 3039126, English: false},
    {code: "CH", CountryName: "Switzerland", Population: 7581000, English: false},
  ]};
$('body').append(template(data));


