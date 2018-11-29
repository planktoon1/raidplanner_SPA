onload = async () => {  
  const templateUrls = [
    '/templates/index.hbs',
    '/templates/partials/header.hbs',
    '/templates/partials/footer.hbs',
    '/templates/partials/pages/registerRaid.hbs'
  ];

  const [
    indexTemplate, 
    headerPartial, 
    footerPartial,
    registerRaidPartial
  ] = await fetchAndCompile(templateUrls);

  // Register partials
  Handlebars.registerPartial({
    'header': headerPartial,
    'footer': footerPartial,
    'registerRaid': registerRaidPartial
  })

  // Execute the compiled templates and insert them into the DOM
  document.getElementById('app').innerHTML = indexTemplate({});
};


// Fetches handlebars templates from an array of urls. Returns an array of the compiled templates
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
}