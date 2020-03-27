const chunkArray = (array, chunk) => {
    let auxArray = [];
    array.forEach((_, index) => {
        if (index % chunk === 0) {
            auxArray.push(array.slice(index, index + chunk));
        }
    })

    const [left_overs] = auxArray.filter(array => array.length < chunk);
    auxArray = auxArray.filter(array => array.length >= chunk);
    auxArray[auxArray.length - 1] = left_overs ? [...auxArray[auxArray.length - 1], ...left_overs] : [...auxArray[auxArray.length - 1]];
    return auxArray;
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3));