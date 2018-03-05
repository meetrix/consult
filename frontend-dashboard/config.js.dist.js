//Assuming number of radio buttons will be a factor of 12 (eg 2,3,4,6)
export const ConsultantSortByRadioButtons = [{label:'Experience'}, {label:'Rating'}, {label:'Hourly Rate'}];

export const ConsultantSearchDropDownMenu = [
    {name: "expertise", label:"Expertise", options:["Rocket Science", "Thermo Dynamics"] },
    {name: "education", label:"Education", options:["Diploma", "Degree", "Masters"] }
];

export const LandingPageBackgroundCarouselItems=[
    {
        altText: 'Slide 1',
        caption: 'Slide 1',
    },
    {
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

export const Branding = {
    "footer" : {
        "applicationName" : "Consult",
        "organization" : "Meetrix",
        "organizationLink" : "https://meetrix.io",
        "copyrightYear" : "2018",
        "poweredBy" : "Meetrix",
        "poweredBylink" : "https://meetrix.io"
    }
}

export const firebaseConfig = {
    apiKey: "111111111111",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    projectId: "meetrix-consult",
    storageBucket: "meetrix-consult",
    messagingSenderId: "123213123132",

};