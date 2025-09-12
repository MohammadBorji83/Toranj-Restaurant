import React, { useState } from "react";

const Login = ({ users }) => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.phone === phone && u.password === password
    );
    if (user) {
      setMessage(`خوش آمدی ${user.username} 🌹`);
    } else {
      setMessage("اطلاعات وارد شده اشتباه است ❌");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">ورود</h2>
      <input
        type="text"
        placeholder="نام کاربری"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="شماره همراه"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        ورود
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
