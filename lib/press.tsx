import fs from 'fs';
import path from 'path';

export interface PressRelease {
    publication: string;
    date: Date;
    link: string;
}

const pressFile: string = path.join(process.cwd(), 'data/press.json')

export function getSortedPress(): PressRelease[] {
    let results: PressRelease[] = [];
    let data = fs.readFileSync(pressFile, 'utf8');
    let pressData: Object = JSON.parse(data);

    for (const [year, series] of Object.entries(pressData)) {
        for (let release of series) {
            results.push(release);
        }
      }
    console.log('results', results)
    results = results.sort(function(a: any, b: any) {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });
    return results;
}