function generateUserId() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `yashdeeproy_${day}${month}${year}`;
}

const userInfo = {
    email: "yashdeeproy2004@gmail.com",
    rollNumber: "22BCE1532",
    getUserId: generateUserId
};

module.exports = userInfo;
