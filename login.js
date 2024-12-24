// 模拟用户数据
const users = {
    'admin': 'admin123',
    'user1': 'password123'
};

// 处理登录
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // 检查用户名和密码
    if (users[username] && users[username] === password) {
        // 如果选择了"记住我"，将登录信息存储在localStorage中
        if (rememberMe) {
            localStorage.setItem('loggedInUser', username);
        } else {
            sessionStorage.setItem('loggedInUser', username);
        }
        
        // 登录成功，跳转到主页
        window.location.href = 'index.html';
    } else {
        alert('用户名或密码错误！');
    }
}

// 检查是否已登录
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser') || sessionStorage.getItem('loggedInUser');
    const currentPath = window.location.pathname;
    const isLoginPage = currentPath.endsWith('login.html') || currentPath.endsWith('/');
    
    if (!loggedInUser && !isLoginPage) {
        window.location.href = 'login.html';
    } else if (loggedInUser && isLoginPage) {
        window.location.href = 'index.html';
    }
    
    // 更新当前用户显示
    if (loggedInUser) {
        const userElement = document.getElementById('currentUser');
        if (userElement) {
            userElement.textContent = loggedInUser;
        }
    }
}

// 退出登录
function logout() {
    localStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

// 在页面加载时检查登录状态
document.addEventListener('DOMContentLoaded', checkLoginStatus); 