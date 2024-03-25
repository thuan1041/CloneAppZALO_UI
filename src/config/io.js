import { io } from 'socket.io-client';
import { BACKEND_URL } from '@env';

// "undefined" means the URL will be computed from the `window.location` object
export const socket = customSocket(io, BACKEND_URL);

async function customSocket(io, url) {
    try {
        let socket = null;
        const result = await new Promise(async (resolve, reject) => {
            if (url) {
                try {
                    socket = await io(url, { autoConnect: true, reconnection: false });
                    resolve(socket);
                } catch (error) {
                    console.error('Lỗi kết nối máy chủ socket:', error);
                    reject(error); // Báo lỗi cho Promise
                }
            } else {
                resolve(io());
            }
        });
        return result;
    } catch (error) {
        console.error('Lỗi tổng thể khi tạo socket:', error);
        // Hiển thị thông báo lỗi cho người dùng (tùy chọn)
    }
}