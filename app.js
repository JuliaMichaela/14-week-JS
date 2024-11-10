const grade1 = document.getElementById('grade1');
const grade2 = document.getElementById('grade2');
const grade3 = document.getElementById('grade3');
const grade4 = document.getElementById('grade4');
const grade5 = document.getElementById('grade5');
const grade6 = document.getElementById('grade6');
const grade7 = document.getElementById('grade7');
const grade8 = document.getElementById('grade8');
const grade9 = document.getElementById('grade9');
const grade10 = document.getElementById('grade10');
const grade11 = document.getElementById('grade11');
const grade12 = document.getElementById('grade12');
const averageGradePrint = document.getElementById('averageGrade');
const maxGradePrint = document.getElementById('maxGrade');
const minGradePrint = document.getElementById('minGrade');
const positiveGradesPrint = document.getElementById('positiveGrades');
const negativeGradesPrint = document.getElementById('negativeGrades');

const grades = [];

grades[0] = Math.floor(Math.random()*100);
grades[1] = Math.floor(Math.random()*100);
grades[2] = Math.floor(Math.random()*100);
grades[3] = Math.floor(Math.random()*100);
grades[4] = Math.floor(Math.random()*100);
grades[5] = Math.floor(Math.random()*100);
grades[6] = Math.floor(Math.random()*100);
grades[7] = Math.floor(Math.random()*100);
grades[8] = Math.floor(Math.random()*100);
grades[9] = Math.floor(Math.random()*100);
grades[10] = Math.floor(Math.random()*100);
grades[11] = Math.floor(Math.random()*100);

const averageGrade = Math.floor((grades.reduce((sum,current)=>sum+current,0))/grades.length);
const maxGrade = Math.max(...grades);
const minGrade = Math.min(...grades);

const positiveGrades = grades.filter(function(grade) {
    return grade >= 60;
})
const negativeGrades = grades.filter(function(grade) {
    return grade < 60;
})

const letterGrades = grades.map((grade)=>{
    if (grade >=80 && grade<=100){
        const letterGrades = 'A';
        return letterGrades;
    } else if ( grade>=60 && grade <=79) {
        const letterGrades = 'B';
        return letterGrades;
    } else if ( grade >=40 && grade <=59) {
        const letterGrades = 'C';
        return letterGrades;
    } else if ( grade >=20 && grade <=39) {
        const letterGrades = 'D';
        return letterGrades;
    } else {
        const letterGrades = 'E';
        return letterGrades;
    }
});

function print () {
    grade1.textContent = `Студент 1, количество баллов: ${grades[0]}, буквенная оценка: ${letterGrades[0]}`;
    grade2.textContent = `Студент 2, количество баллов: ${grades[1]}, буквенная оценка: ${letterGrades[1]}`;
    grade3.textContent = `Студент 3, количество баллов: ${grades[2]}, буквенная оценка: ${letterGrades[2]}`;
    grade4.textContent = `Студент 4, количество баллов: ${grades[3]}, буквенная оценка: ${letterGrades[3]}`;
    grade5.textContent = `Студент 5, количество баллов: ${grades[4]}, буквенная оценка: ${letterGrades[4]}`;
    grade6.textContent = `Студент 6, количество баллов: ${grades[5]}, буквенная оценка: ${letterGrades[5]}`;
    grade7.textContent = `Студент 7, количество баллов: ${grades[6]}, буквенная оценка: ${letterGrades[6]}`;
    grade8.textContent = `Студент 8, количество баллов: ${grades[7]}, буквенная оценка: ${letterGrades[7]}`;
    grade9.textContent = `Студент 9, количество баллов: ${grades[8]}, буквенная оценка: ${letterGrades[8]}`;
    grade10.textContent = `Студент 10, количество баллов: ${grades[9]}, буквенная оценка: ${letterGrades[9]}`;
    grade11.textContent = `Студент 11, количество баллов: ${grades[10]}, буквенная оценка: ${letterGrades[10]}`;
    grade12.textContent = `Студент 12, количество баллов: ${grades[11]}, буквенная оценка: ${letterGrades[11]}`;
    averageGradePrint.textContent = `Средний балл: ${averageGrade}`;
    maxGradePrint.textContent = `Максимальный балл: ${maxGrade}`;
    minGradePrint.textContent = `Минимальный балл: ${minGrade}`;
    positiveGradesPrint.textContent = `Количество положительных оценок: ${positiveGrades.length}`;
    negativeGradesPrint.textContent = `Количество отрицательных оценок: ${negativeGrades.length}`;
}
print ();

