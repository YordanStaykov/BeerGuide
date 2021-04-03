import { get, post, del, patch } from '../helpers';
import config from '../config/config'

export async function getAll() {
    let data = await get(config.URL + 'recipes.json');

    if (data === null) {
        return [];
    } else {
        return Object.entries(data).map(([key, value]) => Object.assign({ _id: key }, value));
    };
};

export async function getOne(id) {
    let recipes = await getAll();

    let recipe = recipes.find(x => x._id === id);

    return recipe;
};

export async function deleteOne(id) {
    await del(config.URL + 'recipes/' + id + '.json');
}

export async function create(data) {
    await post(config.URL + 'recipes.json', data);
}

export async function edit(id, data) {
    await patch(config.URL + 'recipes/' + id + '.json', data)
}