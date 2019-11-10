document.write(`<table style = "padding: 10px">`);
for (let i = 2; i <= 9; i++) {
    document.write(`<tr style = "padding-bottom: 15px">`);
    for (let n = 2; n < 10; n++) {
        document.write(`<td style = "padding-left: 25px">`+ n + "*" + i + "=" + (i * n) + `</td>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);
