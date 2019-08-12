export const transValidation = {
  email_incorrect: "Email phải có dạng example@company.domain !",
  gender_incorrect: "Vui lòng chọn giới tính",
  password_incorrect: "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác!",
  update_username: "username từ 3-17 kí tự và không phép được chứa kí tự đặc biệt !",
  update_gender: "Oops ! Dữ liệu giới tính bạn có vấn đề ?!",
  update_address: "Địa chỉ giới hạn trong 3-30 kí tự.",
  update_phone: "Số điện thoại không hợp lệ !"
}

export const transErrors = {
  account_in_use: "Email đã được đăng ký !",
  account_remove: "Tài khoản này đã bị khoá, nếu tin rằng điều này là hiểu nhầm, xin vui lòng liên hệ lại với bộ phận hỗ trợ của chúng tôi.",
  account_not_active: "Email này đã được đăng ký nhưng chưa active tài khoản, vui lòng kiểm tra hộp thư email và kích hoạt nó.",
  token_undefined: "Token không tồn tại !",
  login_failed: "Sai tài khoản hoặc mật khẩu !",
  server_error: "Có lỗi ở phía server, vui lòng thông báo cho bộ phận hỗ trợ. Xin cám ơn.",
  avatar_type: "Kiểu file không hợp lệ.",
  avatar_size: "Ảnh upload tối đa cho phép là 1 MB !"
}

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo thành công, vui lòng kiểm tra email của bạn để active !`
  },
  account_actived: "Kích hoạt tài khoản thành công, bạn đã có thể đăng nhập.",
  login_success: (username)=> {
    return `Xin chào ${username}, chúc bạn một ngày tốt lành.`
  },
  logout_success: "Đăng xuất tài khoản thành công, hẹn gặp lại bạn :)",
  avatar_updated: "Cập nhật thành công.",
  user_info_updated: "Cập nhật thông tin người dùng thành công."
};

export const transMail = {
  subject: "Awesome Chat: Xác nhận kích hoạt tài khoản!",
  template: (linkVerify) => {
    return `
      <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên Awesome Chat.</h2>
      <h3>Vui lòng click vào link bên dưới để xác nhận kích hoạt tài khoản.</h3>
      <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
      <h4>Nếu tin rằng email này là nhầm lẫn hãy bỏ qua nó. Trân trọng</h4>
    `;
  },
  send_failer: "Có lỗi trong quá trình gửi email, xin vui lòng liên hệ lại với bộ phận hỗ trợ của chúng tôi."
};
