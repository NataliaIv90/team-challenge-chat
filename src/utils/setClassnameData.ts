export const setClassnameData = (data:string[]): string => {
return data.filter((el) => el && el.length)
        .join(' ');
}