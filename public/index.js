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

// ---------------- RAIDS ----------------

const raids = [
  {
    gym: {
      "id":406670,"name":"Switzer Park", "lat":39.525074,"lon":-86.16898
    },
    form:null,
    hatches: timeStamp("2018-12-21T11:01:58.762384Z"),
    ends: timeStamp("2018-12-21T11:46:58.762384Z"),
    updated: timeStamp("2018-12-21T10:02:56.500184Z"),
    egg_tier:5
  },
  {
    gym: {
      "id":406671,"name":"Viby Kirke", "lat":39.525004,"lon":-85.16898
    },
    form:{
      name:	"piloswine",
      display_name:	"Piloswine",
      raid_boss_level:	3
    },
    hatches: timeStamp("2018-12-21T12:33:40.961471Z"),
    ends: timeStamp("2018-12-21T13:18:40.961471Z"),
    updated: timeStamp("2018-12-21T12:33:59.730605Z"),
    egg_tier:3
  },
  {
    gym: {
      "id":406671,"name":"Test Gym", "lat":39.525004,"lon":-85.16898
    },
    form:{
      name:	"piloswine",
      display_name:	"Piloswine",
      raid_boss_level:	3
    },
    groups: [
      {
        killTime: timeStamp("2018-12-21T12:33:40.961471Z"),
        participants: 7,
        mystic: 3,
        valor: 3,
        instinct: 1
      },
      {
        killTime: timeStamp("2018-12-21T12:36:40.961471Z"),
        participants: 2,
        mystic: 0,
        valor: 0,
        instinct: 2
      }
    ],
    hatches: timeStamp("2018-12-21T12:33:40.961471Z"),
    ends: timeStamp("2018-12-21T13:18:40.961471Z"),
    updated: timeStamp("2018-12-21T12:33:59.730605Z"),
    egg_tier:3
  },
  {
    gym: {
      "id":406671,"name":"Viby Kirke", "lat":39.525004,"lon":-85.16898
    },
    form:{
      name:	"piloswine",
      display_name:	"Piloswine",
      raid_boss_level:	3
    },
    hatches: timeStamp("2018-12-21T12:33:40.961471Z"),
    ends: timeStamp("2018-12-21T13:18:40.961471Z"),
    updated: timeStamp("2018-12-21T12:33:59.730605Z"),
    egg_tier:3
  },
  {
    gym: {
      "id":406671,"name":"Viby Kirke", "lat":39.525004,"lon":-85.16898
    },
    form:{
      name:	"piloswine",
      display_name:	"Piloswine",
      raid_boss_level:	3
    },
    hatches: timeStamp("2018-12-21T12:33:40.961471Z"),
    ends: timeStamp("2018-12-21T13:18:40.961471Z"),
    updated: timeStamp("2018-12-21T12:33:59.730605Z"),
    egg_tier:3
  },
  {
    gym: {
      "id":406671,"name":"Viby Kirke", "lat":39.525004,"lon":-85.16898
    },
    form:{
      name:	"piloswine",
      display_name:	"Piloswine",
      raid_boss_level:	3
    },
    hatches: timeStamp("2018-12-21T12:33:40.961471Z"),
    ends: timeStamp("2018-12-21T13:18:40.961471Z"),
    updated: timeStamp("2018-12-21T12:33:59.730605Z"),
    egg_tier:3
  }
];

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

// Change ISO date string into a timestamp we can display in the design (hh:mm)
function timeStamp(isoString) {
  const dateString = new Date( isoString).toTimeString().split(' ')[0].split(':');
  return `${dateString[0]}:${dateString[1]}`;
}

// Add event listener - takes care of older browsers
function addEvent(element, evnt, funct){
  if (element.attachEvent)
   return element.attachEvent('on'+evnt, funct);
  else
   return element.addEventListener(evnt, funct, false);
}


function changePageTo(context) {
  document.getElementById('page').innerHTML = raidplanner.Templates['./templates/page.hbs'](context);
  registerEventListeners();
  const coll = document.getElementsByClassName("collapsible");
  if (coll ) addCollapsibleBehaviour(coll);
}

// ----------- INITIALIZATION ------------
const account = createAccount({area: 'Viby J', city: 'Århus'});

// When page is loaded..
onload = async () => {
  registerHelpers();
  document.getElementById('app').innerHTML = raidplanner.Templates['./templates/index.hbs']();

  changePageTo({
    page: "registerRaid",
    header: "Register Raid",
    subheader: `@ ${account.area} - ${account.city}`,
    account: account
  });

};


function addCollapsibleBehaviour(coll) {
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      
      
    });
  }
}

// Adds eventlisteners to buttons, and other functionalities
function registerEventListeners() {

  // ---------- Navigation buttons ----------
  addEvent( // -- Account --
    document.getElementById('btnAccount'), 'click', () => changePageTo({
      page: "login",
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
      account: account,
      raids
    })
  );


}

function registerHelpers() {
  // Handlebars helper that allows for comparrison inside template
  Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  });

}