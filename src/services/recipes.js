import { get, post, del, patch } from '../data';
import { objectToArray } from '../util';

const URL = 'https://beer-receipt-builder-default-rtdb.firebaseio.com/';


export async function getAll() {
    let data = await get(URL + 'recipes.json');

    return objectToArray(data);
};

export async function getOne(id) {
    let recipes = await getAll();

    let recipe = recipes.find(x => x._id === id);

    return recipe;
};

export async function deleteOne(id) {
    await del(URL + 'recipes/' + id + '.json');
}

export async function create(data) {
    await post(URL + 'recipes.json', data);
}

export async function edit(id, data) {
    await patch(URL + 'recipes/' + id + '.json', data)
}