// ---------------- ACCOUNT ----------------

const createAccount = ({
  name = 'Anonymous', 
  age = 'Unknown',
  area = 'Unknown',
  city = 'Unknown'
} = {}) => {
  function haveFun() {
    console.log(`${name} is having fun`)
  }

  return {
    name,
    age,
    area,
    city,
    haveFun
  }
}

// -------------- UTILITIES --------------

// Toggles visibility of an element. Designed to be used inline in the html. 
function toggle(id) {
  const element = document.getElementById(id);
  if (!element.style.opacity || element.style.opacity === "0" ) {
    element.style.visibility = "visible";
    element.style.opacity = "1";
  } else {
    element.style.visibility = "hidden";
    element.style.opacity = "0";
  }  
}

// Add event listener - takes care of older browsers
function addEvent(element, evnt, funct){
  if (element.attachEvent)
   return element.attachEvent('on'+evnt, funct);
  else
   return element.addEventListener(evnt, funct, false);
}


function changePageTo(context) {
  document.getElementById('app').innerHTML = raidplanner.Templates['./templates/index.hbs'](context);
  registerEventListeners();
}

// ----------- INITIALIZATION ------------
const account = createAccount({area: 'Viby J', city: 'Århus'});

// When page is loaded..
onload = async () => {
  registerHelpers();

  changePageTo({
    page: "account",
    header: "Din profil",
    subheader: "",
    account: account
  });

  
};

// Adds eventlisteners to buttons, and other functionalities
function registerEventListeners() {

  // ---------- Navigation buttons ----------
  addEvent( // -- Account --
    document.getElementById('btnAccount'), 'click', () => changePageTo({
      page: "account",
      header: "Din profil",
      subheader: "",
      account: account
    })
  );

  addEvent( // -- Register raid --
    document.getElementById('btnRegister'), 'click', () => changePageTo({
      page: "registerRaid",
      header: "Register Raid",
      subheader: `@ ${account.area} - ${account.city}`,
      account: account
    })
  );

  addEvent( //  -- Raid list -- 
    document.getElementById('btnRaidList'), 'click', () => changePageTo({
      page: "raidList",
      header: "Raid List",
      subheader: `@ ${account.area} - ${account.city}`,
      account: account
    })
  );


}

function registerHelpers() {
  // Handlebars helper that allows for comparrison inside template
  Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  });

}