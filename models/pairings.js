const pairings = [
    {   id: 1,
        title: 'Font Pairing 1',
        heading:{   
            fontFamily : 'Playfair Display',
            fontSize : '42px',
            fontWeight: 500,
            textTransform: 'capitalize',
            lineHeight: '',
            letterSpace: '',
        },
        subheading:{   
            fontFamily : 'Lato',
            fontSize : '30px',
            fontWeight: 400,
            textTransform: 'normal',
            lineHeight: '',
            letterSpace: '',
        },
        body:{   
            fontFamily : 'Roboto',
            fontSize : '16px',
            fontWeight: 400,
            textTransform: 'normal',
            lineHeight: 1,
            letterSpace: '1px',
        },
    },  
    {   id: 2,
        title: 'Font Pairing 2',
        heading:{   
            fontFamily : 'Play',
            fontSize : '50px',
            fontWeight: 500,
            textTransform: 'capitalize',
            lineHeight: '',
            letterSpace: '',
        },
        subheading:{   
            fontFamily : 'Roboto Mono',
            fontSize : '30px',
            fontWeight: 500,
            textTransform: 'Uppercase',
            lineHeight: '',
            letterSpace: '',
        },
        body:{   
            fontFamily : 'Roboto Mono',
            fontSize : '20px',
            fontWeight: 300,
            textTransform: '',
            lineHeight: '',
            letterSpace: '',
        },
    },      
    {   id: 3,
        title: 'Font Pairing 3',
        heading:{   
            fontFamily : 'Gayathri',
            fontSize : '50px',
            fontWeight: 500,
            textTransform: 'capitalize',
            lineHeight: '',
            letterSpace: '',
        },
        subheading:{   
            fontFamily : 'Roboto',
            fontSize : 2,
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: '',
            letterSpace: '',
        },
        body:{   
            fontFamily : 'Lato',
            fontSize : '20px',
            fontWeight: 500,
            textTransform: 'capitalize',
            lineHeight: '',
            letterSpace: '',
        },
    },      
    {   id: 4,
        title: 'Font Pairing 4',
        heading:{   
            fontFamily : 'Lato',
            fontSize : '50px',
            fontWeight: 300,
            textTransform: 'uppercase',
            lineHeight: '',
            letterSpace: '',
        },
        subheading:{   
            fontFamily : 'Georgia',
            fontSize : '30px',
            fontWeight: 500,
            textTransform: 'capitalize',
            lineHeight: '',
            letterSpace: '',
        },
        body:{   
            fontFamily : 'Times New Roman',
            fontSize : '20px',
            fontWeight: 300,
            textTransform: 'capitalize',
            lineHeight: '',
            letterSpace: '',
        },
    },      
]

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return pairings;
};

function getOne(id) {
    return pairings.find((pairing) => pairing.id === parseInt(id));
};