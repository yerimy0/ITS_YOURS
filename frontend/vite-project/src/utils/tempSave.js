export default function tempSave() {
    const dbReq = indexedDB.open('tempSave', 1);
    let db;
    dbReq.addEventListener('success', function (e) {
        db = e.target.result;

        const transaction = db.transaction(['product'], 'readwrite'); 
        const store = transaction.objectStore('product');
        const request = store.put(register);

        request.onsuccess = function () {
            console.log('임시 저장되었습니다.');
        };

        request.onerror = function () {
            console.log('임시 저장에 실패했습니다.');
        };
    });
    dbReq.addEventListener('error', function (e) {
        const error = e.target.error;
        console.log('error', error.name);
    });
    dbReq.addEventListener('upgradeneeded', function (e) {
        db = e.target.result;
        let oldVersion = e.oldVersion;
        if (oldVersion < 1) {
            const productStore = db.createObjectStore('product', { keyPath: 'id', autoIncrement: true });
        }
    });
}

// Redux 해서 전역 상태 관리 필요 

