import { get } from '../data';
import { objectToArray } from '../util';

const URL = 'https://beer-receipt-builder-default-rtdb.firebaseio.com/';


export async function getAll() {
    let data = await get(URL + 'recipes.json');

    return objectToArray(data);
}