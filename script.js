function exerciseMaker() {
    let bodyPartDays = ['Legs', 'Chest', 'Arms', 'Shoulders', 'Back & Lats', 'Abs'];
    let legsEx = ['leg presses', 'barbell squats', 'hack squats', 'weighted lunges', 'push presses', 'leg extensions', 'leg curls'];
    let chestEx = ['push-ups', 'bench press', 'cable flys', 'chest press', 'incline bench press', 'pec deck', 'decline bench press', 'weighted dips'];
    let armsEx = ['bicep curls', 'concentration curls', 'preacher curls', 'barbell curls', 'EZ bar curls', 'tricep extension', 'skullcrushers', 'dips', 'cable pulldown'];
    let shouldersEx = ['shoulder presses', 'military presses', 'lateral raises', 'overhead presses', 'power cleans', 'arnold presses', 'shrugs', 'dumbbell shrugs'];
    let backLatsEx = ['pullups', 'bentover rows', 'lat pulldown', 'deadlifts', 'romainian dealifts', 'reverse flys'];
    let AbsEx = ['sit-ups', 'reverse crunches', 'hanging leg raises', 'hanging twists', 'russian twists', 'planks'];
    let todaysBodyPart = bodyPartDays[Math.floor(Math.random() * 6)];
    let todaysArr;
    switch (todaysBodyPart) {
        case 'Legs':
            todaysArr = legsEx;
            break;
        case 'Chest':
            todaysArr = chestEx;
            break;
        case 'Arms':
            todaysArr = armsEx;
            break;
        case 'Shoulders':
            todaysArr = shouldersEx;
            break;
        case 'Back & Lats':
            todaysArr = backLatsEx;
            break;
        case 'Abs':
            todaysArr = AbsEx;
            break;
        default:
            console.log('error picking exercise array');
    }

    // creates the Workout of the Day consisting of the number of exercises passed into the getUnique function (WOD)
    let wod;
    function getUnique(count) {
        // Make a copy of the array
        var tmp = todaysArr.slice(todaysArr);
        var ret = [];

        for (var i = 0; i < count; i++) {
            var index = Math.floor(Math.random() * tmp.length);
            var removed = tmp.splice(index, 1);
            // Since we are only removing one element
            ret.push(removed[0]);
        }
        return ret;
    }
    wod = getUnique(3);

    //[Math.floor(Math.random()*todaysArr.length)] + ' ' + todaysArr[Math.floor(Math.random()*todaysArr.length)] + ' ' + todaysArr[Math.floor(Math.random()*todaysArr.length)];
    let setArr = [3, 4, 5];
    let repPicker;
    let setPicker;
    if (setArr[Math.floor(Math.random() * setArr.length)] === 3) {
        repPicker = '6-8';
        setPicker = 3;
    } else if (setArr[Math.floor(Math.random() * setArr.length)] === 4) {
        repPicker = '8-10';
        setPicker = 4;
    } else {
        repPicker = '10-12';
        setPicker = 5;

    }

    console.log(`Today you're going to train your ${todaysBodyPart}. Your WOD consists of the following exercises: ${wod}. Aim for ${setPicker} sets of ${repPicker} reps. Enjoy!`);
}
exerciseMaker();
