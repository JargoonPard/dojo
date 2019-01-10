export class Sample {
    IsLeapYear = (year: number): boolean => {
        if(year < 1) {return false;}
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ;
    }
}