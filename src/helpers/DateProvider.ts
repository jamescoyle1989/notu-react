export interface DateProvider {
    now(): Date;
}

export class RealDateProvider implements DateProvider {
    now(): Date {
        return new Date();
    }
}

export class FakeDateProvider implements DateProvider {
    private _date: Date;

    constructor(date: Date) {
        this._date = date;
    }
    
    now(): Date {
        return this._date;
    }
}