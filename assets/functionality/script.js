const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
    elem.addEventListener("click", function () {
        const linkId = elem.id;
        const hrefLinkClick = elem.href;

        allLinks.forEach((link) => {
            if (link.href == hrefLinkClick) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        allTabs.forEach((tab) => {
            if (tab.id.includes(linkId)) {
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

const generateTabItems = (elem, tabContent) => {
    const filterName = elem.name;
    const filterFunction = filter[filterName];

    const mappedRecords = tabRecords.filter(filterFunction).map (
        ({ company, ...record }) => {
            return DOMPurify.sanitize(
                `<div class="job">
                    <div class="job__main">
                        <div class="job__company">
                            <img src="${company.src}" class="job__avatar
                            job__avatar- -${company.name}"
                            alt="Profile"
                            >
                        </div>
                        <button type="button" class="job__bookmark">
                            full svg
                        </button>
                    <div class="job__company">
                        ${company.name}
                        <div class="job__location">
                            <i class="fa-solid fa-location-dot"></i>
                            ${record.location}
                            </div>
                        </div>
                    </div>
                    <div class="job__bottom">
                        <div class="job__applicants">
                            ${record.applicants.map((applicant) => {
                                return (
                                `<img src="assets/images/users/${applicant}.jpg"
                                alt="${applicant.name}" class="job__applicant">`
                                )
                            }).join("")}
                            +${record.applicationsCount} applicants
                        </div>
                        <div class="job__salary">${record.salary}</div>
                    </div>
                </div>`
            );
        });
        tabContent.innerHTML = mappedRecords.join("");
};

//? handle proper selection for initial load
const currentHash = window.location.hash;

let activeLink = document.querySelector(`.tabs a`);

if (currentHash) {
    const visibleHash = document.getElementById(
        `${currentHash}`
    );

    if (visibleHash) {
        activeLink = visibleHash;
    }
}

const activeTab = document.querySelector(
    `#${activeLink.id}-content`
);

activeLink.classList.toggle("active");
activeTab.classList.toggle("tab-content--active");

generateTabItems(activeLink, activeTab);