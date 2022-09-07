import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window'); // Chiều dài và chiều rộng của màn hình (dpi)

// Ở đây khỏi tạo những cái gì hay dùng nhất
// VD: Domain API, màu chính, màu phụ...

const appConfig = {
  hostURL: '', // Link domain api, vd: https://baochau.com. Lưu ý: link "http" sẽ không thể gọi api trên production
  colors: {
    // Các mã màu hay dùng, mã ở dưới là ví dụ thôi
    primary: '#007AFF',
    primaryLight: '#007AFF',
    primaryDark: '#007AFF',
    second: '#007AFF',
    secondLight: '#007AFF',
    secondDark: '#007AFF',
  },
  sizes: {
    dW: width,
    dH: height,
  },
  fonts: {
    Bold: 'SVN-Biennale-Bold', // Tên font chữ (tên file)
  },
};

// Export cái tụi vừa tạo ra ngoài
export default appConfig;
export {width, height, appConfig};
