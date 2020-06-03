export default (birthday: Date) => {
    const today = new Date()
    const y1 = today.getFullYear().toString().padStart(4, '0');
    const m1 = (today.getMonth() + 1).toString().padStart(2, '0');
    const d1 = today.getDate().toString().padStart(2, '0');
    const birthDate = new Date(birthday)
    const y2 = birthDate.getFullYear().toString().padStart(4, '0');
    const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
    const d2 = birthDate.getDate().toString().padStart(2, '0');
    const age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);
    return age
}
