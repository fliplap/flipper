import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage/ngx";


export class SecureStorageMock extends SecureStorage {

    create(store: string): Promise<SecureStorageObject> {
        return new Promise((resolve, reject) => {
            const obj = new SecureStorageObject(this);
            resolve(obj);
        })
    }
}