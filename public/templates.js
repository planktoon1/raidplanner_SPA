this["raidplanner"] = this["raidplanner"] || {};
this["raidplanner"]["Templates"] = this["raidplanner"]["Templates"] || {};

Handlebars.registerPartial("header", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<h3>"
    + alias4(((helper = (helper = helpers.subheader || (depth0 != null ? depth0.subheader : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subheader","hash":{},"data":data}) : helper)))
    + "</h3>";
},"useData":true}));

Handlebars.registerPartial("navigation", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button class=\"pokeballNav\" onclick=\"toggle('navigation')\"></button>\r\n<nav id=\"navigation\">\r\n    <div class=\"navGrid\">\r\n        <button class=\"btnAccount\" id=\"btnAccount\"  data-symbol=\"&#xf007\" onclick=\"toggle('navigation')\">Account</button>\r\n        <button class=\"btnRegister\" id=\"btnRegister\" data-symbol=\"&#xf067\" onclick=\"toggle('navigation')\">Registrer Raid</button>\r\n        <button class=\"btnRaidList\" id=\"btnRaidList\" data-symbol=\"&#xf0ca\" onclick=\"toggle('navigation')\">Raid list</button>\r\n\r\n        <button class=\"btnClose\" data-symbol=\"&#xf00d\" onclick=\"toggle('navigation')\"></button>\r\n    </div>\r\n</nav>";
},"useData":true}));

Handlebars.registerPartial("account", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    Navn: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " <br>\r\n    Alder: "
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + "<br>\r\n    By: "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "<br>\r\n    Område: "
    + alias4(((helper = (helper = helpers.area || (depth0 != null ? depth0.area : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"area","hash":{},"data":data}) : helper)))
    + "<br>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>Her kan man se sin profil</p><br>\r\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.account : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<button>submit</button>\r\n<button>ok</button>";
},"useData":true}));

Handlebars.registerPartial("login", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loginWrapper\">\r\n    <div class=\"loginBox\">\r\n        <input type=\"text\">\r\n        <input type=\"text\">\r\n        <button>Login</button>\r\n        <div>\r\n            <div class=\"rememberMe\"><input type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\">Husk mig </div>\r\n            <button class=\"subtle forgotpass\">Glemt kodeord?</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"registerAccount\">\r\n        <p>Har du ikke en bruger ? <button class=\"subtle\">OPRET HER</button></p>\r\n    </div>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("raidList", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Her kan man se en liste af raids</p><br>\r\n<button>submit</button>\r\n<button>ok</button>";
},"useData":true}));

Handlebars.registerPartial("registerRaid", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Her kan man registrerer raids</p><br>\r\n<button>submit</button>";
},"useData":true}));

this["raidplanner"]["Templates"]["./templates/index.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " Something went wrong while trying to load the page navigation ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" id=\"page\">\r\n   <!-- All page content goes here -->\r\n</div>\r\n\r\n<div class=\"navigation\">\r\n    "
    + ((stack1 = container.invokePartial(partials.navigation,depth0,{"name":"navigation","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n</div>";
},"usePartial":true,"useData":true});

this["raidplanner"]["Templates"]["./templates/page.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " Something went wrong while trying to load the header ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  "
    + ((stack1 = container.invokePartial(partials.registerRaid,depth0,{"name":"registerRaid","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.page : depth0),"raidList",{"name":"ifEquals","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      "
    + ((stack1 = container.invokePartial(partials.raidList,depth0,{"name":"raidList","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "     ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.page : depth0),"account",{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "       "
    + ((stack1 = container.invokePartial(partials.account,depth0,{"name":"account","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      ";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.page : depth0),"login",{"name":"ifEquals","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "         "
    + ((stack1 = container.invokePartial(partials.login,depth0,{"name":"login","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        ";
},"14":function(container,depth0,helpers,partials,data) {
    return "\r\n    <p>Page not found</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"header\">    \r\n    "
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.page : depth0),"registerRaid",{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});