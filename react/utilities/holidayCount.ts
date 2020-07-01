export default (fYear: string) => {
    const yearMonthList = [
        fYear + '-04',
        fYear + '-05',
        fYear + '-06',
        fYear + '-07',
        fYear + '-08',
        fYear + '-09',
        fYear + '-10',
        fYear + '-11',
        fYear + '-12',
        Number(fYear) + 1 + '-01',
        Number(fYear) + 1 + '-02',
        Number(fYear) + 1 + '-03'
    ];
    const isLeapYear = (Number(fYear) + 1) % 4 == 0; // うるう年を考慮
    const daysList = [30, 31, 30, 31, 31, 30, 31, 30, 31, 31, isLeapYear ? 29 : 28, 31];

    return yearMonthList.map((yearMonth, idx) => {
        let holidayCount = 0;
        const firstWeekDay = new Date(yearMonth + '-01').getDay(); // その月の１日は何曜日か
        if (firstWeekDay == 0) { holidayCount++; } // １日が日曜日の月は休日＋１
        const firstFriday = 6 - firstWeekDay; // 最初の金曜日は何日か
        const countDays = daysList[idx] - firstFriday; // 最初の土曜日を開始位置としたとき、何日カウントするか
        holidayCount += Math.ceil(countDays / 7) * 2; // 週（７日）で割って、休日＋２（土曜と日曜）
        if (countDays % 7 == 1) { holidayCount--; } // 土曜日で終わりのときは上の行で足した日曜分、休日−１
        return {
            yearMonth: yearMonth,
            holidayCount: holidayCount,
            weekdayCount: daysList[idx] - holidayCount,
        };
    });

};
