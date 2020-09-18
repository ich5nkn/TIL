// 指定された月と曜日のポイントを２倍にする関数
export default async (baseId: number, argDate: Date, isHoliday: boolean) => {
    if (isHoliday) {
        return 1; // ポイント２倍は平日のみ
    }
    const month = argDate.getMonth() + 1;
    if (month === 7 || month === 8) {
        return 2; // ７・８月の平日は２倍
    }
    const weekCount = Math.floor((argDate.getDate() - 1) / 7) + 1;
    if (weekCount === 2 || weekCount === 4) { // 第２週、第４週
        if (baseId === 1 && argDate.getDay() === 2) {
            return 2; // 長門石、火曜日２倍
        }
        if (baseId === 2 && argDate.getDay() === 4) {
            return 2; // 城島、木曜日２倍
        }
    }
    return 1;
};
