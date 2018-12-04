this["raidplanner"] = this["raidplanner"] || {};
this["raidplanner"]["Templates"] = this["raidplanner"]["Templates"] || {};

Handlebars.registerPartial("header", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Pokemon Go Raid planner</h1>\r\n<h3>@ Århus - Viby J</h3>";
},"useData":true}));

Handlebars.registerPartial("navigation", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"pokeballNav\">\r\n\r\n    \r\n</nav>";
},"useData":true}));

Handlebars.registerPartial("raidList", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>RAIDLISTRAIDLISTRAIDLISTRAIDLISTRAIDLISTRAIDLIST</h1>";
},"useData":true}));

Handlebars.registerPartial("registerRaid", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>REGISTER RAID</h2><br>\r\n<p>Her kan man registrerer raids</p><br>\r\n<button>submit</button>\r\n<button>ok</button>";
},"useData":true}));

this["raidplanner"]["Templates"]["./templates/index.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " Something went wrong while trying to load the header ";
},"3":function(container,depth0,helpers,partials,data) {
    return " Something went wrong while trying to load the page ";
},"5":function(container,depth0,helpers,partials,data) {
    return " Something went wrong while trying to load the footer ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"header\">    \r\n    "
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n<div class=\"page\">\r\n    "
    + ((stack1 = container.invokePartial(partials.registerRaid,depth0,{"name":"registerRaid","fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n<div class=\"navigation\">\r\n"
    + ((stack1 = container.invokePartial(partials.navigation,depth0,{"name":"navigation","fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n</div>";
},"usePartial":true,"useData":true});