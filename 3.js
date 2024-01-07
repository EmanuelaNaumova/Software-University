function catLife(input) {
    let breed = input[0];
    let gender = input[1];

    let years = '';

    switch (breed) {
        case 'British Shorthair':
            if (gender === 'm') {
                years = 13;
            } else if (gender === 'f') {
                years = 14;
            }
            break;

        case 'Siamese':
            if (gender === 'm') {
                years = 15;
            } else if (gender === 'f') {
                years = 16;
            }
            break;

        case 'Persian':
            if (gender === 'm') {
                years = 14;
            } else if (gender === 'f') {
                years = 15;
            }
            break;

        case 'Ragdoll':
            if (gender === 'm') {
                years = 16;
            } else if (gender === 'f') {
                years = 17;
            }
            break;

        case 'American Shorthair':
            if (gender === 'm') {
                years = 12;
            } else if (gender === 'f') {
                years = 13;
            }
            break;

        case 'Siberian':
            if (gender === 'm') {
                years = 11;
            } else if (gender === 'f') {
                years = 12;
            }
            break;

        default:
            console.log(`${breed} is invalid cat!`);
            return;
    }

    let humanMonths = years * 12;
    let catMonths = humanMonths / 6;

    console.log(`${catMonths} cat months`);
}

catLife(["Ragdoll",
"f"]);
