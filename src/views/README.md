## Nơi lưu các file màn hình của ứng dụng

---

### Lưu ý

- Đặt tên file và thư mục viết bằng chữ cái, không viết hoa
- Đặt tên ngắn gọn, đúng ý nghĩa, dễ hiểu
- Có thể đặt lòng nhiều thư mục cho dễ quản lý
- File có đuôi .tsx để sử dụng type script
- Sử dụng Function component để sử dụng hooks

- VD cách đặt tên: home.tsx, setting.tsx, user-information.tsx

---

### Mẫu file viết bằng hooks (dùng cho cả view và component)

Cách 1:

```javascript
const ExampleScreen = () => {
  return (
    <View>
      <Text style={{color: 'red'}}>Bảo Châu mãi đỉnh</Text>
    </View>
  );
};
```

Cách 2:

```javascript
function ExampleScreen() {
  return (
    <View>
      <Text style={{color: 'red'}}>Bảo Châu mãi đỉnh</Text>
    </View>
  );
}
```

Lưu ý: Xem thêm 2 file trong thư mục views để biết thêm

---

### Contact

- [Facebook](https://fb.com/baochau9xx)
- [Telegram](https://t.me/baochau9xx)
