onload = async () => {
  registerHelpers();

  changePageTo({
    page: "account",
    header: "Din profil",
    subheader: "",
    account: {
      name: "Frederik",
      age: "22"
    }
  });
  
};

function toggle(id) {
  const element = document.getElementById(id);
  if (!element.style.display || element.style.display === "none" ) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }  
}

function changePageTo(context) {
  document.getElementById('app').innerHTML = raidplanner.Templates['./templates/index.hbs'](context);
}

function registerHelpers() {
  // Handlebars helper that allows for comparrison inside template
  Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  });

}

/*/ Fetches handlebars templates from an array of urls. Returns an array of the compiled templates
// *The compiled templates are ordered in the same order as the urls are passed to the function   
async function fetchAndCompile(urls) {
  // If the urls parameter is a single string/not an array, turn it into an array with 1 index
  if (urls.constructor !== Array) {urls = [urls]};

  // Fetch the templates needed
  const fetchedTemplates = await Promise.all( urls.map( url => fetch(url)) );

  // Read the response stream of the templates and parse them into text
  const parsedTemplates = await Promise.all( fetchedTemplates.map( t => t.text()));

  // Compile the templates
  const compiledTemplates = [];
  for (parsedTemplate of parsedTemplates) {
    compiledTemplates.push( Handlebars.compile(parsedTemplate));
  }

  // return the parsed templates as an array
  return compiledTemplates;
}*/