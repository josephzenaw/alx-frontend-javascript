// 8-clean_set.js

function cleanSet(set, prefix) {
    const cleanedSet = new Set();

    set.forEach(item => {
        if (item.startsWith(prefix)) {
            cleanedSet.add(item.substring(prefix.length));
        }
    });

    return Array.from(cleanedSet).join('-');
}

export default cleanSet;

