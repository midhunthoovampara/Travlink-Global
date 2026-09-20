const fs = require('fs');
const file = 'public/css/style.css';
let content = fs.readFileSync(file, 'utf8');

const replacement = `@media (max-width: 1199.98px) {
    .travlink-possibilities__grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 767.98px) {
    .travlink-possibilities__grid {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 15px;
        padding-bottom: 20px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .travlink-possibilities__grid::-webkit-scrollbar {
        display: none;
    }

    .travlink-possibilities__card {
        flex: 0 0 calc(50% - 7.5px);
        scroll-snap-align: start;
    }
}

.travlink-possibilities__card {
    position: relative;`;

const pattern = /@media\s*\(max-width:\s*1199\.98px\)\s*\{.*?\.travlink-possibilities__card\s*\{\s*position:\s*relative;/s;
const fixed = content.replace(pattern, replacement);

fs.writeFileSync(file, fixed, 'utf8');
console.log('Success');