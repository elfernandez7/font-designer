// Cached Elements
const savedPairs = document.getElementById('saved');
const colors = document.getElementById('colors');

const heading = document.getElementById('heading');
const subheading = document.getElementById('subheading');
const bodyText = document.getElementById('body-text');

const sidebarDiv = document.getElementById('side-div');

const sidebarTitle = document.getElementById('sidebarTitle');
const sidebarEl = document.querySelector('.sidebar');

const headingForm = document.querySelector('.heading-form');
const subheadingForm = document.querySelector('.subheading-form');
const bodyForm = document.querySelector('.body-form');

const savedListEl = document.getElementById('saved-list');

const sidebarForm =document.getElementById('form');
const fontSelectElH = document.getElementById('fontSelectH');
const sizeInputElH = document.getElementById('fontSizeH');
const weightInputElH = document.getElementById('fontWeightH');
const transformSelectElH = document.getElementById('textTransformH');
const lineHeightElH = document.getElementById('lineHeightH');
const letterSpaceElH = document.getElementById('letterSpaceH');
const root = document.querySelector(':root');

const fontSelectElS = document.getElementById('fontSelectS');
const sizeInputElS = document.getElementById('fontSizeS');
const weightInputElS = document.getElementById('fontWeightS');
const transformSelectElS = document.getElementById('textTransformS');
const lineHeightElS = document.getElementById('lineHeightS');
const letterSpaceElS = document.getElementById('letterSpaceS');

const fontSelectElB = document.getElementById('fontSelectB');
const sizeInputElB = document.getElementById('fontSizeB');
const weightInputElB = document.getElementById('fontWeightB');
const transformSelectElB = document.getElementById('textTransformB');
const lineHeightElB = document.getElementById('lineHeightB');
const letterSpaceElB = document.getElementById('letterSpaceB');



const linkEl = document.querySelectorAll('link');

const headingFontEl = document.querySelector('.heading-name');
const headingCss = document.getElementById('heading-css');

const subheadingFontEl = document.querySelector('.subheading-name');
const subheadingCss = document.getElementById('subheading-css');


const bodyFontEl = document.querySelector('.body-name');
const bodyCss = document.getElementById('body-css');




//State
init();

initCSS();

function init(){
    sidebarDiv.innerHTML = '';
}
function initCSS(){
    headingCss.innerHTML = '';
    subheadingCss.innerHTML = '';
    bodyCss.innerHTML = '';
}    

//Render Sidebar Content

fetchPairings();


async function fetchPairings() {
    const response = await fetch('http://localhost:3000/pairings');
    const pairings = await response.json();


function renderPairings(){
    pairings.forEach((pairing) => {
        const linkEl = document.createElement('a');
        linkEl.setAttribute('id', pairing.id);
        linkEl.innerText = pairing.title;
        savedListEl.append(linkEl);
        sidebarDiv.appendChild(savedListEl);
        return;
    });

}



//Saved Sidebar
savedPairs.addEventListener('click',function(){
    init();
    savedListEl.innerHTML = '';
    sidebarTitle.innerText =('Saved Pairings');
    sidebarEl.classList.add('outline');
    renderPairings();
    return;
});
}



//Render Color Menu

function renderColors(){
    sidebarEl.classList.add('outline');
    sidebarDiv.innerHTML = `<form id="form" class="colors-Form">`+
    `<label class = "body-font body-text">Background Color:</label>`+
    `<input type="text" class=></input>`+
    `<label class = "body-font body-text">Text Color:</label>`+
    `<input type="text"></input>`+
    `</form>`;
};

colors.addEventListener('click',function(){
    sidebarTitle.innerText =('Colors');
    renderColors();
    return;
});
    

//render Font Forms
function renderHeadingForm(){
    init();
    sidebarEl.classList.add('outline');
    sidebarDiv.appendChild(headingForm);

};

function renderSubheadingForm(){
    init();
    sidebarEl.classList.add('outline');
    sidebarDiv.appendChild(subheadingForm);

};

function renderBodyForm(){
    init();
    sidebarEl.classList.add('outline');
    sidebarDiv.appendChild(bodyForm);
    return;
};

savedListEl.addEventListener('click', function(evt){
    
    linkID = evt.target.id;
    console.log(linkID);



    fetchPairings();


    async function fetchPairings() {
    const response = await fetch('http://localhost:3000/pairings');
    const pairings = await response.json();

    initCSS();
    renderSavedHeader();
    renderSavedSubheader();
    renderSavedBody();
    

    function renderSavedHeader(){
        pairings.forEach((pairing) => {
            if(pairing.id != linkID){
                console.log("nothing");
            }else if(pairing.id = linkID){
                console.log(pairing.id);
                
                const li = document.createElement('li');
                li.classList.add = 'css-property';

                const familyLi = document.createElement('li');
                const sizeLi = document.createElement('li');
                const weightLi = document.createElement('li');
                const transformLi = document.createElement('li');
                const heightLi = document.createElement('li');
                const spaceLi = document.createElement('li');

                root.style.setProperty('--heading-font',`${pairing.heading.fontFamily}`);
                headingFontEl.innerText = `${pairing.heading.fontFamily}`
                headingCss.append(`font-family: ${pairing.heading.fontFamily};`, familyLi);
                heading.style.setProperty('font-size', `${pairing.heading.fontSize}`);
                headingCss.append(`font-size: ${pairing.heading.fontSize}`, sizeLi)
                heading.style.fontWeight = `${pairing.heading.fontWeight}`;
                headingCss.append(`font-weight: ${pairing.heading.fontWeight};`, weightLi);
                heading.style.setProperty('text-transform',`${pairing.heading.textTransform}`);
                headingCss.append(`text-transform: ${pairing.heading.textTransform};`, transformLi);
                heading.style.setProperty('line-height', `${pairing.heading.lineHeight}`);
                headingCss.append(`line-height: ${pairing.heading.lineHeight};`, heightLi);
                heading.style.letterSpacing = `${pairing.heading.letterSpace}`;
                headingCss.append(`letter-spacing: ${pairing.heading.letterSpace};`, spaceLi);
        }
        })
}

    function renderSavedSubheader(){
        pairings.forEach((pairing) => {
            if(pairing.id != linkID){
                console.log("nothing");
            }else if(pairing.id = linkID){
                console.log(pairing.id);
              
                const li = document.createElement('li');
                li.classList.add = 'css-property';

                const familyLi = document.createElement('li');
                const sizeLi = document.createElement('li');
                const weightLi = document.createElement('li');
                const transformLi = document.createElement('li');
                const heightLi = document.createElement('li');
                const spaceLi = document.createElement('li');

                root.style.setProperty('--subhead-font',`${pairing.subheading.fontFamily}`);
                subheadingFontEl.innerText = `${pairing.subheading.fontFamily}`
                subheadingCss.append(`font-family: ${pairing.subheading.fontFamily};`, familyLi);
                subheading.style.setProperty('font-size', `${pairing.subheading.fontSize}`);
                subheadingCss.append(`font-size: ${pairing.subheading.fontSize}`, sizeLi)
                subheading.style.fontWeight = `${pairing.subheading.fontWeight}`;
                subheadingCss.append(`font-weight: ${pairing.subheading.fontWeight};`, weightLi);
                subheading.style.setProperty('text-transform',`${pairing.subheading.textTransform}`);
                subheadingCss.append(`text-transform: ${pairing.subheading.textTransform};`, transformLi);
                subheading.style.setProperty('line-height', `${pairing.subheading.lineHeight}`);
                subheadingCss.append(`line-height: ${pairing.subheading.lineHeight};`, heightLi);
                subheading.style.letterSpacing = `${pairing.subheading.letterSpace}`;
                subheadingCss.append(`letter-spacing: ${pairing.subheading.letterSpace};`, spaceLi);
            }
        });
    }

    function renderSavedBody(){
        pairings.forEach((pairing) => {
            if(pairing.id != linkID){
                console.log("nothing");
            }else if(pairing.id = linkID){
                console.log(pairing.id);
                
                const li = document.createElement('li');
                li.classList.add = 'css-property';

                const familyLi = document.createElement('li');
                const sizeLi = document.createElement('li');
                const weightLi = document.createElement('li');
                const transformLi = document.createElement('li');
                const heightLi = document.createElement('li');
                const spaceLi = document.createElement('li');

                root.style.setProperty('--body-font',`${pairing.body.fontFamily}`);
                bodyFontEl.innerText = `${pairing.body.fontFamily}`
                bodyCss.append(`font-family: ${pairing.body.fontFamily};`, familyLi);
                bodyText.style.setProperty('font-size', `${pairing.body.fontSize}`);
                bodyCss.append(`font-size: ${pairing.body.fontSize};`, sizeLi)
                bodyText.style.fontWeight = `${pairing.body.fontWeight}`;
                bodyCss.append(`font-weight: ${pairing.body.fontWeight};`, weightLi);
                bodyText.style.setProperty('text-transform',`${pairing.body.textTransform}`);
                bodyCss.append(`text-transform: ${pairing.body.textTransform};`, transformLi);
                bodyText.style.setProperty('line-height', `${pairing.body.lineHeight};`);
                bodyCss.append(`line-height: ${pairing.body.lineHeight};`, heightLi);
                bodyText.style.letterSpacing = `${pairing.body.letterSpace}`;
                bodyCss.append(`letter-spacing: ${pairing.body.letterSpace};`, spaceLi);

                heading.innerText = `${pairing.title}`;
            }
        });
    }}
})

//Heading Updates
function updateHeaderFont(){

    fontSelectElH.addEventListener('change', function(evt){
        if(evt.target.classList.contains('heading')){
            const family = evt.target.value;
            root.style.setProperty('--heading-font',`${family}`);
            headingFontEl.innerText = (`${family}`);
            const li = document.createElement('li');
            headingCss.append(`font-family: ${family};`, li);
        };
    });
    
    sizeInputElH.addEventListener('change', function(evt){
        if(evt.target.classList.contains('heading')){
            const size = evt.target.value;
            heading.style.setProperty('font-size', `${size}px`);
            const li = document.createElement('li');
            headingCss.append(`font-size: ${size}px;`, li);
        };    
    });

    weightInputElH.addEventListener('change', function(evt){
        if(evt.target.classList.contains('heading')){
            const weight = evt.target.value;
            heading.style.fontWeight = `${weight}`;
            const li = document.createElement('li');
            headingCss.append(`font-weight: ${weight};`, li);
        };
    });

    transformSelectElH.addEventListener('change', function(evt){
        if(evt.target.classList.contains('heading')){
            const transform = evt.target.value;
            heading.style.setProperty('text-transform',`${transform}`);
            const li = document.createElement('li');
            headingCss.append(`text-transform: ${transform};`, li);
        };
    });

    lineHeightElH.addEventListener('change', function(evt){
        if(evt.target.classList.contains('heading')){
            const lineHeight = evt.target.value;
            console.log(lineHeight);
            heading.style.setProperty('line-height', `${lineHeight}px`);
            const li = document.createElement('li');
            headingCss.append(`line-height: ${lineHeight}px;`, li);
        };    
    });

    letterSpaceElH.addEventListener('change', function(evt){
        if(evt.target.classList.contains('heading')){
            const letterSpace = evt.target.value;
            console.log(letterSpace);
            heading.style.letterSpacing = `${letterSpace}px`;
            const li = document.createElement('li');
            headingCss.append(`letter-spacing: ${letterSpace}px;`, li);
        };
    });

   
};

heading.addEventListener('click',function(){
    console.log('heading clicked');
    sidebarTitle.innerText =('Heading');
    renderHeadingForm();
    updateHeaderFont();
    return;
});



//Sub-heading Sidebar
function updateSubheaderFont(){
        
        fontSelectElS.addEventListener('change', function(evt){
            if(evt.target.classList.contains('subheading')){
                const family = evt.target.value;
                root.style.setProperty('--subhead-font',`${family}`);
                subheadingFontEl.innerText = (`${family}`);
                const li = document.createElement('li');
                headingCss.append(`font-family: ${family};`, li);
            };
         });
    
        sizeInputElS.addEventListener('change', function(evt){
            if(evt.target.classList.contains('subheading')){
                const size = evt.target.value;
                subheading.style.setProperty('font-size', `${size}px`);
                const li = document.createElement('li');
                subheadingCss.append(`font-size: ${size}px;`, li);
            };    
        });

        weightInputElS.addEventListener('change', function(evt){
            if(evt.target.classList.contains('subheading')){
                const weight = evt.target.value;
                subheading.style.fontWeight = `${weight}`;
                const li = document.createElement('li');
                subheadingCss.append(`font-weight: ${weight};`, li);
            };
        });

        transformSelectElS.addEventListener('change', function(evt){
            if(evt.target.classList.contains('subheading')){
                const transform = evt.target.value;
                subheading.style.setProperty('text-transform',`${transform}`);
                const li = document.createElement('li');
                subheadingCss.append(`text-transform: ${transform};`, li);
            };
        });

        lineHeightElS.addEventListener('change', function(evt){
            if(evt.target.classList.contains('subheading')){
                const lineHeight = evt.target.value;
                console.log(lineHeight);
                subheading.style.setProperty('line-height', `${lineHeight}px`);
                const li = document.createElement('li');
                subheadingCss.append(`line-height: ${lineHeight}px;`, li);
            };    
        });

        letterSpaceElS.addEventListener('change', function(evt){
            if(evt.target.classList.contains('subheading')){
                const letterSpace = evt.target.value;
                console.log(letterSpace);
                subheading.style.letterSpacing = `${letterSpace}px`;
                const li = document.createElement('li');
                subheadingCss.append(`letter-spacing: ${letterSpace}px;`, li);
            };    
        });

        return;
    };

subheading.addEventListener('click',function(evt){
    init();
    console.log('subheading clicked');
    sidebarTitle.innerText =('Sub-Heading');
    renderSubheadingForm(); 
    updateSubheaderFont();
    return;
});



//Body Sidebar
function updateBodyFont(){
    
    fontSelectElB.addEventListener('change', function(evt){
        if(evt.target.classList.contains('body')){
            const family = evt.target.value;
            root.style.setProperty('--body-font',`${family}`);
            bodyFontEl.innerText = (`${family}`);
            const li = document.createElement('li');
            bodyCss.append(`font-family: ${family};`, li);
        };
     });
    
    sizeInputElB.addEventListener('change', function(evt){
        if(evt.target.classList.contains('body')){
            const size = evt.target.value;
            bodyText.style.setProperty('font-size', `${size}px`);
            const li = document.createElement('li');
            bodyCss.append(`font-size: ${size}px;`, li);
        };
    });

    weightInputElB.addEventListener('change', function(evt){
        if(evt.target.classList.contains('body')){
            const weight = evt.target.value;
            bodyText.style.fontWeight = `${weight}`;
            const li = document.createElement('li');
            bodyCss.append(`font-weight: ${weight};`, li);
        };
    });

    transformSelectElB.addEventListener('change', function(evt){
        if(evt.target.classList.contains('body')){
            const transform = evt.target.value;
            bodyText.style.setProperty('text-transform',`${transform}`);
            const li = document.createElement('li');
            bodyCss.append(`text-transform: ${transform};`, li);
        };    
    });

    lineHeightElB.addEventListener('change', function(evt){
        if(evt.target.classList.contains('body')){
            const lineHeight = evt.target.value;
            console.log(lineHeight);
            bodyText.style.setProperty('line-height', `${lineHeight}px`);
            const li = document.createElement('li');
            bodyCss.append(`line-height: ${lineHeight}px;`, li);
        };
    });

    letterSpaceElB.addEventListener('change', function(evt){
        if(evt.target.classList.contains('body')){
            const letterSpace = evt.target.value;
            console.log(letterSpace);
            bodyText.style.letterSpacing = `${letterSpace}px`;
            const li = document.createElement('li');
            bodyCss.append(`letter-spacing: ${letterSpace}px;`, li);
        };
    });

    return;
};

bodyText.addEventListener('click',function(){
    console.log('body clicked');
    sidebarTitle.innerText =('Body');
    renderBodyForm();
    updateBodyFont();
});




