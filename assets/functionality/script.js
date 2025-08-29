const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
    elem.addEventListener("click", function () {
        const linkID = elem.id;
        const hrefLinkClick = elem.href;

        allLinks.forEach((link) => {
            if (link.href == hrefLinkClick) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        allTabs.forEach((tab) => {
            if (tab.id.includes(linkID)) {
                tab.classList.add("tab-content--active");
                // generate content for tab
                generateTabItems(elem, tab);
            } else {
                tab.classList.remove("tab-content--active");
            }
        });
    });
});

const tabRecords = [
    {
        company: {
            src: "assets/images/logos/apple-logo.png",
            name: "Apple",
        },
        role: 'Senior DevOps Engineer',
        type: 'on-site',
        salary: '$220k - $300k / year',
        location: 'New York, United States',
        applicants: ['lillia', 'drew', 'melissa'],
        applicationsCount: 220
    },
    
    {
        company: {
            src: "assets/images/logos/google-logo.jpg",
            name: "Google",
        },
        role: 'Senior Backend Developer',
        type: 'hybrid',
        salary: '$220k - $300k / year',
        location: 'San Francisco, United States',
        applicants: ['charlotte', 'ben', 'sally'],
        applicationsCount: 290
    },
    
    {
        company: {
            src: "assets/images/logos/meta-logo.jpg",
            name: "Meta",
        },
        role: 'Senior Backend Developer',
        type: 'hybrid',
        salary: '£320k - £400k / year',
        location: 'London, United Kingdom',
        applicants: ['grace', 'matt', 'darren'],
        applicationsCount: 430
    },
    
    {
        company: {
            src: "assets/images/logos/github-logo.png",
            name: "Github",
        },
        role: 'Junior Frontend Web Designer',
        type: 'remote',
        salary: '£520k - £600k / year',
        location: 'London, United Kingdom',
        applicants: ['taylor', 'charlie', 'paul'],
        applicationsCount: 420
    },
];

//? predefined filter functions
const filter = {
    ["all"]: () => true,
    ["on-site"]: (record) =>
        record.type.includes("on-site"),
    ["remote"]: (record) =>
        record.type.includes("remote"),
    ["hybrid"]: (record) =>
        record.type.includes("hybrid"),
};