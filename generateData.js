const fs = require('fs');
const path = require('path');

const rawData = `Солом'янський
Азовська: 20, 22, 8
Амосова Миколи: 1, 2, 4
Барки Василя: 5
Білгородська: 14
Брожків Яр: 4/6
Вузівська: 4, 4а
Гаріна Бориса: 25, 28, 33, 37, 38, 44, 46, 50, 51, 52, 53, 68а
Головка Андрія: 1, 12, 13/1, 25, 29, 4, 6
Городня: 13, 32, 38, 40, 7
Григорія Кочура: 16, 16а, 18, 19, 19/2, 19/6, 3, 4, 6, 8
Громової Уляни: 14
Докучаєвська: 11, 16, 18а
Донська: 10, 11, 12, 14, 15, 16, 18, 2/58, 24, 26, 28, 30, 34, 4, 5а, 6, 8, 8а, 9
Ернста Федора: 12, 2, 6
Жмеринська: 2
Здолбунівська: 16
Зерових Братів: 14_1, 14_2, 14_3, 14/18, 14а, 19, 21, 23, 25
Златопільська: 3, 4к
Кавказька: 11, 13, 7, 9
Кадетський Гай: 11, 3, 6а, 7, 9
Кишинівська: 15, 24а
Кільцева дорога: 22/4
Клінічна: 12, 17, 21/19, 23/25, 40/4
Космодем'янської Зої: 22
Кривоноса Максима: 15, 17, 29
Кудряшова: 12/14, 16, 18, 2, 20, 20б, 20г, 22, 3, 4, 5, 5а, 6, 7, 77, 7б
Кучмин Яр: 15б, 58
Липківського Василя: 11, 13, 15, 17, 19, 21, 23, 24, 25, 27/5, 3, 34, 37а, 40, 45, 5, 7, 9
Лобановського Валерія проспект: 12, 18, 27, 29, 31, 33, 35, 37, 39_1, 39_2, 39б, 4_1, 41, 4а, 4б, 4в, 4г, 4ж, 53, 55, 57, 58/2, 59, 5а, 60, 64, 68, 68/2, 6а, 6в, 6д, 70, 9/1
Можайська: 10
Неходи Івана: 10, 3, 5, 7, 8
Нововокзальна: 19, 21, 53, 8
Озерна: 12а, 7, 9
Олексіївська: 11, 3, 3а, 5
Освіти: 14а, 3а
провулок Народний: 18, 2
Повітрофлотський проспект: 10, 19
Преображенська: 10/17, 14, 16, 19/2, 21, 22/9, 25, 26, 27, 28, 37, 40, 8б
провулок Енергетиків: 1
проспект Академіка Палладіна: 23а
Проценко Людмили: 15, 2, 4, 6, 8
Пулюя Івана: 1, 1а, 2, 3, 5а, 5б
Радченка Петра: 11, 12, 14, 17, 21а, 4, 6, 7, 8
Ратушного Романа: 12, 14, 16, 17, 18, 19, 2, 2/4, 21, 21а, 23, 25а, 27, 29, 29a, 29а, 3, 31, 33, 37, 39, 4, 41, 41а, 5, 6, 9а
Роздільна: 1, 3, 5
Семенівська: 11, 13, 9
Сім'ї Житецьких: 17
Скрипника Мстислава Патріарха: 11, 13, 15, 40, 7
Солом'янська: 14, 16, 16б, 20а, 20в, 21, 22, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 41а, 41к2
Стадіонна: 16/6, 6
Тополева: 4/8
Уманська: 7
Шаповала Генерала: 2, 2а
Яновського Феофіла: 1, 1а, 2, 3а
Яслинська: 11б`;

const lines = rawData.split('\n').filter(line => line.trim() && !line.startsWith("Солом'янський"));

const centerLat = 50.4265;
const centerLng = 30.4633;

// Weighted: 45% XGS-PON, 40% GPON, 15% PLANNED
function randomTechType() {
    const r = Math.random();
    if (r < 0.45) return 'XGS-PON';
    if (r < 0.85) return 'GPON';
    return 'PLANNED';
}

const addresses = [];
let idCounter = 1;

lines.forEach(line => {
    const parts = line.split(':');
    if (parts.length === 2) {
        const street = parts[0].trim();
        const houses = parts[1].split(',').map(h => h.trim()).filter(h => h);

        houses.forEach(house => {
            const offsetLat = (Math.random() - 0.5) * 0.04;
            const offsetLng = (Math.random() - 0.5) * 0.04;
            addresses.push({
                id: idCounter++,
                street,
                house,
                lat: centerLat + offsetLat,
                lng: centerLng + offsetLng,
                techType: randomTechType(),
            });
        });
    }
});

const tsContent = `export type TechType = 'XGS-PON' | 'GPON' | 'PLANNED';

export interface CoverageAddress {
    id: number;
    street: string;
    house: string;
    lat: number;
    lng: number;
    techType: TechType;
}

export const coverageAddresses: CoverageAddress[] = ${JSON.stringify(addresses, null, 4)};
`;

const dataDir = path.join(__dirname, 'app', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

fs.writeFileSync(path.join(dataDir, 'coverageAddresses.ts'), tsContent, 'utf-8');
console.log('Generated app/data/coverageAddresses.ts — ' + addresses.length + ' addresses');
