import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('getFullYear returns current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear().toBe(currentYear));
});

test('getFooterCopy returns correct string with true and false arguments', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test('getLatestNotification returns correct string', () => {
    const notification = getLatestNotification();
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    expect(typeof notification).toBe("string");
});