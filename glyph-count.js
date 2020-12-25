let glyphs = [...document.querySelectorAll('#test-font glyph')];

let names = glyphs.map(_ => {
    let glyph = {
        n: _.getAttribute('glyph-name'),
        u: _.getAttribute('unicode'),
    };
    return glyph; // if (glyph.u === glyph.n) { console.log('Skipped', glyph); } return glyph.u === glyph.n ? undefined : glyph;
}).filter(Boolean);
//console.log(names);

var html = names.map((_) => {
    let style = _.n === 'uniF064' || _.n === 'uniF065' || _.n === 'uniF0A1' ? ' style="font-size: 6px"' : '';
    return `<div class="symbols-range-cell"${style}> <div>${_.u}</div> <div>${_.n}</div> </div>`;
});
html = html.join('\n');
//console.log(html);

let parent = document.querySelector('.symbols-range');
parent.innerHTML = html;
