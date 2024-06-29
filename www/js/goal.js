function showGoalDetails(goalType) {
    switch (goalType) {
        case 'loseWeight':
            alert('Details about losing weight: \n- Calorie deficit\n- Regular cardio\n- Balanced diet');
            break;
        case 'gainWeight':
            alert('Details about gaining weight: \n- Calorie surplus\n- Strength training\n- Protein-rich diet');
            break;
        case 'addMuscle':
            alert('Details about adding muscle: \n- Strength training\n- High protein intake\n- Progressive overload');
            break;
        default:
            alert('Invalid goal type');
    }
}
