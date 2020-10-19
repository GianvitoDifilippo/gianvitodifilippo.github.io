function vw(v: number): number
{
    let innerWidth = 0;
    if (typeof window !== 'undefined') innerWidth = window.innerWidth;
    let clientWidth = 0;
    if (typeof document !== 'undefined') clientWidth = document.documentElement.clientWidth;
    return (v * Math.max(clientWidth, innerWidth || 0)) / 100;
}

function vh(v: number): number
{
    let innerHeight = 0;
    if (typeof window !== 'undefined') innerHeight = window.innerHeight;
    let clientHeight = 0;
    if (typeof document !== 'undefined') clientHeight = document.documentElement.clientHeight;
    return (v * Math.max(clientHeight, innerHeight || 0)) / 100;
}

export { vw, vh };